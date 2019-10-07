const SET_USERS = 'SET-USERS'
const FOLLOW_TO_USER = 'FOLLOW-TO-USER'

const initialState = {
    users: [
    //     { userId: 1, userFollow: true, userName: "Maria K.", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!" },
    //     { userId: 2, userFollow: false, userName: "John", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
    //     { userId: 3, userFollow: false, userName: "Sarah", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
    //     { userId: 4, userFollow: true, userName: "Jax", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
    //     { userId: 5, userFollow: false, userName: "Helen", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
    //     { userId: 6, userFollow: false, userName: "Brain", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
    //     { userId: 7, userFollow: true, userName: "Katrine", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  }
    ]
}

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state
                , users: [ ...state.users, ...action.users ]
            }
        }
        case FOLLOW_TO_USER:
            const userId = action.getUserId
                , setUserFollow = value => !value
            return {
                ...state
                , users: state.users.map( user => {
                    if (user.id === userId) {
                        return { ...user, followed: setUserFollow( user.followed ) }
                    }
                    return user
                } )
            }

            // const userId = action.getUserId -1
            //     , checkUserFollow = state.users[userId].userFollow
            //     , setUserFollow = value => !value
            //
            // return {
            //     ...state
            //     , users: [ ...state.users ]
            //     , userFollow: { ...state.users[userId].userFollow,  ...setUserFollow( checkUserFollow ) }
            // }

        default:
            return state
    }
}

export const
    setUsersCreator = (users) => {
        return { type: SET_USERS, users: users }
    }
    , userFollowCreator = (userId) => {
        return { type: FOLLOW_TO_USER, getUserId: userId }
    }


export default findUsersReducer
