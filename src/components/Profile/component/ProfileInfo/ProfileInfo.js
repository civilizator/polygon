import classes from "../Profile.module.scss"
import React from "react"
import { connect } from "react-redux"


const ProfileInfoComponent = (props) => {
    const { bgUrl, profileImgUrl, descriptionProfile } = props

    return (
        <>
            <div className={ classes.profileBackground }>
                <img
                    alt="background"
                    src={ bgUrl }/>
            </div>
            <div className={ classes.profileInfo }>
                <div className={ classes.profileImage }>
                    <img
                        alt="drops"
                        src={ profileImgUrl }/>
                </div>
                <div className={ classes.descriptionProfile }>
                    { descriptionProfile }
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    const profile = state.profile.infoProfile
    return {
        bgUrl: profile.bgUrl,
        profileImgUrl: profile.profileImgUrl,
        descriptionProfile: profile.descriptionProfile
    }
}

export const ProfileInfo = connect( mapStateToProps )( ProfileInfoComponent )

