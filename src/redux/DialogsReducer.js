import {api, profileApi} from "../Api/Api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_STATUS = "SET_USER_STATUS";

const defSate = {  posts: [
        {id: 1, text: "offd vfnvn vkvvp"},
        {id: 2, text: "f dffv eff vfvfdd"},
        {id: 3, text: "12 algaaaaaaaaaaaaaaaaaa"},
        {id: 4, text: "offd vfnvn vkvfdvf vffdvvvp"},
        {id: 5, text: "offd vfnvnr43efgrcvegr  reeegr vkvvp"},
        {id: 6, text: "offbgbbrgfddfd vfnvn vkvvp"},
    ],
    newText: '',
    user:null,
    userStatus : '',
}
const dialogsReducer = (state = defSate, action) => {
    if (action.type === "ADD-POST") {
        const obj = {id: 11, text: state.newText}
        const copyState = {...state};
       copyState.posts = [...state.posts];
       copyState.posts.push(obj);
        copyState.newText = '';
        return copyState;

    } else if (action.type === "NEW-POST-VALUE") {
       const copyState2 = {...state};
        copyState2.newText = action.newText;
        return copyState2;
    }else if (action.type === SET_USER_DATA){
        return {
            ...state,
            user: {...action.data},
        }
    }else if (action.type === SET_USER_STATUS){
        return {
            ...state,
            userStatus: action.status,
        }
    }
    return state
}
export const userDataAC = (data)=>({type:SET_USER_DATA,data})
export const userStatusAC = (status)=>({type:SET_USER_STATUS,status})
export default dialogsReducer;

export const userProfile = (a) =>(dispatch)=>{
    api.userProfile(a).then(data => dispatch(userDataAC(data)))
}
export const setUserStatus = (status)=>(dispatch)=>{
    profileApi.setProfileStatus(status)
        .then(response =>{
            if (response.data.resultCode===0){
            dispatch(userStatusAC(status))}}
        )}
export const getStatus = (userId)=>(dispatch)=>{
    profileApi.getProfileStatus(userId).then(response => dispatch(userStatusAC(response.data)));
}