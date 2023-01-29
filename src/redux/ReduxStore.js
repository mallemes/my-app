import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
const reducers = combineReducers({
    profilePage: dialogsReducer,
    dialogsPage: profileReducer,
    usersPage :UsersReducer,
    auth: AuthReducer,
})
const store = createStore(reducers);
Window.str= store;
export default store;