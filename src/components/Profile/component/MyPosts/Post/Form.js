import classes from "./Post.module.scss";
import React from "react";


export const Form = (props) => {
    const { newPostText, addPost, updateNewPostText } = props
    const newPostElement = React.createRef()

    const submitPost = () => {
        addPost()
    }

    const onChange = () => {
        const text = newPostElement.current.value
        updateNewPostText(text)
    }

    return (
        <div className={ classes.title }>
            <h3>My posts</h3>

            <div className={ classes.form }>
                <p>
                <textarea
                    onChange={ onChange }
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
                        onClick={ submitPost }
                    />
                </p>
            </div>
        </div>
    )

}
