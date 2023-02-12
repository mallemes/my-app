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
const dds =(state)=> {
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
const LoginConteiner = connect(dds,{getCaptcha,loginned})(Login1)



export default LoginConteiner;

//import React from 'react'
// import {Field, reduxForm} from "redux-form";
// import {connect} from "react-redux";
// import {getCaptcha} from "../../redux/AuthReducer";
//
// class LoginForm extends React.Component{
//    render() {
//     console.log(this.props)
//     return (
//         <form action="" onSubmit={this.props.handleSubmit}>
//             <Field name="email" component="input" type="text"/>
//             <Field name="password" component="input" type="text"/>
//             <Field name="rememberMe" component="input" type="checkbox"/>
//             <img src="" alt=""/>
//             <Field name="captcha" component="input" type="text"/>
//             <button>save</button>
//         </form>
//     );
//    }
// }
// const dds =(state)=> {
//     return{
//         url: state.auth.captchaUrl,
//     }
// }
//
// connect(dds,{getCaptcha})(LoginForm)
//
// const ContactForm = reduxForm({form: 'login'})(LoginForm)
//
//
// const Login1 =(props)=> {
//     const  onSubmit = (formData) => {
//         console.log(formData)
//     }
//         console.log(this.props)
//         return (
//             <div>
//                 <div>
//                     <h1>LOGIN PAGE</h1>
//                 </div>
//                 <div><img src={props.url} alt=""/></div>
//                 <ContactForm onSubmit={onSubmit}/>
//             </div>
//         );
//
// }
//
//
// export default Login1;
