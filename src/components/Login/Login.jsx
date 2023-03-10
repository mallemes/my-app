import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getCaptcha, logined} from "../../redux/AuthReducer";
import {MyInput} from "../Myhtml/MyFields";
import {required, maxLengthCR} from "../../utils/validators/validator";
import {Navigate} from "react-router-dom";

const max = maxLengthCR(50);
const LoginForm = (props) => {
    console.log(props.captcha)
    return (
        <form action="" onSubmit={props.handleSubmit}>
           email:  <Field name="email" component={MyInput} validate={[required, max]} type="text"/>
            password:  <Field name="password" component={MyInput} validate={[required, max]} type="text"/>
            remember me: <Field name="rememberMe" component="input" type="checkbox"/>
            {props.error? <div style={{color:"red"}}>{props.error}</div>: ""}
            {props.captcha && <img src={props.captcha} alt="..." style={{width:"20%"}} />}
            {props.captcha && <Field name="captcha" component={MyInput} validate={[required]} type="text"/>}
            <button>save</button>
        </form>
    );
}
const propsToState =(state)=> {
    return{
        captcha: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}


const ContactForm = reduxForm({form: 'login'})(LoginForm)
const  Login= (props) =>  {
   const onSubmit = (formData) => {
        let{email, password, rememberMe, captcha}= formData;
        props.logined(email, password, rememberMe, captcha)
    }
    if (props.isAuth) return <Navigate to={'/profile'}/>
    return (
            <div>
                <div>
                    <h1>LOGIN PAGE</h1>
                </div>
                <ContactForm captcha={props.captcha} onSubmit={onSubmit}/>
            </div>
        );

}
export default  connect(propsToState,{getCaptcha, logined})(Login)


