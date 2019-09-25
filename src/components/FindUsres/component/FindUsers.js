import React from "react"
import classes from "./FindUsers.module.scss"

const FindUsers = (props) => {

    return (
        <div className={ classes.findUsers }>
            <h1>FindUsers</h1>
            <div className={classes.users }>

                <div className={classes.userInfo}>
                    <div className={classes.userPick}></div>
                    <p className={classes.buttonFollow}>Follow</p>
                </div>
                <div className={classes.userEvent}></div>
            </div>
        </div>
    )
}


// const mapStateToProps = (state) => {
//     return {
//         logoImageSrc: state.header.headerLogo.logoImageSrc,
//         logoAlt: state.header.headerLogo.logoAlt
//     }
// }
//
// export const FindUsers = connect( mapStateToProps )( HeaderComponent )

export default FindUsers
