import React from "react"
import classes from "./Profile.module.scss"
import { MyPosts } from "./MyPosts/MyPosts"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
    const { infoProfile, myPosts, newPostText } = props.store.getState().profile
    const { dispatch } = props.store

    return (
        <div className={ classes.profile }>
            <ProfileInfo infoProfile={ infoProfile }/>
            <MyPosts myPosts={ myPosts } newPostText={ newPostText } dispatch={ dispatch }/>
        </div>
    )
}

export default Profile