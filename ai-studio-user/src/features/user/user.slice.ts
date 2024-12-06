import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "~/shared/model/user/user.model";
// import { storage } from "~/shared/lib/storage";

// const userModelKey = 'userModel'
// const data = storage.session.get(userModelKey)
// const initialState: UserModel =  data ? data : {
//     id: 'id',
//     name: 'name',
//     count: 0
// }

const initialState: UserModel = {
    id: 'id',
    name: 'name',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: (state, action) => {
            state.count += action.payload;
            // storage.session.set(userModelKey, state)
            
        },
        sub: (state, action) => {
            state.count -= action.payload;
            // storage.session.set(userModelKey, state)
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;