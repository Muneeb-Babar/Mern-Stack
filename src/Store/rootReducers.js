import { combineReducers } from 'redux'
import cartSlice from './cartSlice'
import themeSlice from './Slicetheme'
import userSlice from './userSlice'
import tokenSlice from './tokenSlice'


const  rootReducers=combineReducers({
    cartReducer:cartSlice.reducer,
    themeReducer:themeSlice.reducer,
    userReducer:userSlice.reducer,
    tokenReducer:tokenSlice.reducer

})
export default rootReducers