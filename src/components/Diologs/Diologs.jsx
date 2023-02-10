import React from 'react';
import style from './Diologs.module.css';
import { Navigate } from 'react-router-dom';
const Diologs = (props) => {
     const onSendMessage = () => {
       props.onSendMessage();
    }
    const changeValue =(event)=>{
         let a = event.target.value;
        props.changeValue(a);
    }

    return (

        <div className={style.main}>
            <div className={style.dialogs}>
                {props.newDialogDate}
            </div>
            <div className={style.messages}>
                <div> {props.newList}</div>
                <div>
                    <div><input onChange={changeValue} value={props.newMessBody} type="text"  /></div>
                    <div>
                        <button onClick={onSendMessage}>send mess</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Diologs;