import React, { createContext, useContext } from 'react';

// Individual stores
import 
const UserContext = createContext({});
const SearchContext = createContext({});

// Combined store context
const CombinedStoreContext = createContext({});

// Combined store provider component
const CombinedStoreProvider = ({ children }) => {
  const userStore = useContext(UserContext);
  const searchStore = useContext(SearchContext);

  // Combine individual stores into a single store object
  const combinedStore = {
    user: userStore,
    search: searchStore,
  };

  return (
    <CombinedStoreContext.Provider value={combinedStore}>
      {children}
    </CombinedStoreContext.Provider>
  );
};

export { CombinedStoreProvider, CombinedStoreContext };