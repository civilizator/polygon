import React from "react"
import classes from "../Messages.module.scss"

export const UserPost = (props) => {
    return (
        <li className={classes.post}>{props.userPost}</li>
    )

}

