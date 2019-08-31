import classes from "./Form.module.scss";
import React from "react";


export const Form = () => {
    return ( <div className={ classes.title }>
            <h3>My posts</h3>

            <div className={ classes.form }>
                <p>
                <textarea
                    name="message"
                    placeholder="Enter message..."
                    className={ classes.textareaMessage }
                />
                </p>
                <p>
                    <input
                        type="submit"
                        name="submit"
                        value="Send message"
                        className={ classes.buttonSubmit }
                    />
                </p>
            </div>
        </div>
    )

}
