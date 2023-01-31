import React from "react";
import User from "./User";
import styles from "./Users.module.css";
import loading from "../../assets/images/loading.gif";
import {NavLink} from "react-router-dom";
import defUser from "../../assets/images/defUser.png";
import axios from "axios";
const Users = (props) => {
    // debugger
    let users = props.users.map((user) =><User
        key={user.id} user={user} followUser={props.followUser} unFollowUser={props.unFollowUser} followingInPg={props.followingInPg} toggleFollowingPRG={props.toggleFollowingPRG}/>
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