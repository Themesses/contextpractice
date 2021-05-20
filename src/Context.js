import React from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    return (
        <Context.Provider value="hubbadubba">
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}