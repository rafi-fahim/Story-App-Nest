"use client";
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider()
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
  }

  const logOut = () => {
    signOut(auth)
  }
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser)
    })
    return () => unsubscribed()
  }, [user])
  return (
    <AuthContext.Provider value={{ user ,googleSignIn, logOut }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
