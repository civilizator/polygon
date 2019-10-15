import React from "react"
import classes from "./FindUsers.module.scss"

import {Users} from "./Users"
import * as axios from "axios"
import FindUsers from "./FindUsers"


class FindUsersAPI extends React.Component {

    pageChange = (page) => {
        this.props.activePage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.pageChange(1)
        }
    }




    render() {
        return (
            <FindUsers
                users={this.props.users}
                followToUser={this.props.followToUser}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                pageChange={this.pageChange}
            />
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



export default FindUsersAPI
