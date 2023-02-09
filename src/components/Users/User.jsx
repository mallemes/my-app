import React from 'react';
import styles from "./Users.module.css";
import defUser from "../../assets/images/defUser.png"
import {NavLink} from "react-router-dom";

const User = ({user, unFollowUser, followUser,followingInPg}) => {
    return (
        <>
            <div className={styles.main}>
                        <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small === null ? defUser : user.photos.small} alt="dd"
                                 className={styles.avatar}/>
                                </NavLink>
                        </div>
                        <div>
                             {user.followed ?
                                 <button disabled={followingInPg.some(id => id === user.id)} onClick={
                                     () => {return unFollowUser(user.id)}}>unfollow</button>
                                 : <button disabled={followingInPg.some(id => id === user.id)} onClick={
                                     () => { followUser(user.id)}}>follow</button>
                             }
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{user.name}</div><div>{user.status}</div>
                        </span>
                        <span className={styles.location}>
                        <div>"user.location.city"</div><div>"user.location.country"</div>
                    </span>
                    </span>
            </div>
            <hr/>

        </>
    );
};

export default User;
// {user.followed?
//     <button onClick={
//         () => {axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
//             withCredentials: true,
//             headers: {"API-KEY": "9735944e-3a47-4a73-bb0b-06b54403a485"}})
//             .then(response => {
//                 if (response.resultCode === 0) {return  unFollowUser(user.id)}
//             })
//         }}>unfollow</button>
//
//     :<button onClick={
//         ()=>{axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{withCredentials:true,headers:{"API-KEY":"9735944e-3a47-4a73-bb0b-06b54403a485"}})
//             .then(response => {
//                 if (response.resultCode === 0){ return followUser(user.id)}
//             })
//         }}>follow</button>
// }