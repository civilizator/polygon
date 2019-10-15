
import {connect} from "react-redux"
import { setUsersCreator, userFollowCreator, activePageCreator, totalUsersCountCreator } from "../../../redux/find-users-reducer"
import FindUsersAPI from "./FindUsersAPI";

const mapStateToProps = (state) => {
    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        totalUsersCount: state.findUsers.totalUsersCount,
        currentPage: state.findUsers.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        },
        followToUser: (userId) => {
            dispatch(userFollowCreator(userId))
        },
        activePage: (numberPage) => {
            dispatch(activePageCreator(numberPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(totalUsersCountCreator(totalUsersCount))
        }
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPI)

