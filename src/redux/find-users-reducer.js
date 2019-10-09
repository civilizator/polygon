const SET_USERS = 'SET-USERS'
const FOLLOW_TO_USER = 'FOLLOW-TO-USER'
const ACTIVE_PAGE = 'ACTIVE-PAGE'

const initialState = {
    users: [
        // { id: 1, userFollow: true, userName: "Maria K.", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!" },
        // { id: 2, userFollow: false, userName: "John", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        // { id: 3, userFollow: false, userName: "Sarah", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        // { id: 4, userFollow: true, userName: "Jax", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        // { id: 5, userFollow: false, userName: "Helen", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        // { id: 6, userFollow: false, userName: "Brain", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        // { id: 7, userFollow: true, userName: "Katrine", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  }
    ]
    , pageSize: 8
    , totalUsersCount: 100
    , currentPage: 1
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
                    if (user.id === userId && user.followed !== undefined) {
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

        case ACTIVE_PAGE: {
            return {
                ...state
                , currentPage: action.numberPage
            }
        }

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
    , activePageCreator = (numberPage) => {
        return { type: ACTIVE_PAGE, numberPage: numberPage }
    }


export default findUsersReducer
