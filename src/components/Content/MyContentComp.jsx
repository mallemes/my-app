import React, {Suspense} from "react";
import MyContent from "./MyContent";
import {connect} from "react-redux";

import {userProfile, setUserStatus, getStatus, addPostAC} from "../../redux/DialogsReducer";
import {withAuthRedirect, withRouter} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Navigate} from "react-router-dom";


class MyContentComp1 extends React.Component {
    // userId = null;
    componentDidMount() {
        let userId = this.props.router.params.number;
        if (!userId) {
            userId = this.props.authUserId;
            // if (!userId){
            //     this.props.history.push("/login")
            // }
        }
        this.userId = userId;
        this.props.getStatus(userId)
        this.props.userProfile(userId)

    }

    render() {
        // if (!this.userId){ setTimeout(()=><Navigate to={'/login'}/>, 1000)}
       return (<MyContent {...this.props}/>)

    }
}

const mapStateToProps = (state) => {
    return {
        newText: state.profilePage.newText,
        posts: state.profilePage.posts,
        user: state.profilePage.user,
        authUserId: state.auth.userId,
        userStatus: state.profilePage.userStatus,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPot: (post) => {
            return dispatch(addPostAC(post));
        },
        userProfile: (a) => {
            return dispatch(userProfile(a))
        },
        setUserStatus: (status) => {
            return dispatch(setUserStatus(status))
        },
        getStatus: (userId) => dispatch(getStatus(userId))
    }
}


// const MyContentComp = connect(mapStateToProps, mapDispatchToProps)(withRouter(withAuthRedirect(MyContentComp1)));
export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(MyContentComp1);