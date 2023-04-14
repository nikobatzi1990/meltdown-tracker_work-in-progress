import { createContext, useContext } from 'react';

const UserContext = createContext();

// wraps children and gives access to values
export const AuthContextProvider = (children) => {


  return <UserContext.Provider value={{}}>
    {children}
  </UserContext.Provider>
}

// gives access to values in above wrapper
export const UserAuth = () => {
  return useContext(UserContext);
}