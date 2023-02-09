import {api} from "../Api/Api";

const SET_USER_DATA = "SET_USER_DAT";

const defSate = {
        userId: null,
        login: null,
        email: null,
        isAuth:false,
}
const authReducer = (state = defSate, action) => {
   if (action.type === SET_USER_DATA){
        return {
            ...state,
           ...action.data,
            isAuth: true


        }
    }
    return state
}
export const authUserDataAC = (userId,login, email)=>({type:SET_USER_DATA,data:{userId,login, email}})
export default authReducer;

export const auth = ()=> (dispatch)=>{
    api.auth().then(data => {
        if(data.resultCode ===0) {
            let {id, login, email} = data.data;
            dispatch(authUserDataAC(id, login, email));
        }
    });
}