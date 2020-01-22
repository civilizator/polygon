const SET_USER_DATA = "SET-USER-DATA"

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: !1
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state
                , ...action.data
                , isAuth: !0
            }
        }

        default:
            return state
    }
}

export const
    setAuthUserCreator = (userId, login, email) => {
        return { type: SET_USER_DATA, data: { userId, login, email } }
    }

export default authReducer