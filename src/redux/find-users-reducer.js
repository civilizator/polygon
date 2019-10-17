const SET_USERS = 'SET-USERS'
const FOLLOW_TO_USER = 'FOLLOW-TO-USER'
const ACTIVE_PAGE = 'ACTIVE-PAGE'
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT'

const initialState = {
    users: [
        { id: 1, followed: true, name: "Maria K.", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!" },
        { id: 2, followed: false, name: "John", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        { id: 3, followed: false, name: "Sarah", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        { id: 4, followed: true, name: "Jax", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        { id: 5, followed: false, name: "Helen", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        { id: 6, followed: false, name: "Brain", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        { id: 7, followed: true, name: "Katrine", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  }
    ]
    , totalUsersCount: 14
    , pageSize: 10
    , currentPage: 1
    , isFetching: false
}

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state
                , users: action.users
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
            // console.log(action.numberPage)
            return {
                ...state
                , currentPage: action.numberPage
            }
        }

        case TOTAL_USERS_COUNT: {
            return {
                ...state
                , totalUsersCount: action.totalUsersCount
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
    , totalUsersCountCreator = (totalUsersCount) => {
        return { type: TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount }
    }

export default findUsersReducer
