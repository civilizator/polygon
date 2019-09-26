import React from "react"
import classes from "./FindUsers.module.scss"

import { Users } from "./Users"
import { connect } from "react-redux";
import { followToUserCreator } from "../../../redux/find-users-reducer";

const FindUsersComponent = (props) => {
    const { users, followToUser } = props

    const eachUsers = users.map( (user) => {
            return (
                <Users
                    key={ user.userId }
                    userId={ user.userId }
                    userFollow={ user.userFollow }
                    userName={ user.userName }
                    userCity={ user.userCity }
                    userCountry={ user.userCountry }
                    userStatus={ user.userStatus }
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
        followToUser: (value) => {
            dispatch( followToUserCreator( value ) )
        }
    }
}

const FindUsers = connect( mapStateToProps, mapDispatchToProps )( FindUsersComponent )

export default FindUsers
