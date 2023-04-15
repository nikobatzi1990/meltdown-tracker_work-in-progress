import { createContext, useContext, useEffect, useState } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

const UserContext = createContext();

// wraps children and gives access to values
export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({});

  const createUser = async (username, email, password) => {
    const newUserInfo = {
      username: username,
      email: email,
      password: password,
      timestamp: new Date()
    };
    const newUser = await axios.post('/api/signup', newUserInfo);
    setUser(newUser.data);
    return newUser.data;
  };

  const loginUser = async (email, password) => {
    const userInfo = {
      email: email,
      password: password,
    }
    const loggedIn = await axios.post('/api/login', userInfo);
    setUser(loggedIn.data);
    return loggedIn.data;
  };



  return <UserContext.Provider value={{ createUser, loginUser, user }}>
    {children}
  </UserContext.Provider>
}

// gives access to values in above wrapper
export const UserAuth = () => {
  return useContext(UserContext);
}