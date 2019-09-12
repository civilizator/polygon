import React from "react"
import classes from "../Messages.module.scss"

export const UserMessage = (props) => {
    const { userPost, myPost } = props
    return (
        <>
            { userPost !== undefined && <li className={ classes.userPost }>{ userPost }</li> }
            { myPost !== undefined && <li className={ classes.myPost }>{ myPost }</li> }
        </>
    )
}
