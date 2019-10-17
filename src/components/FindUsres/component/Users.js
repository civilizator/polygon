import React from "react"
import classes from "./FindUsers.module.scss"

const ButtonFollow = (props) => {
    const { userId, followed, setFollowToUser } = props

    const sendFollow = () => {
        setFollowToUser(userId)
    }

    return (
        <>
            {followed
                ? <input onClick={ sendFollow } type="submit" name="submit" value="Follower" className={ classes.buttonFollow }/>
                : <input onClick={ sendFollow } type="submit" name="submit" value="Unfollower" className={ classes.buttonUnfollow }/>}
        </>
    )
}

export const Users = (props) => {
    const { userId, followed, userName, userCity, userCountry, userStatus, setFollowToUser } = props

    return (
        <div className={ classes.users }>
            <div className={ classes.userInfo }>
                <div className={ classes.userPick }> </div>
                <ButtonFollow userId={ userId } followed={followed} setFollowToUser={setFollowToUser}/>
            </div>
            <div className={ classes.userEvent }>
                <div className={ classes.userDescription }>
                    <div className={ classes.userName }><h3>{ userName }</h3></div>
                    <div className={ classes.userCity }><h4>{ userCity }</h4></div>
                    <div className={ classes.userCountry }><h5>{ userCountry }</h5></div>
                    <div className={ classes.userStatus }><p>{ userStatus }</p></div>
                </div>
            </div>
        </div>
    )
}




