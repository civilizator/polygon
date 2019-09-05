import classes from "./Post.module.scss";
import React from "react";


export const Form = (props) => {
    const newPostElement = React.createRef()

    const addPost = () => {
        const text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={ classes.title }>
            <h3>My posts</h3>

            <div className={ classes.form }>
                <p>
                <textarea
                    name="message"
                    placeholder="Enter message..."
                    className={ classes.textareaMessage }
                    ref={ newPostElement }
                />
                </p>
                <p>
                    <input
                        type="submit"
                        name="submit"
                        value="Send message"
                        className={ classes.buttonSubmit }
                        onClick={ addPost }
                    />
                </p>
            </div>
        </div>
    )

}
