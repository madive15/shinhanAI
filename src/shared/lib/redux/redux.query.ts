import { authAction } from './../../../features/auth/auth.slice';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query";
import { API_BASE_URL } from "~/shared/config/constants";
import { RootState } from "./";

// Define base query with authorization header
export const baseQuery = fetchBaseQuery({
baseUrl: API_BASE_URL,
prepareHeaders: (headers, { getState }) => {
  const token = (getState() as RootState).auth.usedToken;
  if (token) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return headers;
},
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, store, extraOptions) => {
  let result = await baseQuery(args, store, extraOptions);
  const authState = (store.getState() as RootState).auth;

  if (result.error && result.error.status === 401) {
    if (!authState.token || !authState.refreshToken) return result;
    // Update token to use refresh token
    store.dispatch(authAction.adjust(authState.refreshToken as string));

    // Try to refresh the token
    const refreshResult = await baseQuery("/refresh-token", store, extraOptions);

    if (refreshResult.data) {
      // Store the new tokens
      store.dispatch(
        authAction.change({
          accessToken: (refreshResult.data as any).accessToken,
          refreshToken: authState.refreshToken as string,
        })
      );
      // Retry the original request
      result = await baseQuery(args, store, extraOptions);
    } else {
      store.dispatch(authAction.logout());
    }
  }
  return result;
};
