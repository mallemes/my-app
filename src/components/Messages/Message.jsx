import style from "../Diologs/Diologs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );

}



export default Message;