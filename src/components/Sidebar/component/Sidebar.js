import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./Sidebar.module.scss"
import { Friends } from "./Friends/Friends"


const Sidebar = (props) => {
    const { sidebar } = props.store.getState()

    return (
        <div className={ classes.sidebar }>
            <div className={ classes.innerSidebar }>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/profile" activeClassName={ classes.active }>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/messages" activeClassName={ classes.active }>Messages</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news" activeClassName={ classes.active }>News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/music" activeClassName={ classes.active }>Music</NavLink>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <NavLink to="/settings" activeClassName={ classes.active }>Settings</NavLink>
                        </li>
                    </ul>
                </nav>

                <Friends sidebar={ sidebar }/>

            </div>
        </div>
    )
}


export default Sidebar
