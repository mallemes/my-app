import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authUserDataAC} from "../../redux/AuthReducer";
import axios from "axios";
import {api} from "../../Api/Api";

class HeaderClass extends React.Component{
    componentDidMount() {
        api.auth().then(data => {
                if(data.resultCode ===0) {
                    let {id, login, email} = data.data;
                    this.props.authUserData(id, login, email);
                }
            });
    }

    render() {
       return(<Header {...this.props}/>);
   }
}

const ssd =(state)=> ({
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
    isAuth:state.auth.isAuth,
})
const  ssf = (dispatch)=>{
   return{
       authUserData : (id,login, email)=>{
           return dispatch(authUserDataAC(id,login, email))
       },
   }

}

const HeaderComp = connect(ssd,ssf)(HeaderClass);

export default HeaderComp;