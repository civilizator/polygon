import React from "react"
import classes from "../Messages.module.scss"
import { NavLink } from "react-router-dom";

export const User = (props) => {
    const userUrl = "/messages/" + props.userId
    const name = props.userName

    return (
        <li>
            <NavLink
                to={ userUrl }
                activeClassName={classes.active}>
                { name }
            </NavLink>
        </li>
    )
}
