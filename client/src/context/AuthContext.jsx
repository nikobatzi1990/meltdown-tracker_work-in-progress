import { createContext, useContext, useState } from 'react';
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
    setUser(newUser.data.currentUser);
    return newUser.data.currentUser;
  };

  const loginUser = async (email, password) => {
    const userInfo = {
      email: email,
      password: password,
    }
    const loggedIn = await axios.post('/api/login', userInfo);
    setUser(loggedIn.data.currentUser);
    return loggedIn.data.currentUser;
  };

  const getTags = async () => {
    const userTags = await axios.get('/api/tags');
    let tagList = [];
    await userTags.map((e) => {
      tagList.push(e.tag_name)
    });
    // console.log('😡', tagList);
    return tagList;
  }


  return <UserContext.Provider value={{ createUser, loginUser, user, getTags }}>
    {children}
  </UserContext.Provider>
}

// gives access to values in above wrapper
export const UserAuth = () => {
  return useContext(UserContext);
}