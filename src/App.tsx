import React from 'react';
import Home from './screens/Home';
import { UserContext, SearchContext } from './store/Context';
import UserState from './store/UserState'
import SearchState from './store/SearchState'

const App = () => {
  const userStore = UserState();
  const searchStore = SearchState();

  return (
    <UserContext.Provider value={userStore}>
      <SearchContext.Provider value={searchStore}>
        <Home />
      </SearchContext.Provider>
    </UserContext.Provider>
  );
};

export default App;