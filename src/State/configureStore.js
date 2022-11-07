import {combineReducers, createStore} from 'redux'
import calcReducer from "./reducers/calcReducer";
import currentUser from "./reducers/userReducer";
import buttonHistory from "./reducers/historyReducer";

export default function configureStore(preloadedState) {
    return createStore(combineReducers({
        calcReducer,
        buttonHistory,
        currentUser,
    }), preloadedState)
}