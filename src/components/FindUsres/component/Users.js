import React from "react"
import classes from "./FindUsers.module.scss"
import { NavLink } from "react-router-dom"
import * as axios from "axios";

const ButtonFollow = (props) => {
    const { userId, followed, setFollowToUser } = props

    const url = `https://social-network.samuraijs.com/api/1.0/follow/${ userId }`
    const options = {
        withCredentials: true,
        headers: { "API-KEY": "d673f0dc-2064-4b68-94e4-782a13cb0c0d" }
    }

    const follow = (action) => {
        if (action === "deleteUnfollowUser") {
            axios.delete( url, options ).then( res => {
                console.log( 'DELETE', res )
                setFollowToUser( userId )
            } )
        }
        if (action === "postFollowUser") {
            axios.post( url, null, options).then( res => {
                console.log( 'POST', res )
                setFollowToUser( userId )
            } )
        }
    }

    return (
        <>
            { followed
                ? <input onClick={ () => follow('deleteUnfollowUser') } type="submit" name="submit" value="Follower" className={ classes.buttonFollow }/>
                : <input onClick={ () => follow('postFollowUser') } type="submit" name="submit" value="Unfollower" className={ classes.buttonUnfollow }/> }
        </>
    )
}

export const Users = (props) => {
    const { userId, followed, userName, photosSmall, userCity, userCountry, userStatus, setFollowToUser } = props

    return (
        <div className={ classes.users }>
            <div className={ classes.userInfo }>

                <NavLink to={ `/profile/${ userId }` }>
                    <div className={ classes.userPick }>
                        <img alt='user pic' src={ photosSmall }/>
                    </div>
                </NavLink>

                <ButtonFollow userId={ userId } followed={ followed } setFollowToUser={ setFollowToUser }/>
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




