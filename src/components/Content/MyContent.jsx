import style from './StyleContent.module.css';
import Posts from "../Post/Posts";
import React from "react";
import ProfileStatus from "./ProfileStatus";

function MyContent(props) {

    const addPot = () => {
        props.addPot();
    }
    const changeValue =(e)=>{
        props.changeValue(e.target.value)
    }
    return (
        <div /*className={style.myContent}*/>
            <div className={style.mainTitle}>
                Title
            </div>
            <div>
                <img
                    src="https://www.ucdavis.edu/sites/default/files/styles/ucd_panoramic_image/public/media/images/beaches-near-uc-davis.jpg?h=8e58fdb5&itok=0D79HHcC"
                    alt=""/>
            </div>
                <div><center>profile</center></div>
            {props.user?
                <div>
                    {props.user.aboutMe?props.user.aboutMe: ' '}
                    <div><img src={props.user.photos.small?props.user.photos.small:''} alt="..." style={{width:"20%"}}/></div>
                </div>:""}
            <br/><br/><br/>
            <div>
                <div><label htmlFor="">Create post:</label></div>
                <div>
                    <textarea onChange={changeValue} value={props.newText} cols="150" rows="4"/>
                    <button onClick={addPot}>add</button>
                </div>
            </div>
            <ProfileStatus status={"qwertyui"}/>
           <Posts posts={props.posts}/>
        </div>
    );
}

export default MyContent;