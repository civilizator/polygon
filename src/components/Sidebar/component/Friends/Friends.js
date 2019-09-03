import React from "react"
import classes from "./Friends.module.scss"


export const Friends = (props) => {
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
                <div className={classes.clearedFloat}></div>
            </div>
        </div>
    )
}
