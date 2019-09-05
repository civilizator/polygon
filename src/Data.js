
import { renderEntireThree } from "./index"

export const data = {
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
            { userPost: "Lorem ipsum dolor sit amet." },
            { myPost: "MY POST Lorem amet." },
            { myPost: "MY POST Lorem amet." },
            { myPost: "MY POST Lorem amet." },
            { userPost: "Lorem ipsum dolor sit amet, consectetur." },
            { userPost: "Lorem ipsum dolor." },
            { myPost: "MY POST ipsum dolor." },
            { userPost: "Lorem ipsum dolor sit." }
        ]
    },

    //Friends
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



export const addPost = () => {

    const newPost = {
        id: data.profile.myPosts.length +1,
        myAvatar: "https://www.w3schools.com/howto/img_avatar2.png",
        post: data.profile.newPostText,
        like: data.profile.myPosts.length
    }

    data.profile.myPosts.push(newPost)
    updateNewPostText('')
    renderEntireThree(data)
}


export const updateNewPostText = (newText) => {
    data.profile.newPostText = newText

    renderEntireThree(data)
}
