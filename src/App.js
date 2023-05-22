
import React from 'react'
import Home from './screens/Home'
import Context from './store/Context'
import UserState from './store/UserState'
import SearchState from './store/SearchState'


const App = () => {

    const store = { ...UserState(), ...SearchState() };

    return (
        <Context.Provider value={store}>
            <Home />
        </Context.Provider>
    )
}


export default App