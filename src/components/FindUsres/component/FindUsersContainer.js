
import {connect} from "react-redux"
import { setUsersCreator, userFollowCreator, activePageCreator, totalUsersCountCreator } from "../../../redux/find-users-reducer"
import React from "react";
import * as axios from "axios";
import FindUsers from "./FindUsers";

class FindUsersContainer extends React.Component {

    pageChange = (page) => {
        this.props.activePage( page )
        axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }` )
            .then( res => {
                this.props.setUsers( res.data.items )
                this.props.setTotalUsersCount( res.data.totalCount )
            } )
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.pageChange( this.props.currentPage )
        }
    }


    render() {
        return (
            <FindUsers
                users={ this.props.users }
                followToUser={ this.props.followToUser }
                totalUsersCount={ this.props.totalUsersCount }
                pageSize={ this.props.pageSize }
                currentPage={ this.props.currentPage }
                pageChange={ this.pageChange }
            />
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer)

