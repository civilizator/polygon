import React from "react"
import classes from "./FindUsers.module.scss"

import {Users} from "./Users"
import {connect} from "react-redux"
import {setUsersCreator, userFollowCreator, activePageCreator} from "../../../redux/find-users-reducer"
import * as axios from "axios";


class FindUsersComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                    // console.log('Response: ', res.data.items)
                    this.props.setUsers(res.data.items)
                })
        }
    }



    getUsers = () => {
        console.log('getUsers: ')

    }

    render() {

        const eachUsers = this.props.users.map((user) => {
            // console.log('this.props.users.map: ', user)
            return (
                <Users
                    key={user.id}
                    userId={user.id}
                    userFollow={user.followed}
                    userName={user.name}
                    userCity={"user.userCity"}
                    userCountry={"user.userCountry"}
                    userStatus={"user.userStatus"}

                    followToUser={this.props.followToUser}

                />
            )
        })


        const pagesCount = this.props.totalUsersCount / this.props.pageSize
        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const pagination = pages.map((page) => {
           const activeButton = () => {
                this.props.activePage(page)
            }
            return (
                <li key={page} className={this.props.currentPage === page ? classes.active : ''}>
                    <button onClick={activeButton}>{page}</button>
                </li>
            )
        })

        return (
            <div className={classes.findUsers}>
                <h1>Find Users</h1>

                <div className={classes.containerPagination}>
                    <ul>
                        {pagination}
                    </ul>
                </div>

                {eachUsers}

                <div className={classes.users}>
                    <div className={classes.userEvent}>
                        <input
                            onClick={this.getUsers}
                            type="submit"
                            name="submit"
                            value="Show More"
                            className={classes.buttonShowMore}
                        />
                    </div>
                </div>

            </div>
        )
    }
}


//https://social-network.samuraijs.com/api/1.0/users
//"API-KEY": "50321cf7-3927-4fca-94fa-5438295b0ec3"
const FindUsersComponent_saved = (props) => {
    const {users, followToUser} = props

    const getUsers = () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                    // console.log('Response: ', res.data.items)
                    props.setUsers(res.data.items)
                })

        }
    }

    const eachUsers = users.map((user) => {
            return (
                <Users
                    key={user.id}
                    userId={user.id}
                    userFollow={user.followed}
                    userName={user.name}
                    userCity={"user.userCity"}
                    userCountry={"user.userCountry"}
                    userStatus={"user.userStatus"}

                    followToUser={followToUser}

                />
            )
        }
    )

    return (
        <div className={classes.findUsers}>
            <h1>Find Users</h1>

            {eachUsers}

            <div className={classes.users}>
                <div className={classes.userEvent}>
                    <input
                        onClick={getUsers}
                        type="submit"
                        name="submit"
                        value="Show More"
                        className={classes.buttonShowMore}
                    />
                </div>
            </div>

        </div>
    )
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
        }
    }
}

const FindUsers = connect(mapStateToProps, mapDispatchToProps)(FindUsersComponent)

export default FindUsers
