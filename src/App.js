import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'

import "./App.scss"

import { Header, Sidebar, Profile, Messages, News, Music, Settings, Footer } from "./components"


const App = (props) => {
    const { header, profile, messages } = props.data

    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <div className="header"><Header header={ header }/></div>

                <div className="sidebar"><Sidebar/></div>

                <div className="content">
                    <Route path="/profile" render={ () => <Profile profile={ profile } /> } />
                    <Route path="/messages" render={ () => <Messages messages={ messages } /> } />
                    <Route path="/news" component={ News }/>
                    <Route path="/music" component={ Music }/>
                    <Route path="/settings" component={ Settings }/>
                </div>

                <div className="footer"><Footer/></div>
            </div>
        </BrowserRouter>
    )
}

export default App
