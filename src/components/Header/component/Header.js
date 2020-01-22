import React from "react"
import classes from "./Header.module.scss"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

const Login = () => {
    return (
        <div className={ classes.login }>
            <NavLink to={ "/login" }>Login</NavLink>
        </div>
    )
}

const Auth = (props) => {
    return (
        <div className={ classes.login }>
            { props.auth }
        </div>
    )
}

const HeaderComponent = (props) => {
    const { isAuth, auth, logoImageSrc, logoAlt } = props

    return (
        <header className={ classes.header }>
            <img className={ classes.logo }
                 src={ logoImageSrc }
                 alt={ logoAlt }
            />

            { !isAuth ? <Login/> : <Auth auth={ auth }/> }

        </header>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        auth: state.auth.login,
        logoImageSrc: state.header.headerLogo.logoImageSrc,
        logoAlt: state.header.headerLogo.logoAlt
    }
}

export const Header = connect( mapStateToProps )( HeaderComponent )

export default Header
