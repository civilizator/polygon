import React from "react"
import classes from "./Post.module.scss"



const Post = (props) => {

    return (
        <div className={classes.post}>
            <img className={classes.avatar}
                 src="https://www.w3schools.com/howto/img_avatar2.png"
                 alt="avatar"/>
            <div className={classes.text}>
                {props.messagePost}
                <div className={classes.like}>
                    <span className={classes.count}>{props.likeCounter}</span>
                    <span className={classes.upLike}>like</span>
                </div>
            </div>

        </div>
    )
}

export default Post
