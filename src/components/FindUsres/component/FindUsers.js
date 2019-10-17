import React from "react"
import classes from "./FindUsers.module.scss"

import { Users } from "./Users"


const FindUsers = (props) => {

    const { users, followToUser, totalUsersCount, pageSize, currentPage, pageChange } = props

    const getUsers = () => {
        console.log( 'getUsers: ' )

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
    } )


    const pagesCount = Math.ceil( totalUsersCount / pageSize )
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push( i )
    }

    const pagination = pages.map( (page) => {
        return (
            <li key={ page } className={ currentPage === page ? classes.active : '' }>
                <button onClick={ () => pageChange( page ) }>{ page }</button>
            </li>
        )
    } )

    return (
        <div className={ classes.findUsers }>
            <h1>Find Users</h1>

            <div className={ classes.containerPagination }>
                <ul>
                    { pagination }
                </ul>
            </div>

            { eachUsers }

            <div className={ classes.users }>
                <div className={ classes.userEvent }>
                    <input
                        onClick={ getUsers }
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

export default FindUsers
