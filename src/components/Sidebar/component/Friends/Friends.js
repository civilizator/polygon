import React from "react"
import classes from "./Friends.module.scss"
import { connect } from "react-redux";


const FriendsComponent = (props) => {
    const { friends } = props

    const mate = friends.map( (friend, i) => {
        return (
            <span key={ i } title={ friend.name }><p></p>{ friend.name }</span>
        )
    } )

    return (
        <div className={ classes.friends }>
            <h3>Friends</h3>
            <div className={ classes.mates }>
                { mate }
                <div className={ classes.clearedFloat }>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

export const Friends = connect( mapStateToProps )( FriendsComponent )

