
import { submitPostCreator, updatePostCreator } from "../../../../../redux/profile-reducer"
import { Form } from "./Form"
import { connect } from "react-redux"


const mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        submitPost: () => {
            dispatch( submitPostCreator() )
        },
        onChange: (text) => {
            dispatch( updatePostCreator( text ) )
        }
    }
}

export const FormContainer = connect( mapStateToProps, mapDispatchToProps )( Form )


