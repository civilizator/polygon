import React from "react"
import classes from "./FormMessage.module.scss"


export const FormMessage = (props) => {
    const { newMessageText, dispatch, sendMessage, onChange } = props
    const newMessageElement = React.createRef()

    const sendMessageForm = () => {
        sendMessage()
    }

    const onChangeForm = () => {
        const text = newMessageElement.current.value
        const action = onChange( text )
        dispatch( action )
    }

    return (
        <div className={ classes.containerMessage }>

            <div className={ classes.form }>
                <p>
                <textarea
                    onChange={ onChangeForm }
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
                        onClick={ sendMessageForm }
                    />
                </p>
            </div>
        </div>
    )

}
