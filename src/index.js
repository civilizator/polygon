import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { store } from './redux/store'

const binding = (giveContext, giveProps) => {
    let key
    for (key in giveContext) {
        if (giveContext.hasOwnProperty( key ) && typeof giveContext[key] === 'function') {
            giveProps[key] = giveContext[key].bind( giveContext )
        }
    }
}

export const renderEntireThree = (props) => {
    binding( store, props )
    const { dispatch } = props

    ReactDOM.render(
        <App
            store={ props.getState() }
            dispatch={ dispatch }
        />,
        document.getElementById( 'root' ) )
}

renderEntireThree( store )

store.subscribe( renderEntireThree )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
