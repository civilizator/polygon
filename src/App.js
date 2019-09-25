import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'

import "./App.scss"

import { Header, Sidebar, Profile, Messages, News, Music, FindUsers, Settings, Footer } from "./components"


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <div className="header"><Header /></div>

                <div className="sidebar"><Sidebar /></div>

                <div className="content">
                    {/*<Route path="/profile" render={ () => <Profile /> } />*/}
                    {/*<Route path="/messages" render={ () => <Messages /> } />*/}
                    <Route path="/profile" component={ Profile }/>
                    <Route path="/messages" component={ Messages }/>
                    <Route path="/news" component={ News }/>
                    <Route path="/music" component={ Music }/>
                    <Route path="/find-users" component={ FindUsers }/>
                    <Route path="/settings" component={ Settings }/>
                </div>

                <div className="footer"><Footer/></div>
            </div>
        </BrowserRouter>
    )
}

export default App
