import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import auth, { currentUser } from '../firebase'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  
  const createUser = async (username, email, password) => {
    const newUserInfo = {
      username: username,
      email: email,
      password: password,
      uid: null
    };

    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    newUserInfo.uid = newUser.user.uid;
    await axios.post('/api/signup', newUserInfo);
    return newUser;
  };

  const loginUser = async (email, password) => {
    const loggedIn = signInWithEmailAndPassword(auth, email, password);
    return loggedIn;
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const authenticatedUser = onAuthStateChanged(auth, 
      (currentUser) => {
        console.log('🫡', currentUser);
        setUser(currentUser);
      })
      return authenticatedUser;
  }, []);

  return <UserContext.Provider value={{ createUser, loginUser, logoutUser, user }}>
    {children}
  </UserContext.Provider>
}

export const UserAuth = () => {
  return useContext(UserContext);
}