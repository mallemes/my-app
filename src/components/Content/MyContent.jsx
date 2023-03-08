import style from './StyleContent.module.css';
import Posts from "../Post/Posts";
import React, {useState} from "react";
import ProfileStatus from "./ProfileStatus";
import AddPostForm from "./AddPostForm";
import {Field, reduxForm} from "redux-form";
import {MyInput} from "../Myhtml/MyFields";



function MyContent(props) {

    const addPost = (values) => {
        props.addPot(values.post);
    }
    const onUpdateAvatar = (e) => {
        if (e.target.files.length) {
            props.setProfileImage(e.target.files[0])
        }
    }

    const [editMode, setEditMode] = useState(false);
    const onSubmit =(formData)=>{
        props.editProfileTK(formData).then(
            ()=> setEditMode(false)
        )

    }
    return (
        <div>
            <div className={style.mainTitle}>
                Title
            </div>
            <div>
                <img src="https://www.ucdavis.edu/sites/default/files/styles/ucd_panoramic_image/public/media/images/beaches-near-uc-davis.jpg?h=8e58fdb5&itok=0D79HHcC" alt=""/>
            </div>
            <div>
                <center>profile</center>
            </div>
            <div className={style.profile}>
                <div>
                    <div><img src={props.user ? props.user.photos.small : ''} alt="..." width="200"
                              height="200"/></div>
                    {props.isOwner && <input type="file" onChange={onUpdateAvatar}/>}
                </div>
                {!editMode?  <UserProfile user={props.user} edit={()=>setEditMode(true)}/> :<EditProfile initialValues={props.user} user={props.user} onSubmit={onSubmit}/>}

                </div>
            <div>
                <div><label htmlFor="">Create post:</label></div>
                <AddPostForm onSubmit={addPost}/>
            </div>

            <ProfileStatus status={props.userStatus} setUserStatus={props.setUserStatus}/>
            <Posts posts={props.posts}/>
        </div>
    );
}

const UserProfile = ({user, edit}) => {
    if (!user){
        return <div>loading...</div>
    }
    return (
            <div>
                <div>
                    <div><button onClick={edit}>edit profile</button></div>
                </div>
                <div>
                    <div><h3>about me: {user.aboutMe}</h3></div>
                </div>
                <div>
                    <div><h3>looking for A job: {user.lookingForAJob? "Yes":"No"}</h3></div>
                </div>
                <div>
                    <div><h3>lookingForAJobDescription: {user.lookingForAJobDescription}</h3></div>
                </div>
                <div>
                    <div><h3>full name: {user.fullName}</h3></div>
                </div>
                <div>
                    <h3>Contacts:</h3>
                    <div className={style.contact}>
                        {Object.keys(user.contacts).map(key =>  <h5 key={key}>{`${key} : ${user.contacts[key]}`}</h5>)}
                    </div>
                </div>
            </div>
    )
}

const EditProfileForm = (props)=>{
    return(
        <form  onSubmit={props.handleSubmit}>
            {props.error? <div style={{color:"red"}}>{props.error}</div>: ""}
            <Field name="aboutMe" component={MyInput} validate={[]}  type="text"/>
            <Field name="fullName"  component={MyInput}   type="text"/>
            <Field name="lookingForAJob" component='input'   type="checkbox"/>
            <Field name="lookingForAJobDescription" component={MyInput} validate={[]} type="text"/>
            {Object.keys(props.user.contacts).map(key => <Field key={key} name={`contacts.${key}`} component={MyInput} placeholder='fff' type="text"/>)}
            <button>save</button>

        </form>
    )
}


const EditProfile = reduxForm({form: 'editProfile',enableReinitialize: true, destroyOnUnmount: false})(EditProfileForm)

export default MyContent;