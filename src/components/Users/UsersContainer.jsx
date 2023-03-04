import React from 'react';
import {connect} from "react-redux";
import {getUsers, myFollow, unFollow} from "../../redux/UsersReducer";
import Users from "./Users";
import {
    getCurrentPageSL,
    getFollowingInProgressSL,
    getLoadingSL,
    getPageSizeSL,
    getTotalCountSL,
    getUsersSL
} from "../../redux/Selectors";

class UsersCl extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage)

    }

    onChangePage = (pageId) => {
        return this.props.getUsers(pageId)
    }


    render() {
        {console.log('sss')}
        // let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        // const pages = [];
        // for (let i=1;i<pagesCount+1;i++){
        //     pages.push(i)
        // }
        // // const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const followUser = (userId) => this.props.myFollow(userId)
        const unFollowUser = (userId) => this.props.unFollow(userId)
        return (<Users followUser={followUser} unFollowUser={unFollowUser}
                       onChangePage={this.onChangePage} {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSL(state),
        pageSize: getPageSizeSL(state),
        totalCount: getTotalCountSL(state),
        currentPage: getCurrentPageSL(state),
        loadingValue: getLoadingSL(state),
        followingInPg: getFollowingInProgressSL(state),
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