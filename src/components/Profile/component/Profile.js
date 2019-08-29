import React from "react"
import classes from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts"
import {ProfileInfo} from "./ProfileInfo"


const Profile = () => {
    return (
        <div className={classes.profile}>
            <ProfileInfo
                bgUrl="https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg"
                profileImgUrl="https://timedotcom.files.wordpress.com/2015/04/512137691.jpg?w=800&quality=85"
                descriptionProfile="Avatar + Description
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aliquid dolorem fugit iusto, magnam magni sed?

                                    Avatar + Description
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />

            <MyPosts />
        </div>
    )
}

export default Profile