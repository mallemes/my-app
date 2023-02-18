import React from 'react';
import style from './Diologs.module.css';
import {Field, reduxForm} from "redux-form";

const Diologs = (props) => {
    const onSendMessage = (values) => {
        console.log(values.message)
        props.sendMessageCreator(values.message);
    }
    return (

        <div className={style.main}>
            <div className={style.dialogs}>
                {props.newDialogDate}
            </div>
            <div className={style.messages}>
                <div> {props.newList}</div>
                <div>
                   <SendMessRF onSubmit={onSendMessage}/>
                </div>
            </div>
        </div>
    );
};

const SendMessageForm = (props) => {
  return ( <form onSubmit={props.handleSubmit} >
      <div><Field component={'input'}  type="text" name={'message'}/></div>
      <div>
          <button >send mess</button>
      </div>
  </form>)
}
const SendMessRF = reduxForm({form:"sendMessageForm"})(SendMessageForm);


export default Diologs;