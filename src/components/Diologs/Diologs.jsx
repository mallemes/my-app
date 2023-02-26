import React from 'react';
import style from './Diologs.module.css';
import {Field, reduxForm} from "redux-form";
import Message from "../Messages/Message";
import DialogItem from "../DialoItem/DiologItem";

const Diologs = (props) => {
    const onSendMessage = (values) => {
        props.sendMessageCreator(values.message);
    }
    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                {props.dialogs.map(names => <DialogItem key={names.name} name={names.name} id={names.id}/>)}

            </div>
            <div className={style.messages}>
                <div>
                    {props.messagesData.map(el => <Message key={el.message} message={el.message} id={el.id}/>)}
                </div>
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