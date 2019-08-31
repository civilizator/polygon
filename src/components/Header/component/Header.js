import React from "react"
import classes from "./Header.module.scss"

const Header = (props) => {
    const { headerData } = props
    console.log(props)
    return (
        <header className={ classes.header }>
            <img className={ classes.logo }
                 alt="logo"
                 src={ headerData.headerLogo }
            />
        </header>
    )
}

export default Header
