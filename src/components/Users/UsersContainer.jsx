import React from 'react';
import {connect} from "react-redux";
import {
    myFollowCreate,
    setCurPageAC,
    setLoadAC,
    setUsersCreate,
    toggleFollowingPRG,
    unFollowCreate
} from "../../redux/UsersReducer";
import Users from "./Users";
import {api} from "../../Api/Api";

class UsersCl extends React.Component {
    componentDidMount() {
        this.props.setLoadVal(true);
        api.getUsers(this.props.currentPage,this.props.totalCount)
            .then(data => {
            this.props.setUsers(data.items)
                this.props.setLoadVal(false);
                });
        }

    onChangePage =(pageId)=>{
        this.props.setCurPage(pageId)
        this.props.setLoadVal(true);
        api.getUsers(pageId, this.props.totalCount)
            .then(data => {
                this.props.setUsers(data.items);
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
        return (<Users pages={pages}
                       followUser={followUser} unFollowUser={unFollowUser}
                       onChangePage={this.onChangePage} {...this.props}/>
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
        followingInPg:state.usersPage.followingInProgress,
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
        },
        toggleFollowingPRG :(isFetching,userId)=> dispatch(toggleFollowingPRG(isFetching,userId)),
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCl);

export default UsersContainer;