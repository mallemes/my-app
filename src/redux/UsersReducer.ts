import {api} from "../Api/Api";

const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CUR_PAGE = 'SET_CUR_PAGE';
const SET_LOAD_VALUE = 'SET_LOAD_VALUE';
const TOGGLE_FOLLOWING_PRG = 'TOGGLE_FOLLOWING_PRG';

type defValuesType = {
    users: Array<{ name:string|null;id: any, followed: boolean | null,status:boolean|null, photos:any }>,
    pageSize: null | number
    totalCount: number,
    currentPage: number,
    loading: boolean,
    followingInProgress: any,
}
const defValue: defValuesType = {
    users: [],
    pageSize: 10,
    totalCount: 100,
    currentPage: 1,
    loading: false,
    followingInProgress: [],
}


const UsersReducer = (state = defValue, action:any): defValuesType => {  //action ={type:"...", ...}
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map((user) => {
                if (user.id === action.userId)
                    return {...user, followed: true}
                return user;
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map((user) => {
                if (user.id === action.userId)
                    return {...user, followed: false}
                return user;
            })
        }
    } else if (action.type === SET_USERS) {
        return {
            ...state,
            users: [...action.users]
        }
    } else if (action.type === SET_CUR_PAGE) {
        return {
            ...state,
            currentPage: action.pageId
        }
    } else if (action.type === SET_LOAD_VALUE) {
        return {
            ...state,
            loading: action.loading
        }
    } else if (action.type === TOGGLE_FOLLOWING_PRG) {
        return {
            ...state,
            followingInProgress: action.isFetching ?
                [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter((id: any) => id !== action.userId)
        }
    } else if (action.type === SET_USERS_TOTAL_COUNT) {
        return {
            ...state,
            totalCount: action.totalCount
        }
    }
    return state;
}
export const myFollowCreate: (userId: any) => { type: typeof FOLLOW; userId:any } = (userId) => ({
    type: FOLLOW,
    userId: userId
});
export const unFollowCreate: (userId: any) => { type: typeof UNFOLLOW; userId:any } = (userId) => ({
    type: UNFOLLOW,
    userId: userId
});
export const setUsersCreate = (users:any) => ({type: SET_USERS, users: users});
const setUsersTotalCount = (totalCount:number) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const setCurPageAC = (pageId:number) => ({type: SET_CUR_PAGE, pageId: pageId});
export const setLoadAC = (loading:boolean) => ({type: SET_LOAD_VALUE, loading});
export const toggleFollowingPRG = (isFetching:any, userId:any) => ({type: TOGGLE_FOLLOWING_PRG, isFetching, userId});
export const getUsers = (currentPage:number, totalCount:number) => {
    return async (dispatch:any) => {
        dispatch(setCurPageAC(currentPage))
        dispatch(setLoadAC(true))
        const data = await api.getUsers(currentPage, totalCount)
        dispatch(setUsersCreate(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
        dispatch(setLoadAC(false));
    }
}
export const unFollow = (userId:any) => async (dispatch:any) => {
    dispatch(toggleFollowingPRG(true, userId))
    const data = await api.unFollow(userId);
    dispatch(toggleFollowingPRG(false, userId))
    if (data.resultCode === 0) {
        dispatch(unFollowCreate(userId))
    }
}
export const myFollow = (userId:any) => async (dispatch:any) => {
    dispatch(toggleFollowingPRG(true, userId))
    const data = await api.follow(userId)
    dispatch(toggleFollowingPRG(false, userId))
    if (data.resultCode === 0) {
        dispatch(myFollowCreate(userId))
    }
}

export default UsersReducer;