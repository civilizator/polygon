import React from "react"
import classes from "./Profile.module.scss"
import { MyPosts } from "./MyPosts/MyPosts"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"


const Profile = () => {
    return (
        <div className={ classes.profile }>
            <ProfileInfo  />
            <MyPosts />
        </div>
    )
}

export default Profile