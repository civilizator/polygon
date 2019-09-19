const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    infoProfile: {
        bgUrl: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
        profileImgUrl: "https://timedotcom.files.wordpress.com/2015/04/512137691.jpg?w=800&quality=85",
        descriptionProfile: "Avatar + Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid dolorem fugit iusto, magnam magni sed?"
    },

    myPosts: [
        { id: 1, myAvatar: "https://www.w3schools.com/howto/img_avatar2.png", post: "Hi", like: 1 },
        { id: 2, myAvatar: "https://www.w3schools.com/howto/img_avatar2.png", post: "How are you?", like: 4 },
        { id: 3, myAvatar: "https://www.w3schools.com/howto/img_avatar2.png", post: "Hello", like: 3 },
        { id: 4, myAvatar: "https://www.w3schools.com/howto/img_avatar2.png", post: "All just is fine for  me", like: 5 },
        { id: 5, myAvatar: "https://www.w3schools.com/howto/img_avatar2.png", post: "Ok. I'm happy for you :)", like: 14 }
    ],
    newPostText: "text"
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
            state.myPosts.push( newPost )
            state.newPostText = ''
            break
        case  UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break
        default:
            return state
    }

    return state
}

export const
    submitPostCreator = () => {
        return { type: ADD_POST }
    },
    updatePostCreator = (text) => {
        return { type: UPDATE_NEW_POST_TEXT, newText: text }
    }

export default profileReducer
