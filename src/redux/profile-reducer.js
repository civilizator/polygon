const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState = {
    infoProfile: {
        bgUrl: "http://localhost:3000/images/ba-01s3.jpg",
        profileImgUrl: "http://localhost:3000/images/512137691.webp",
        descriptionProfile: "Avatar + Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid dolorem fugit iusto, magnam magni sed?"
    },

    myPosts: [
        { id: 1, myAvatar: "http://localhost:3000/images/img_avatar2.png", post: "Hi", like: 1 },
        { id: 2, myAvatar: "http://localhost:3000/images/img_avatar2.png", post: "How are you?", like: 4 },
        { id: 3, myAvatar: "http://localhost:3000/images/img_avatar2.png", post: "Hello", like: 3 },
        { id: 4, myAvatar: "http://localhost:3000/images/img_avatar2.png", post: "All just is fine for  me", like: 5 },
        { id: 5, myAvatar: "http://localhost:3000/images/img_avatar2.png", post: "Ok. I'm happy for you :)", like: 14 }
    ],
    newPostText: "text",
    profile: null
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case  ADD_POST:
            const newPost = {
                id: state.myPosts.length + 1,
                myAvatar: state.myPosts[0].myAvatar,
                post: state.newPostText,
                like: state.myPosts.length
            }

            return {
                ...state,
                myPosts: [ ...state.myPosts, newPost ],
                newPostText: ''
            }
        case  UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case  SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}

export const
    submitPostCreator = () => {
        return { type: ADD_POST }
    },
    updatePostCreator = (text) => {
        return { type: UPDATE_NEW_POST_TEXT, newText: text }
    },
    setUserProfile = (profile) => {
        return { type: SET_USER_PROFILE, profile }
    }

export default profileReducer


// const profileReducer = (state = initialState, action) => {
//     const stateClone = {
//         ...state,
//         myPosts: [ ...state.myPosts ]
//     }
//     switch (action.type) {
//         case  ADD_POST:
//             const newPost = {
//                 id: state.myPosts.length + 1,
//                 myAvatar: state.myPosts[0].myAvatar,
//                 post: state.newPostText,
//                 like: state.myPosts.length
//             }
//             stateClone.myPosts.push( newPost )
//             stateClone.newPostText = ''
//             break
//         case  UPDATE_NEW_POST_TEXT:
//             stateClone.newPostText = action.newText
//             break
//         default:
//             return state
//     }
//
//     return stateClone
// }
//
// export const
//     submitPostCreator = () => {
//         return { type: ADD_POST }
//     },
//     updatePostCreator = (text) => {
//         return { type: UPDATE_NEW_POST_TEXT, newText: text }
//     }
//
// export default profileReducer
