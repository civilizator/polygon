import React from "react"

import { sendMessageToUserCreator, updateMessageToUserCreator } from "../../../../redux/messages-reducer"
import { FormMessage } from "./FormMessage"


export const FormMessageContainer = (props) => {
    const { newMessageText } = props.store.getState().messages
    const { dispatch } = props.store

    const sendMessage = () => {
        dispatch( sendMessageToUserCreator() )
    }

    const onChange = (text) => {
        const action = updateMessageToUserCreator( text )
        dispatch( action )
    }

    return ( <FormMessage newMessageText={ newMessageText } sendMessage={ sendMessage } onChange={ onChange }/> )

}
