import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth, logout} from "../../redux/AuthReducer";

class HeaderClass extends React.Component {
    componentDidMount() {
        // this.props.auth();
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


const HeaderComp = connect(ssd,{auth, logout})(HeaderClass);

export default HeaderComp;