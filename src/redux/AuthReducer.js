import {api} from "../Api/Api";

const SET_USER_DATA = "SET_USER_DAT";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

const defSate = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl:"",
}
const authReducer = (state = defSate, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
    }else if (action.type === SET_CAPTCHA_URL){
        return {
            ...state,
            captchaUrl: action.captchaUrl,
        }
    }
    return state
}
export const authUserDataAC = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}})
const setCaptchaUrl = (captchaUrl) =>({type:SET_CAPTCHA_URL, captchaUrl})
export default authReducer;

export const auth = () => (dispatch) => {
    api.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(authUserDataAC(id, login, email));
        }
    });
}
export const getCaptcha = () => (dispatch) => {
    api.authGetCaptcha().then(data =>{
        dispatch(setCaptchaUrl(data.url))
    })
}
export const loginned = (email, password, rememberMe, captcha)=>()=>{
    api.authLogin(email, password, rememberMe, captcha).then(data=>{console.log(data)})
    // dispatch()
}