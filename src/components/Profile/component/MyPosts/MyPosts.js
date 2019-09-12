import React from "react"
import classes from "./MyPosts.module.scss"
import { Form } from "./Post/Form"
import { Post } from "./Post/Post"


export const MyPosts = (props) => {
    const { myPosts, newPostText, dispatch } = props

    const Posts = myPosts.map( (posts, i) => {
            const { id, myAvatar, post, like } = posts
            return (
                <Post key={ id } myAvatar={ myAvatar } messagePost={ post } likeCounter={ like }/>
            )
        }
    )


    // const addPost = (e) => {
    //     e.preventDefault();
    //     const text = e.target.elements.message.value
    //     console.log( text )
    // }

    return (
        <div className={ classes.MyPosts }>
            <Form dispatch={ dispatch } newPostText={ newPostText } />
            { Posts }
        </div>
    )
}
