import { combineReducers } from 'redux'
import cartSlice from './cartSlice'
import themeSlice from './Slicetheme'

const  rootReducers=combineReducers({
    cartReducer:cartSlice.reducer,
    themeReducer:themeSlice.reducer

})
export default rootReducers