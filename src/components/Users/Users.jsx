import React from "react";
import User from "./User";
import styles from "./Users.module.css";
import loading from "../../assets/images/loading.gif";

const Users = (props) => {
    return (
        <div>
            <div>
                {props.pages.map(e=> <button key={e} className={props.currentPage === e ? styles.selectedPg: styles.myButton} onClick={()=>props.onChangePage(e)}>{e}</button>)}
            </div>
            {props.loadingValue ? <div><img src={loading} alt="..." height={50} width={"100%"}/></div> :null}
            {props.users.map((user) =><User key={user.id} user={user} {...props}/>)}
        </div>
    );

}

export default Users;