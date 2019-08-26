import React from "react"
import {NavLink} from "react-router-dom"
import classes from "./Sidebar.module.scss"


const Sidebar = () => {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Sidebar
