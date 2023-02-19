import {api} from "../Api/Api";

const SET_USER_DATA = "SET_USER_DAT";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

const defSate = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: "",
}
const authReducer = (state = defSate, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            login: action.data.login,
            email: action.data.email,
            userId: action.data.userId,
            isAuth: action.data.isAuth,
        }
    } else if (action.type === SET_CAPTCHA_URL) {
        return {
            ...state,
            captchaUrl: action.captchaUrl,
        }
    }
    return state
}
export const authUserDataAC = (userId, login, email, isAuth) => ({type: SET_USER_DATA, data: {userId, login, email, isAuth}})
const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})
export default authReducer;

export const auth = () => (dispatch) => {
    api.auth().then(data => {
        if (data.resultCode === 0) {
            let {email, id, login} = data.data;
            dispatch(authUserDataAC(id, login, email, true));
        }
    });
}
export const getCaptcha = () => (dispatch) => {
    api.authGetCaptcha().then(data => {
        dispatch(setCaptchaUrl(data.url))
    })
}
export const loginned = (email, password, rememberMe) => (dispatch) => {
    api.authLogin(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) dispatch(auth())
    });
}
export const logout = ()=> dispatch=>{
    api.authLogout().then(
        response =>{
            if (response.data.resultCode === 0)
            dispatch(authUserDataAC(null, null, null, false))
        }
    )
}