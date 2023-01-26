const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CUR_PAGE = 'SET_CUR_PAGE';
const SET_LOAD_VALUE = 'SET_LOAD_VALUE';
const defValue = {
    users: [],
    pageSize: 3,
    totalCount: 10,
    currentPage:1,
    loading: false,
}


const UsersReducer = (state = defValue, action) => {  //action ={type:"...", ...}
    if (action.type === FOLLOW) {
        // return {
        //     ...state,
        // users: state.users.map((el)=>el.id===action.userId ? el.followed=true :el.followed),
        // }
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
    }else if (action.type === SET_USERS){
        return {
            ...state,
            users: [...action.users]
        }
    }
    else if (action.type === SET_CUR_PAGE){
        return {
            ...state,
            currentPage: action.pageId
        }
    }
    else if (action.type === SET_LOAD_VALUE){
        return {
            ...state,
            loading: action.loading
        }
    }
    return state;
}
export const myFollowCreate = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowCreate = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersCreate = (users) => ({type: SET_USERS, users:users});
export const setCurPageAC = (pageId) => ({type: SET_CUR_PAGE, pageId:pageId});
export const setLoadAC = (loading) => ({type: SET_LOAD_VALUE, loading});
// export const setCurPageAC = (users) => ({type: SET_CUR_PAGE, users:users});

export default UsersReducer;