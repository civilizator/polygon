import { connect } from "react-redux"
import {
    setUsersCreator,
    userFollowCreator,
    activePageCreator,
    totalUsersCountCreator,
    eventPreloaderCreator
} from "../../../redux/find-users-reducer"
import React from "react";
import * as axios from "axios";
import FindUsers from "./FindUsers";
import classes from "./FindUsersLoader.module.scss"

const UsersLoaderComponent = () => {
    return (
        <div className={ classes.containerLoader }>
            <div className={ classes.ldsHourglass }>
            </div>
        </div>
    )
}

class FindUsersContainer extends React.Component {

    pageChange = (page) => {
        this.props.eventPreloader( !0 )
        this.props.setActivePage( page )
        axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }` )
            .then( res => {
                this.props.setUsers( res.data.items )
                this.props.setTotalUsersCount( res.data.totalCount )
                this.props.eventPreloader( !1 )
            } )
    }

    componentDidMount() {
        // if (this.props.users.length === 0) {
        this.pageChange( this.props.currentPage )
        // }
    }

    render() {
        return (
            <>

                { this.props.isFetching ? <UsersLoaderComponent/> : null }

                <FindUsers
                    users={ this.props.users }
                    setFollowToUser={ this.props.setFollowToUser }
                    totalUsersCount={ this.props.totalUsersCount }
                    pageSize={ this.props.pageSize }
                    currentPage={ this.props.currentPage }
                    pageChange={ this.pageChange }
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        totalUsersCount: state.findUsers.totalUsersCount,
        currentPage: state.findUsers.currentPage,
        isFetching: state.findUsers.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch( setUsersCreator( users ) )
        },
        setFollowToUser: (userId) => {
            dispatch( userFollowCreator( userId ) )
        },
        setActivePage: (numberPage) => {
            dispatch( activePageCreator( numberPage ) )
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch( totalUsersCountCreator( totalUsersCount ) )
        },
        eventPreloader: (event) => {
            dispatch( eventPreloaderCreator( event ) )
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( FindUsersContainer )

