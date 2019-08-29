import React from "react"
import classes from "./Messages.module.scss"
import {NavLink} from "react-router-dom";

export const User = (props) => {
    let userUrl = "/messages/" + props.userId
    let name = props.userName

    return (
        <li>
            <NavLink
                to={userUrl}
                activeClassName={classes.active}>
                {name}
            </NavLink>
        </li>
    )
}
