import React from "react"
import classes from "./Messages.module.scss"
import { User } from "./User/User"
import { UserMessage } from "./UserPost/UserMessage"
import { FormMessage } from "./FormMessage/FormMessage"


const Messages = (props) => {
    const { users, message, newMessageText } = props.messages
    const { dispatch } = props

    const eachUser = users.map( (user) => {
            return (
                <User key={ user.userId } userId={ user.userId } userName={ user.userName }/>
            )
        }
    )

    const eachMessage = message.map( (message ) => {
            const { id, userPost, myPost } = message

            return (
                <UserMessage key={ id } userPost={ userPost } myPost={ myPost }/>
            )
        }
    )

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

                <FormMessage dispatch={ dispatch } newMessageText={ newMessageText } />

            </div>


        </div>
    )
}

export default Messages