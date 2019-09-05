import classes from "./Message.module.scss"
import React from "react"


export const Message = () => {
    const textMessage = React.createRef()

    const senMessage = () => {
        const text = textMessage.current.value
        console.log( text )
    }

    return (
        <div className={ classes.containerMessage }>
            {/*<h3>Add message</h3>*/}

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
                        onClick={ senMessage }
                    />
                </p>
            </div>
        </div>
    )

}
