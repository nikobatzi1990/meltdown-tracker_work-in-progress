import {
  React,
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import axios from "axios";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../firebase";

const UserContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const createUser = async (username, email, password) => {
    const newUserInfo = {
      username,
      email,
      password,
      uid: null,
    };

    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    newUserInfo.uid = newUser.user.uid;
    await axios.post("/api/signup", newUserInfo);
    return newUser;
  };

  const loginUser = async (email, password) => {
    const loggedIn = signInWithEmailAndPassword(auth, email, password);
    return loggedIn;
  };

  const logoutUser = () => signOut(auth);

  useEffect(() => {
    const authenticatedUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return authenticatedUser;
  }, []);

  const contextValue = useMemo(
    () => ({
      createUser,
      loginUser,
      logoutUser,
      user,
    }),
    [createUser, loginUser, logoutUser, user],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserAuth = () => useContext(UserContext);
