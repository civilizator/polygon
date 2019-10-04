import React from "react"
import classes from "./FindUsers.module.scss"

import { Users } from "./Users"
import { connect } from "react-redux"
import { setUsersCreator, userFollowCreator } from "../../../redux/find-users-reducer"
import * as axios from "axios";

//https://social-network.samuraijs.com/api/1.0/users
//"API-KEY": "50321cf7-3927-4fca-94fa-5438295b0ec3"
const FindUsersComponent = (props) => {
    const { users, followToUser } = props

    if (users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                console.log('Response: ', res.data.items)
                props.setUsers(res.data.items)
            })


        // props.setUsers( [
        //         { id: 1, followed: true, name: "Maria K.", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!" },
        //         { id: 2, followed: false, name: "John", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        //         { id: 3, followed: false, name: "Sarah", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        //         { id: 4, followed: true, name: "Jax", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        //         { id: 5, followed: false, name: "Helen", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        //         { id: 6, followed: false, name: "Brain", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  },
        //         { id: 7, followed: true, name: "Katrine", userCity: "City", userCountry: "Country", userStatus: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veritatis!"  }
        //     ] )
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
