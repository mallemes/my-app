import React from "react";
import User from "./User";
import axios from "axios";
const Users = (props) => {
    const getUsers = () => {
        if(props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(responce => {( props.setUsers(responce.data.items))})
                .catch(error =>(console.error(error)))

        }
    }
    const followUser = (userId) => props.myFollow(userId)
    const unFollowUser = (userId) => props.unFollow(userId)
    const users = props.users.map((user) => <User
        key={user.id} user={user} followUser={followUser} unFollowUser={unFollowUser}/>


    )
    return (
        <div >
            <button onClick={getUsers}>getUsers</button>
            {users}
        </div>
    );

}

export default Users;