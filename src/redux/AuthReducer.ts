import {api} from "../Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DAT";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

const defSate = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}
const authReducer = (state = defSate, action: {type:string; data?:any; captchaUrl?:any}): typeof defSate => {
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
type authUserDataTypeAC = (userId: number | null, login: string | null, email: string | null, isAuth: boolean)=>{type:typeof SET_USER_DATA; data:{userId: number | null, login: string | null, email: string | null, isAuth: boolean}}
 const authUserDataAC:authUserDataTypeAC = (userId, login,email, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, login, email, isAuth}
})
const setCaptchaUrl = (captchaUrl: string): { type: typeof SET_CAPTCHA_URL; captchaUrl: string } => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
})
export default authReducer;

export const auth = () => async (dispatch: any): Promise<void> => {
    const data = await api.auth()
    if (data.resultCode === 0) {
        let {email, id, login} = data.data;
        dispatch(authUserDataAC(id, login, email, true));
    }
    return data;
}
export const getCaptcha = () => (dispatch: any) => {
    api.authGetCaptcha().then(data => {
        dispatch(setCaptchaUrl(data.url))
    })
}
export const logined = (email: string, password: string, rememberMe: boolean, captcha: any) => (dispatch: any): void => {
    api.authLogin(email, password, rememberMe, captcha).then(response => {
        if (response.data.resultCode === 0) dispatch(auth())
        else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            let message = "error" && response.data.messages[0]
            dispatch(stopSubmit('login', {_error: message}))
        }
    });
}
export const logout = () => (dispatch: any): void => {
    api.authLogout().then(
        response => {
            if (response.data.resultCode === 0)
                dispatch(authUserDataAC(null, null, null, false))
        }
    )
}