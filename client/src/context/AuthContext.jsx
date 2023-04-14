import { handleSignUp } from '../../../server/firebase/auth';
import { createContext, useContext } from 'react';

const UserContext = createContext();

// wraps children and gives access to values
export const AuthContextProvider = () => {

  const createUser = (email, password) => {
    return handleSignUp(auth, email, password);
  }

  const loginUser = (email, password) => {
    return handleLogin(auth, email, password);
  }

  return <UserContext.Provider value={{}}>
    {children}
  </UserContext.Provider>
}

// gives access to values in above wrapper
export const UserAuth = () => {
  return useContext(UserContext);
}