import { createSlice} from '@reduxjs/toolkit'

const userToken = createSlice({
    name: 'token',
    initialState: {
    tokens: {}
    },
    reducers: {
    setToken: (state ,data) => {
        state.tokens = data.payload
    },
    removetoken: state => {
        state.tokens = {}
    }
    }
})

export const { setToken, removetoken } = userToken.actions

export default userToken