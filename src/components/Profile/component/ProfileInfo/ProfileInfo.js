import classes from "../Profile.module.scss"
import React from "react"
import { connect } from "react-redux"


const ProfileInfoComponent = (props) => {
    const { bgUrl, profileImgUrl, descriptionProfile, profile } = props

    if(!profile) {
        return <div><h1>L O A D I N G</h1></div>
    }
    // console.log(profile)
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
                        src={ !profile.photos.large ? profileImgUrl : profile.photos.large  }/>
                </div>
                <div className={ classes.descriptionProfile }>
                    { !profile.aboutMe ? descriptionProfile : profile.aboutMe }
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    const profile = state.profile.infoProfile
    return {
        profile: state.profile.profile,
        bgUrl: profile.bgUrl,
        profileImgUrl: profile.profileImgUrl,
        descriptionProfile: profile.descriptionProfile
    }
}

export const ProfileInfo = connect( mapStateToProps )( ProfileInfoComponent )

