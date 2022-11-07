import {combineReducers, createStore} from 'redux'
import calc from "./reducers/calcReducer";
import currentUser from "./reducers/userReducer";
import buttonHistory from "./reducers/historyReducer";

export default function configureStore(preloadedState) {
    return createStore(combineReducers({
        calc,
        buttonHistory,
        currentUser,
    }), preloadedState)
}