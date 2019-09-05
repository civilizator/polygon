import React from "react"
import classes from "./Profile.module.scss"
import { MyPosts } from "./MyPosts/MyPosts"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
    const { infoProfile, myPosts } = props.profile
    const { addPost } = props

    return (
        <div className={ classes.profile }>
            <ProfileInfo
                bgUrl={ infoProfile.bgUrl }
                profileImgUrl={ infoProfile.profileImgUrl }
                descriptionProfile={ infoProfile.descriptionProfile }
            />

            <MyPosts myPosts={ myPosts } addPost={ addPost } />
        </div>
    )
}

export default Profile