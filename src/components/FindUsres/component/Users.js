import React from "react"
import classes from "./FindUsers.module.scss"

const ButtonFollow = (props) => {
    const { userId, userFollow, followToUser } = props

    const sendFollow = () => {
        followToUser(userId)
    }

    return (
        <>
            {userFollow
                ? <input onClick={ sendFollow } type="submit" name="submit" value="Follower" className={ classes.buttonFollow }/>
                : <input onClick={ sendFollow } type="submit" name="submit" value="Unfollower" className={ classes.buttonUnfollow }/>}
        </>
    )
}

export const Users = (props) => {
    const { userId, userFollow, userName, userCity, userCountry, userStatus, followToUser } = props

    return (
        <div className={ classes.users }>
            <div className={ classes.userInfo }>
                <div className={ classes.userPick }> </div>

                <ButtonFollow userId={ userId } userFollow={userFollow} followToUser={followToUser}/>

                {/*{ userFollow*/}
                {/*    ? <p className={ classes.buttonFollow }>Follower</p>*/}
                {/*    : <p className={ classes.buttonUnfollow} >Unfollower</p> }*/}
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




