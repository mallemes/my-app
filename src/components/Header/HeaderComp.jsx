import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../redux/AuthReducer";

class HeaderClass extends React.Component {
    componentDidMount() {
        this.props.authUserData();
    }

    render() {
        return (<Header {...this.props}/>);
    }
}

const ssd = (state) => ({
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
})
const ssf = (dispatch) => {
    return {
        authUserData: () => {
            return dispatch(auth())
        },
    }

}

const HeaderComp = connect(ssd, ssf)(HeaderClass);

export default HeaderComp;