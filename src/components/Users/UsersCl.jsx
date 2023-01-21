import React from 'react';
import axios from "axios";
import User from "./User";
import styles from "./Users.module.css"
class UsersCl extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // alert("wdddd")
    //
    //
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
        // .catch(error =>(console.error(error)))
    }
    onChangePage =(pageId)=>{
        this.props.setCurPage(pageId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageId}&count=${this.props.totalCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);})
            .catch((error) =>console.error(error));
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        const pages = [];
        for (let i=1;i<pagesCount+1;i++){
            pages.push(i)
        }
        const followUser = (userId) => this.props.myFollow(userId)
        const unFollowUser = (userId) => this.props.unFollow(userId)
        const users2 = this.props.users.map((user) => <User
            key={user.id} user={user} followUser={followUser} unFollowUser={unFollowUser}/>)
        return (

            <div>
                <div>
                    {pages.map(e=> <button key={e} className={this.props.currentPage === e ? styles.selectedPg:""} onClick={()=>this.onChangePage(e)}>{e}</button>)}
                </div>
                {/*<button onClick={this.getUsers}>getUsers</button>*/}
                {users2}
            </div>
        );
    }
}

export default UsersCl;