import React from "react";
import MyContent from "./MyContent";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {userProfile} from "../../redux/DialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class MyContentComp1 extends React.Component {
    componentDidMount() {
        let a = this.props.router.params.number;
        if (!a) {a = 2;}
        this.props.userProfile(a)
    }
    render() {
        return <MyContent {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        newText: state.profilePage.newText,
        posts: state.profilePage.posts,
        user: state.profilePage.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (text) => {
            return dispatch({type: "NEW-POST-VALUE", newText: text})},
        addPot: () => {
            return dispatch({type: "ADD-POST"});},
        userProfile:(a)=>{return dispatch(userProfile(a))}
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

const MyContentComp = connect(mapStateToProps, mapDispatchToProps)(withRouter(withAuthRedirect(MyContentComp1)));

export default MyContentComp;