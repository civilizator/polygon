import React from "react"
import classes from "./MyPosts.module.scss"
import { Form } from "./Post/Form"
import { Post } from "./Post/Post"


export const MyPosts = (props) => {
    const { myPosts } = props

    const Posts = myPosts.map( (posts, i) => {
        const { myAvatar, post, like } = posts
        return (
            <Post key={ i } myAvatar={ myAvatar } messagePost={ post } likeCounter={ like }/>
        )
    } )

    return <div className={ classes.MyPosts }> <Form/> { Posts }</div>
}
