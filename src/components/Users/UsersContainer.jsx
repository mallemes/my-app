import React from 'react';
import {connect} from "react-redux";
import {myFollowCreate, setCurPageAC, setUsersCreate, unFollowCreate} from "../../redux/UsersReducer";
import UsersCl from "./UsersCl";


const mapStateToProps = (state)=>
{
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch)=>
{
    return{
        myFollow : (userId)=>{
            return dispatch(myFollowCreate(userId))
        },
        unFollow : (userId)=>{
            return dispatch(unFollowCreate(userId));
        },
        setUsers : (users)=> {
            return dispatch(setUsersCreate(users))
        },
        setCurPage :(pageId) => {
            return dispatch(setCurPageAC(pageId));
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCl);

export default UsersContainer;