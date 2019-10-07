import React from "react"
import classes from "./FindUsers.module.scss"

import { Users } from "./Users"
import { connect } from "react-redux"
import { setUsersCreator, userFollowCreator } from "../../../redux/find-users-reducer"
import * as axios from "axios";

class User extends React.Component {
    
}

//https://social-network.samuraijs.com/api/1.0/users
//"API-KEY": "50321cf7-3927-4fca-94fa-5438295b0ec3"
const FindUsersComponent = (props) => {
    const { users, followToUser } = props

    const getUsers= () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                    // console.log('Response: ', res.data.items)
                    props.setUsers(res.data.items)
                })

        }
    }



    const eachUsers = users.map( (user) => {
            return (
                <Users
                    key={ user.id }
                    userId={ user.id }
                    userFollow={ user.followed }
                    userName={ user.name }
                    userCity={ "user.userCity" }
                    userCountry={ "user.userCountry" }
                    userStatus={ "user.userStatus" }

                    followToUser={ followToUser }

                />
            )
        }
    )

    return (
        <div className={ classes.findUsers }>
            <h1>Find Users</h1>

            { eachUsers }

            <div className={classes.users }>
                <div className={classes.userEvent}>
                    <input
                        onClick={getUsers}
                        type="submit"
                        name="submit"
                        value="Show More"
                        className={ classes.buttonShowMore }
                    />
                </div>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        users: state.findUsers.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch( setUsersCreator( users ) )
        },
        followToUser: (userId) => {
            dispatch( userFollowCreator( userId ) )
        }
    }
}

const FindUsers = connect( mapStateToProps, mapDispatchToProps )( FindUsersComponent )

export default FindUsers
