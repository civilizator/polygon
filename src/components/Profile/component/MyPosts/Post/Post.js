import React from "react"
import classes from "./Post.module.scss"
import { Likes } from "./Likes";


export const Post = (props) => {
    const { myAvatar, messagePost, likeCounter } = props

    return (
        <div className={ classes.post }>

            <img className={ classes.avatar }
                 src={ myAvatar }
                 alt="avatar"/>

            <div className={ classes.text }>
                { messagePost }
                <Likes likeCounter={ likeCounter } />
            </div>

        </div>
    )
}
