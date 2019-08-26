import React from "react"
import classes from "./Header.module.scss"

const Header = () => (
    <>
        <header className={classes.header}>
            <img className={classes.logo}
                 alt="logo"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Q2gxnciDLkKAwJwszxtgNdK_rpTFfr85dyJ3q_Y-xCjV9zGAiA"/>
        </header>
    </>
)

export default Header
