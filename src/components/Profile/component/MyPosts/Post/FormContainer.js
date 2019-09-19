
import React from "react"
import { submitPostCreator, updatePostCreator } from "../../../../../redux/profile-reducer"
import { Form } from "./Form"


export const FormContainer = (props) => {
    const { newPostText, dispatch } = props

    const submitPost = () => {
        dispatch( submitPostCreator() )
    }

    const onChange = (text) => {
        const action = updatePostCreator( text )
        dispatch( action )
    }

    return ( <Form newPostText={ newPostText } submitPost={ submitPost } onChange={ onChange } />)

}
