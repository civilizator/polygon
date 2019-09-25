import React from "react"
import classes from "./Header.module.scss"
import { connect } from "react-redux"

const HeaderComponent = (props) => {
    const { logoImageSrc, logoAlt } = props

    return (
        <header className={ classes.header }>
            <img className={ classes.logo }
                 src={ logoImageSrc }
                 alt={ logoAlt }
            />
        </header>
    )
}


const mapStateToProps = (state) => {
    return {
        logoImageSrc: state.header.headerLogo.logoImageSrc,
        logoAlt: state.header.headerLogo.logoAlt
    }
}

export const Header = connect( mapStateToProps )( HeaderComponent )

export default Header
