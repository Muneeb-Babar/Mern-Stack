import { combineReducers } from 'redux'
import cartSlice from './cartSlice'
import themeSlice from './Slicetheme'
import userSlice from './userSlice'


const  rootReducers=combineReducers({
    cartReducer:cartSlice.reducer,
    themeReducer:themeSlice.reducer,
    userReducer:userSlice.reducer

})
export default rootReducers