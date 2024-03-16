import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
    user: '',
    token: '',
    },
    reducers: {
        updateUser: (state,data) => {
            console.log(data)
            state.user = data.payload
        },
        setToken: (state, data) => {
            console.log(data)
            state.token = data.payload;
        },
    }
})
export const { updateUser,setToken } = userSlice.actions
export default userSlice