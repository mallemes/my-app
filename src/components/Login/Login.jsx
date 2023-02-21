import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getCaptcha, logined} from "../../redux/AuthReducer";
import {MyInput} from "../Myhtml/MyFields";
import {required, maxLengthCR} from "../../utils/validators/validator";
import {Navigate} from "react-router-dom";

const max = maxLengthCR(50);
const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field name="email" component={MyInput} validate={[required, max]} type="text"/>
            <Field name="password" component={MyInput} validate={[required, max]} type="text"/>
            <Field name="rememberMe" component="input" type="checkbox"/>
            {props.error? <div style={{color:"red"}}>{props.error}</div>: ""}
            {/*<img src={props.url} alt="" style={{width:"20%"}}/>*/}
            {/*<Field name="captcha" component={MyInput} validate={[required, max]} type="text"/>*/}
            <button>save</button>
        </form>
    );
}
const propsToState =(state)=> {
    return{
        // url: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}


const ContactForm = reduxForm({form: 'login'})(LoginForm)
const  Login= (props) =>  {
   const onSubmit = (formData) => {
        let{email, password, rememberMe}= formData;
        props.logined(email, password, rememberMe)
    }
    if (props.isAuth) return <Navigate to={'/profile'}/>
    return (
            <div>
                <div>
                    <h1>LOGIN PAGE</h1>
                </div>
                <ContactForm onSubmit={onSubmit}/>
            </div>
        );

}
export default  connect(propsToState,{getCaptcha, logined})(Login)


