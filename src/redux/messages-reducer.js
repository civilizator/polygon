
const SEND_MESSAGE_TO_USER = 'SEND-MESSAGE-TO-USER'
const UPDATE_NEW_TEXT_SEND_MESSAGE_TO_USER = 'UPDATE-NEW-TEXT-SEND-MESSAGE-TO-USER'

const initialState = {
    users: [
        { userId: 1, userName: "Dan" },
        { userId: 2, userName: "John" },
        { userId: 3, userName: "Sarah" },
        { userId: 4, userName: "Jax" },
        { userId: 5, userName: "Helen" },
        { userId: 6, userName: "Brain" },
        { userId: 7, userName: "Katrine" }
    ],

    message: [
        { id: 1,  userPost: "Lorem ipsum dolor sit amet." },
        { id: 2,  myPost: "MY POST Lorem amet." },
        { id: 3,  myPost: "MY POST Lorem amet." },
        { id: 4,  myPost: "MY POST Lorem amet." },
        { id: 5,  userPost: "Lorem ipsum dolor sit amet, consectetur." },
        { id: 6,  userPost: "Lorem ipsum dolor." },
        { id: 7,  myPost: "MY POST ipsum dolor." },
        { id: 8,  userPost: "Lorem ipsum dolor sit." }
    ],
    newMessageText:
                `
                    Avatar + Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid dolorem fugit iusto, magnam magni sed?
                    Avatar + Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid dolorem fugit iusto, magnam magni sed?
                    Avatar + Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid dolorem fugit iusto, magnam magni sed?
                    Avatar + Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid dolorem fugit iusto, magnam magni sed?
                    Avatar + Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid dolorem fugit iusto, magnam magni sed?
                    Avatar + Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid dolorem fugit iusto, magnam magni sed?
                `
}


const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE_TO_USER:

            const newMessage = {
                id: state.message.length + 1
                , myPost: state.newMessageText
            }

            return {
                ...state,
                message: [ ...state.message, newMessage ]
                , newMessageText: ''
            }

        case UPDATE_NEW_TEXT_SEND_MESSAGE_TO_USER:

            return {
                ...state
                , newMessageText: action.messageText
            }

        default:

            return state

    }
}

export const
    sendMessageToUserCreator = () => {
        return { type: SEND_MESSAGE_TO_USER }
    },
    updateMessageToUserCreator = (text) => {
        return { type: UPDATE_NEW_TEXT_SEND_MESSAGE_TO_USER, messageText: text }
    }


export default messagesReducer

// const structuralClone = obj => new Notification( '', { data: obj, silent: true } ).data

// const  messagesReducer = (state = initialState, action) => {
    // const state = structuralClone(stateObj)
    // const state = JSON.parse( JSON.stringify( stateObj ) )
    // let stateClone = {
    //     ...state,
    //     message: [ ...state.message ]
    // }
    // stateClone.message = [ ...state ]
    // stateClone.message = {...state.message }
    // stateClone.newMessageText = { ...state.newMessageText }

//     switch (action.type) {
//
//         case SEND_MESSAGE_TO_USER:
//             const newMessage = {
//                 id: state.message.length + 1,
//                 myPost: state.newMessageText
//             }
//             stateClone.message.push( newMessage )
//             stateClone.newMessageText = ''
//             break
//         case UPDATE_NEW_TEXT_SEND_MESSAGE_TO_USER:
//             stateClone.newMessageText = action.messageText
//             break
//         default:
//             return stateClone
//     }
//
//     return stateClone
// }

