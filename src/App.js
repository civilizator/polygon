import React from "react"
import "./App.scss"

import {Header, Sidebar, Profile, Footer} from "./components"


const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Sidebar />
            <Profile />
            <Footer />
        </div>
    )
}

export default App
