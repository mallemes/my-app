import React from "react";
import User from "./User";
import styles from "./Users.module.css";
import loading from "../../assets/images/loading.gif";
const Users = (props) => {
    // debugger
    const users = props.users.map((user) =><User
        key={user.id} user={user} followUser={props.followUser} unFollowUser={props.unFollowUser}/>
    )
    return (
        <div>
            <div>
                {props.pages.map(e=> <button key={e} className={props.currentPage === e ? styles.selectedPg:""} onClick={()=>props.onChangePage(e)}>{e}</button>)}
            </div>
            {props.loadingValue ? <div><img src={loading} alt="..." style={{height:"200px"}}/></div> :null}
            {users}
        </div>
    );

}

export default Users;