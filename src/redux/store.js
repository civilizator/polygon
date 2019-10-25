import { combineReducers, createStore } from "redux"

import headerReducer from "./header-reducer"
import profileReducer from "./profile-reducer"
import messagesReducer from "./messages-reducer"
import sidebarReducer from "./sidebar-reducer"
import findUsersReducer from "./find-users-reducer"
import authReducer from "./auth-reducer"

const reducers = combineReducers( {
        header: headerReducer,
        profile: profileReducer,
        messages: messagesReducer,
        sidebar: sidebarReducer,
        findUsers: findUsersReducer,
        auth: authReducer
    }
)

const store = createStore( reducers )

window.store = store //store.getState()

export default store
