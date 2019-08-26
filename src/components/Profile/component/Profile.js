import React from "react"
import classes from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts"


const Profile = () => (
    <div className={classes.profile}>
        <div>
            <img className={classes.profileBackground}
                alt="background"
                src="https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg"/>
        </div>
        <div>
            <img className={classes.profileImage}
                alt="drops"
                 src="https://timedotcom.files.wordpress.com/2015/04/512137691.jpg?w=800&quality=85"/>
        </div>
        <div>
            Avatar + Description
        </div>

        <MyPosts />
    </div>
)

export default Profile