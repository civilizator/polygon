import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'

import "./App.scss"

import { Header, Sidebar, Profile, Messages, News, Music, Settings, Footer } from "./components"


const App = (props) => {
    const { store } = props

    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <div className="header"><Header store={ store } /></div>

                <div className="sidebar"><Sidebar store={ store } /></div>

                <div className="content">
                    <Route path="/profile" render={ () => <Profile store={ store } /> } />
                    <Route path="/messages" render={ () => <Messages store={ store } /> } />
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
