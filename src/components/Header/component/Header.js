import React from "react"
import classes from "./Header.module.scss"

const Header = (props) => {
    const { header } = props

    return (
        <header className={ classes.header }>
            <img className={ classes.logo }
                 alt="logo"
                 src={ header.headerLogo }
            />
        </header>
    )
}

export default Header
