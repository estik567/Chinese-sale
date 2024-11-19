import produce from "immer"
import { combineReducers, createStore } from "redux"
import { donationsReducer } from "./DonationsSlice/donationsSlice"
import { itemsReducer } from "./ItemsSlice/itemsSlice"
import { usersReducer } from "./UersSlice/usersSlice"

const reducer = combineReducers( {
    users:usersReducer,
    items:itemsReducer,
    donations:donationsReducer

})
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())