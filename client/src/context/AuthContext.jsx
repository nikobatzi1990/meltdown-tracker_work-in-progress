import React from "react";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase";
import PropTypes from "prop-types";

const UserContext = createContext();

export function AuthContextProvider ({ children }) {
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

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const authenticatedUser = onAuthStateChanged(auth, (currentUser) => {
      console.log("🫡", currentUser);
      setUser(currentUser);
    });
    return authenticatedUser;
  }, []);

  AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const contextValue = useMemo(() => ({
    createUser,
    loginUser,
    logoutUser,
    user,
  }), [createUser, loginUser, logoutUser, user]);

  return (
    <UserContext.Provider value={{ contextValue }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => useContext(UserContext);
