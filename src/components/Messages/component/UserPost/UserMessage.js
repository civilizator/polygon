import React from "react"
import classes from "../Messages.module.scss"

export const UserMessage = (props) => {
    const { userPost, myPost } = props

    return (
        <>
            { userPost && <li className={ classes.userPost }>{ userPost }</li> }
            { myPost && <li className={ classes.myPost }>{ myPost }</li> }
        </>
    )
}
