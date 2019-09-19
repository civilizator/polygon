import React from "react"

const StoreContext = React.createContext(null)

export default StoreContext




/*
    2
const renderEntireThree = (props) => {

    props = binding( store )

    ReactDOM.render(
        <StoreContext.Provider value={ props }>
            <App />
        </StoreContext.Provider>,
        document.getElementById( 'root' ) )
}

 */



/*
    3
 <StoreContext.Consumer>{
     (store) => (
         <BrowserRouter>
            <div className="app-wrapper">
                <div className="header"><Header store={ store } /></div>
            </div>
         </BrowserRouter)
      }
 </StoreContext.Consumer>

**/





