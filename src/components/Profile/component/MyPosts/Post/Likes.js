import React from "react"
import classes from "./Post.module.scss"


export const Likes = (props) => {
    const { likeCounter } = props

    return (
        <div className={ classes.like }>
            <span className={ classes.count }>{ likeCounter }</span>
            <span className={ classes.upLike }>like</span>
        </div>
    )
}