import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
const reducers = combineReducers({
    profilePage: dialogsReducer,
    dialogsPage: profileReducer,
    usersPage :UsersReducer,
})
const store = createStore(reducers);

export default store;