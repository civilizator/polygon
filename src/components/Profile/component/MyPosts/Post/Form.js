import classes from "./Post.module.scss";
import React from "react";


export const Form = (props) => {
    const { newPostText, dispatch } = props
    const newPostElement = React.createRef()

    const submitPost = () => {
        dispatch({type: 'ADD-POST'})
    }

    const onChange = () => {
        const text = newPostElement.current.value
        const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        dispatch(action)
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
