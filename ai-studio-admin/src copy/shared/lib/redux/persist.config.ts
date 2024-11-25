// import storage from 'redux-persist/lib/storage'
// Session Storage를 사용할 경우
import sessionStorage from 'redux-persist/lib/storage'
export const persistConfig = {
    // config 작성
    key: "root",
    storage: sessionStorage,
    whiteList: ["user", "auth"], // 적용할 리듀서를 whiteList에 포함시킨다.
  };