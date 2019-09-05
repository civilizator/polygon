import React from "react"
import classes from "./Profile.module.scss"
import { MyPosts } from "./MyPosts/MyPosts"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
    const { infoProfile, myPosts, newPostText } = props.profile
    const { addPost, updateNewPostText } = props

    return (
        <div className={ classes.profile }>
            <ProfileInfo
                bgUrl={ infoProfile.bgUrl }
                profileImgUrl={ infoProfile.profileImgUrl }
                descriptionProfile={ infoProfile.descriptionProfile }
            />

            <MyPosts myPosts={ myPosts } newPostText={ newPostText } addPost={ addPost } updateNewPostText={ updateNewPostText } />
        </div>
    )
}

export default Profile