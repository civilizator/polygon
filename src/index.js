import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

import store from './redux/store'
import { Provider } from "react-redux"
//50321cf7-3927-4fca-94fa-5438295b0ec3
// const binding = (giveContext) => {
//     let key, inProps = {}, ctx = giveContext
//     for (key in ctx) {
//         if (ctx.hasOwnProperty( key ) && typeof ctx[key] === 'function') {
//             inProps[key] = ctx[key].bind( ctx )
//         }
//     }
//     return inProps
// }

// props = binding( store )

ReactDOM.render(
    <Provider store={ store }> <App /> </Provider>, document.getElementById( 'root' )
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
