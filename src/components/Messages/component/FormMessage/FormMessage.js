import classes from "./FormMessage.module.scss"
import React from "react"


export const FormMessage = () => {
    const textMessage = React.createRef()

    const sendMessage = () => {
        const text = textMessage.current.value
        console.log( text )
        textMessage.current.value = ''
    }

    return (
        <div className={ classes.containerMessage }>

            <div className={ classes.form }>
                <p>
                <textarea
                    name="message"
                    placeholder="Enter message..."
                    className={ classes.textareaMessage }
                    ref={ textMessage }
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
