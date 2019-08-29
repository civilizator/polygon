import React from "react"
import classes from "./Messages.module.scss"
import {User} from "./User"
import {UserPost} from "./UserPost"

const messagesUsers = [
    {userId: "1", userName: "Dan"},
    {userId: "2", userName: "John"},
    {userId: "3", userName: "Sarah"},
    {userId: "4", userName: "Jax"},
    {userId: "5", userName: "Helen"},
    {userId: "6", userName: "Brain"},
    {userId: "7", userName: "Katrine"}
]

const Messages = () => {
    return (
        <div className={classes.messages}>
            <div className={classes.users}>
                <ul>
                    <User userId="1" userName="Dan"/>
                    <User userId="2" userName="John"/>
                    <User userId="3" userName="Sarah"/>
                    <User userId="4" userName="Jax"/>
                    <User userId="5" userName="Nair"/>
                    <User userId="6" userName="Brain"/>
                </ul>
            </div>
            <div className={classes.message}>
                <ul>
                    <UserPost userPost="Lorem ipsum dolor sit amet."/>
                    <UserPost userPost="Lorem ipsum dolor sit amet, consectetur."/>
                    <UserPost userPost="Lorem ipsum dolor."/>
                    <UserPost userPost="Lorem ipsum dolor sit."/>
                </ul>
            </div>
        </div>
    )
}

export default Messages