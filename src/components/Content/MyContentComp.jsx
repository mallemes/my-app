import React from "react";
import MyContent from "./MyContent";
import {connect} from "react-redux";
import axios from "axios";
import {userDataAC} from "../../redux/DialogsReducer";
class MyContentComp1 extends React.Component{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.userDataAC(response.data);
            });

    }
    render() {
        return <MyContent {...this.props}/>
    }
}
const mapStateToProps = (state)=>
{

     return{
        newText:state.profilePage.newText,
         posts :state.profilePage.posts,
         user: state.profilePage.user,
    }
}
const mapDispatchToProps = (dispatch)=>
{
    return{
        changeValue : (text)=>{
            const newText = {type: "NEW-POST-VALUE", newText: text}
            return dispatch(newText)
        },
        addPot : ()=>{
            const a = {type: "ADD-POST"}
            return dispatch(a);
        },
        userDataAC: (data)=>{
            userDataAC(data);
            return dispatch(userDataAC(data));
        }
    }
}

const MyContentComp = connect(mapStateToProps,mapDispatchToProps)(MyContentComp1);

export default MyContentComp;