import React from 'react';
import {connect} from "react-redux";
import {getUsers, myFollow, unFollow} from "../../redux/UsersReducer";
import Users from "./Users";

class UsersCl extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.totalCount)
    }

    onChangePage = (pageId) => {
        return this.props.getUsers(pageId, this.props.totalCount)
    }

    render() {
        // let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        // const pages = [];
        // for (let i=1;i<pagesCount+1;i++){
        //     pages.push(i)
        // }
        const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const followUser = (userId) => this.props.myFollow(userId)
        const unFollowUser = (userId) => this.props.unFollow(userId)
        return (<Users pages={pages}
                       followUser={followUser} unFollowUser={unFollowUser}
                       onChangePage={this.onChangePage} {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        loadingValue: state.usersPage.loading,
        followingInPg: state.usersPage.followingInProgress,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        myFollow: (userId) => {
            return dispatch(myFollow(userId))
        },
        unFollow: (userId) => {
            return dispatch(unFollow(userId));
        },
        getUsers: (currentPage, totalCount) => {
            return dispatch(getUsers(currentPage, totalCount))
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCl);

export default UsersContainer;