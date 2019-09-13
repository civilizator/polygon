import profileReducer from "./profile-reducer"
import messagesReducer from "./messages-reducer"
import sidebarReducer from "./sidebar-reducer"


export const store = {
    _state: {
        //header
        header: {
            headerLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Q2gxnciDLkKAwJwszxtgNdK_rpTFfr85dyJ3q_Y-xCjV9zGAiA"
        },

//profile
        profile: {
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
        },


//Messages
        messages: {
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
        },

        //Sidebar
        sidebar: {
            friends: [
                { name: "Michael" },
                { name: "No Name No Name" },
                { name: "Sarah" },
                { name: "John" },
                { name: "Vlada" },
                { name: "Michael" },
                { name: "No Name No Name" },
                { name: "Sarah" },
                { name: "John" },
                { name: "Vlada" }
            ]
        }
    },
    _callSubscriber() {
        console.log( 'renderEntireThree worked' )
    },

    getState() {
      return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action)
        this._state.messages = messagesReducer(this._state.messages, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber( this._state )
    }
}





