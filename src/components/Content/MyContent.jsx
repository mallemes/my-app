import style from './StyleContent.module.css';
import Posts from "../Post/Posts";
import React from "react";
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import {maxLengthCR} from "../../utils/validators/validator";
import {MyTextarea} from "../Myhtml/MyFields";

const max = maxLengthCR(30)
function MyContent(props) {

    const addPost = (values) => {
        props.addPot(values.post);
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
              <AddPostReduxForm onSubmit={addPost} />
            </div>
            <ProfileStatus status={props.userStatus} setUserStatus={props.setUserStatus}/>
           <Posts posts={props.posts}/>
        </div>
    );
}

const AddPostForm = (props) => {
  return( <form action="" onSubmit={props.handleSubmit}>
      <div>
          <Field component={MyTextarea} placeholder="insert text" validate={[required, max]} name={'post'} cols="150" rows="4"/>{' '}
          <button type="submit"  disabled={props.pristine || props.submitting}>
              Submit
          </button>
          <button type="button" style={{backgroundColor:"red"}}  disabled={props.pristine || props.submitting} onClick={props.reset}>
              Clear
          </button>
      </div>
  </form>)
}
const AddPostReduxForm = reduxForm({form:"addPostForm"})(AddPostForm);

export default MyContent;