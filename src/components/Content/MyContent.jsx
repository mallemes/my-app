import style from './StyleContent.module.css';
import Posts from "../Post/Posts";
import React from "react";

function MyContent(props) {
debugger;
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

            <div>
                <div><label htmlFor="">Create post:</label></div>
                <div>
                    <textarea onChange={changeValue} value={props.newText} cols="150" rows="4"/>
                    <button onClick={addPot}>add</button>
                </div>
            </div>
           <Posts posts={props.posts}/>
        </div>
    );
}

export default MyContent;