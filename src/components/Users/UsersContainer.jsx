import React from 'react';
import {connect} from "react-redux";
import {myFollowCreate, setCurPageAC, setLoadAC, setUsersCreate, unFollowCreate} from "../../redux/UsersReducer";
import axios from "axios";
import Users from "./Users";

class UsersCl extends React.Component {
    componentDidMount() {
        this.props.setLoadVal(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalCount}`,
            {withCredentials:true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setLoadVal(false);
            });
    }
    onChangePage =(pageId)=>{
        this.props.setCurPage(pageId)
        this.props.setLoadVal(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageId}&count=${this.props.totalCount}`,
            {withCredentials:true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setLoadVal(false);})
            .catch((error) =>console.error(error));
    }

    render() {
        // let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        // const pages = [];
        // for (let i=1;i<pagesCount+1;i++){
        //     pages.push(i)
        // }
        const pages = [1,2,3,4,5,6,7,8,9];

        const followUser = (userId) => this.props.myFollow(userId)
        const unFollowUser = (userId) => this.props.unFollow(userId)
        return (<Users pages={pages} users={this.props.users}
                       followUser={followUser} unFollowUser={unFollowUser}
                       currentPage={this.props.currentPage}
                       onChangePage={this.onChangePage}
                       loadingValue={this.props.loadingValue}/>
        );
    }
}
const mapStateToProps = (state)=>
{
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage,
        loadingValue:state.usersPage.loading,
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
        setLoadVal :(loading)=>{
            return dispatch(setLoadAC(loading))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCl);

export default UsersContainer;