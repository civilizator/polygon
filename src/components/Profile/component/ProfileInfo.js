import classes from "./Profile.module.scss";
import React from "react";


export const ProfileInfo = (props) => {
    return (
        <>
            <div className={classes.profileBackground}>
                <img
                    alt="background"
                    src={props.bgUrl}/>
            </div>
            <div className={classes.profileInfo}>
                <div className={classes.profileImage}>
                    <img
                        alt="drops"
                        src={props.profileImgUrl}/>
                </div>
                <div className={classes.descriptionProfile}>
                    {props.descriptionProfile}
                </div>
            </div>
        </>
    )
}
