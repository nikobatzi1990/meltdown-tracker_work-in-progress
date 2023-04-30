import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('userData')));
  
  useEffect(() => {
    try {
      if(JSON.parse(sessionStorage.getItem('userData'))) {
        setUser(JSON.parse(sessionStorage.getItem('userData')));
      }
    } catch (error) {
      console.log('🤪', error);
    }
  }, []);

  const createUser = async (username, email, password) => {
    const newUserInfo = {
      username: username,
      email: email,
      password: password,
      timestamp: new Date()
    };
    const newUser = await axios.post('/api/signup', newUserInfo)
    .then(result => result.data.currentUser);
    if (newUser) {
      setUser(newUser);
      sessionStorage.setItem('userData', JSON.stringify(newUser));
      return newUser;
    } else {
      alert("Could not create an account, check email and password and try again.");
      return false;
    }
  };

  const loginUser = async (email, password) => {
    const userInfo = {
      email: email,
      password: password,
    }
    const loggedIn = await axios.post('/api/login', userInfo)
      .then(result => result.data.currentUser);
    if(loggedIn) {
      setUser(loggedIn);
      sessionStorage.setItem('userData', JSON.stringify(loggedIn));
      return loggedIn;
    } else {
      alert("User not found, check email and password and try again.");
      return false;
    }
  };

  const logoutUser =  async () => {
    await axios.post('/api/logout');
    setUser({});
    sessionStorage.removeItem('userData');
  };

  return <UserContext.Provider value={{ createUser, loginUser, logoutUser, user }}>
    {children}
  </UserContext.Provider>
}

export const UserAuth = () => {
  return useContext(UserContext);
}