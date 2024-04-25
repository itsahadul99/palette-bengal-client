/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
  export const AuthContext = createContext(null);
  const googleProvider = new GoogleAuthProvider();
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
      // setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const logIn = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
      });
      return () => {
        unSubscribe()
      };
    }, []);
  
    const authInfo = {
      user,
      loading,
      setLoading,
      createUser,
      logIn,
      error,
      setError
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;