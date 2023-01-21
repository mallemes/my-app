import React from "react";
import MyContent from "./MyContent";
import {connect} from "react-redux";
const mapStateToProps = (state)=>
{

     return{
        newText:state.profilePage.newText,
         posts :state.profilePage.posts,
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
        }
    }
}

const MyContentComp = connect(mapStateToProps,mapDispatchToProps)(MyContent);

export default MyContentComp;