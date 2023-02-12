import React from 'react'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field name="login" component="input" type="text" />
            <Field name="password" component="input" type="text" />
            <Field name="rememberMe"  component="input" type="checkbox" />
          <button>save</button>
        </form>
    );
}

const ContactForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
      console.log(formData)
    }
    return (
       <div> <div>
           <h1>LOGIN PAGE</h1>
       </div>
           <ContactForm onSubmit={onSubmit}/>
       </div>
    );
}


export default Login;

