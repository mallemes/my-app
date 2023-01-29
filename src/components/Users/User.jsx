import React from 'react';
import styles from "./Users.module.css";
import defUser from "../../assets/images/defUser.png"
import {NavLink} from "react-router-dom";
const User = ({user,unFollowUser, followUser}) => {
    return (
<>
                   <div className={styles.main}>
                        <span >
                        <div>
                            <NavLink to={'/profile/'+ user.id}>
                            <img src={user.photos.small === null ?defUser:user.photos.small } alt="dd" className={styles.avatar}/>
                                </NavLink>
                        </div>
                        <div>
                            <button onClick={user.followed?()=>unFollowUser(user.id):()=>followUser(user.id)}>{user.followed? "unfollow":"follow"}</button>
                        </div>
                    </span>
                       <span>
                        <span>
                            <div>{user.name}</div><div>{user.status}</div>
                        </span>
                        <span className={styles.location}>
                        <div>{"user.location.city"}</div><div>{"user.location.country"}</div>
                    </span>
                    </span>
                   </div>
    <hr/>

</>
    );
};

export default User;