
import React from 'react'
import Home from './screens/Home'
import Context from './store/Context';
import DataState from './store/DataState';


const App = () => {

    const store = { ...DataState() };

    return (
        <Context.Provider value={store}>
            <Home />
        </Context.Provider>
    )
}


export default App