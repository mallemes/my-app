import {api, profileApi} from "../Api/Api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_USER_AVATAR = "SET_USER_AVATAR";

const defSate = {
    posts: [
        {id: 1, text: "offd vfnvn vkvvp"},
        {id: 2, text: "f dffv eff vfvfdd"},
        {id: 3, text: "12 algaaaaaaaaaaaaaaaaaa"},
        {id: 4, text: "offd vfnvn vkvfdvf vffdvvvp"},
        {id: 5, text: "offd vfnvnr43efgrcvegr  reeegr vkvvp"},
        {id: 6, text: "offbgbbrgfddfd vfnvn vkvvp"},
    ],

    user: null,
    userStatus: '',
}
const dialogsReducer = (state = defSate, action) => {
    if (action.type === "ADD-POST") {
        const obj = {id: 11, text: action.post}
        const copyState = {...state};
        copyState.posts = [...state.posts];
        copyState.posts.push(obj);
        return copyState;

    } else if (action.type === SET_USER_DATA) {
        return {
            ...state,
            user: {...action.data},
        }
    } else if (action.type === SET_USER_STATUS) {
        return {
            ...state,
            userStatus: action.status,
        }
    } else if (action.type === SET_USER_AVATAR) {
        return {
            ...state,
            user: {...state.user, photos: action.photos}
        }
    }
    return state
}
export const userDataAC = (data) => ({type: SET_USER_DATA, data})
export const userStatusAC = (status) => ({type: SET_USER_STATUS, status})
const setUserAvatarAC = (photos) => ({type: SET_USER_AVATAR, photos})
export default dialogsReducer;

export const userProfile = (a) => (dispatch) => {
    api.userProfile(a).then(data => dispatch(userDataAC(data)))
}
export const setUserStatus = (status) => {
    return async (dispatch) => {
        const response = await profileApi.setProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(userStatusAC(status))
        }
    }
}
export const getStatus = (userId) => (dispatch) => {
    profileApi.getProfileStatus(userId).then(response => dispatch(userStatusAC(response.data)));
}
export const addPostAC = (post) => ({type: "ADD-POST", post})

export const setProfileImage = (photoFile) => {
    return async (dispatch) => {
        const response = await profileApi.editAvatar(photoFile)
        if (response.data.resultCode === 0) {
            return dispatch(setUserAvatarAC(response.data.data.photos))
        }
    }
}