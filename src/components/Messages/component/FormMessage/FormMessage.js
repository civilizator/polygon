import classes from "./FormMessage.module.scss"
import React from "react"

import { sendMessageToUserCreator, updateMessageToUserCreator } from "../../../../redux/messages-reducer"


export const FormMessage = (props) => {
    const { newMessageText, dispatch } = props
    const newMessageElement = React.createRef()

    const sendMessage = () => {
        dispatch( sendMessageToUserCreator() )
    }

    const onChange = () => {
        const text = newMessageElement.current.value
        const action = updateMessageToUserCreator( text )
        dispatch( action )
    }

    return (
        <div className={ classes.containerMessage }>

            <div className={ classes.form }>
                <p>
                <textarea
                    onChange={ onChange }
                    name="message"
                    placeholder="Enter message..."
                    className={ classes.textareaMessage }
                    ref={ newMessageElement }
                    value={ newMessageText }
                />
                </p>
                <p>
                    <input
                        type="submit"
                        name="submit"
                        value="Send message"
                        className={ classes.buttonSubmit }
                        onClick={ sendMessage }
                    />
                </p>
            </div>
        </div>
    )

}
