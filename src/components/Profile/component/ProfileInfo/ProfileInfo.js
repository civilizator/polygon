import classes from "../Profile.module.scss";
import React from "react";


export const ProfileInfo = (props) => {
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
