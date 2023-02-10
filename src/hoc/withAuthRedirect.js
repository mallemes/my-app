import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapstateprop2 = (state)=>{return{isAuth: state.auth.isAuth}}
export const withAuthRedirect = (Component) => {
    class WithAuthComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }
    const withIsAuth = connect(mapstateprop2)(WithAuthComponent)

    return withIsAuth;
}

