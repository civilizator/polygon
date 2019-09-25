import { sendMessageToUserCreator, updateMessageToUserCreator } from "../../../../redux/messages-reducer"
import { FormMessage } from "./FormMessage"
import { connect } from "react-redux"


// export const FormMessageContainer = (props) => {
//     const { newMessageText } = props.store.getState().messages
//     const { dispatch } = props.store
//
//     const sendMessage = () => {
//         dispatch( sendMessageToUserCreator() )
//     }
//
//     const onChange = (text) => {
//         dispatch( updateMessageToUserCreator( text ) )
//     }
//
//     return ( <FormMessage
//             newMessageText={ newMessageText }
//             sendMessage={ sendMessage }
//             onChange={ onChange }/>
//     )
// }

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messages.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: () => {
            dispatch( sendMessageToUserCreator() )
        },
        onChange: (text) => {
            dispatch( updateMessageToUserCreator( text ) )
        }
    }
}

export const FormMessageContainer = connect( mapStateToProps, mapDispatchToProps )( FormMessage )

