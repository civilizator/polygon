const SET_USER_DATA = "SET-USER-DATA"

const initialState = {
    id: null,
    login: null,
    email: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state
                , ...action.data,
            }
        }

        default:
            return state
    }
}

export const
    setUsersCreator = (userId, login, email) => {
        return { type: SET_USER_DATA, users: { userId, login, email } }
    }

export default authReducer