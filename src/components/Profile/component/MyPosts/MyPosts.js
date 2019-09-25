import React from "react"
import classes from "./MyPosts.module.scss"
import { Post } from "./Post/Post"
import { FormContainer } from "./Post/FormContainer"
import { connect } from "react-redux"


 const MyPostsComponent = (props) => {
    const { myPosts } = props

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
            <FormContainer />
            { Posts }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        myPosts: state.profile.myPosts
    }
}

export const MyPosts = connect( mapStateToProps )( MyPostsComponent )
