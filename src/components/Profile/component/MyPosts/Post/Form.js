import classes from "./Post.module.scss"
import React from "react"


export const Form = (props) => {
    const { newPostText, submitPost, onChange } = props
    const newPostElement = React.createRef()

    const submitPostForm = () => {
        submitPost()
    }

    const onChangeFom = () => {
        onChange( newPostElement.current.value )
    }

    return (
        <div className={ classes.title }>
            <h3>My posts</h3>

            <div className={ classes.form }>
                <p>
                <textarea
                    onChange={ onChangeFom }
                    name="message"
                    placeholder="Enter message..."
                    className={ classes.textareaMessage }
                    ref={ newPostElement }
                    value={ newPostText }
                />
                </p>
                <p>
                    <input
                        type="submit"
                        name="submit"
                        value="Send message"
                        className={ classes.buttonSubmit }
                        onClick={ submitPostForm }
                    />
                </p>
            </div>
        </div>
    )

}
