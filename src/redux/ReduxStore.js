import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    profilePage: dialogsReducer,
    dialogsPage: profileReducer,
    usersPage :UsersReducer,
    auth: AuthReducer,
    form: formReducer,
})
const store = createStore(reducers,applyMiddleware(thunk));
Window.store= store;
export default store;