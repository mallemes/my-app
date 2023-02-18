import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getCaptcha, loginned} from "../../redux/AuthReducer";

const LoginForm = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field name="email" component="input" type="text"/>
            <Field name="password" component="input" type="text"/>
            <Field name="rememberMe" component="input" type="checkbox"/>
            <img src={props.url} alt="" style={{width:"20%"}}/>
            <Field name="captcha" component="input" type="text"/>
            <button>save</button>
        </form>
    );
}
const propsToState =(state)=> {
    return{
        url: state.auth.captchaUrl,
    }
}


const ContactForm = reduxForm({form: 'login'})(LoginForm)


class Login1 extends React.Component {
    onSubmit = (formData) => {
        let{email, password, rememberMe, captcha}= formData;
        this.props.loginned(email, password, rememberMe, captcha)
        //     console.log(this.props)
        console.log(email, password, rememberMe, captcha)
    }
    componentDidMount() {
        this.props.getCaptcha();
    }

    render() {
        return (
            <div>
                <div>
                    <h1>LOGIN PAGE</h1>
                </div>
                <ContactForm onSubmit={this.onSubmit} url={this.props.url}/>
            </div>
        );
    }
}
const LoginConteiner = connect(propsToState,{getCaptcha,loginned})(Login1)



export default LoginConteiner;


