import React from "react"
import classes from "./Messages.module.scss"
import { User } from "./User/User"
import { UserPost } from "./UserPost/UserPost"
import { Message } from "./Message/Message"


const Messages = (props) => {
    const { users, message } = props.messages

    const eachUser = users.map( (user) => {
        return (
            <User key={ user.userId } userId={ user.userId } userName={ user.userName }/>
        )
    } )

    const eachMessage = message.map( (message, i) => {
        return (
            <UserPost key={ i } userPost={ message.userPost }/>
        )
    } )

    return (
        <div className={ classes.messages }>

            <div className={ classes.users }>
                <ul>
                    { eachUser }
                </ul>
            </div>

            <div className={ classes.message }>
                <ul>
                    { eachMessage }
                </ul>

                <Message/>

            </div>


        </div>
    )
}

export default Messages