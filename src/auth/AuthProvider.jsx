import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import app from "./firebase";
import { Navigate, json, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);
const auth = getAuth();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);

    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .error((error) => console.log(error));
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log('logged in user inside auth state observer', loggedUser)
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleUpdateProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name
    });
  };

  const authInfo = {
    user,
    register,
    loading,
    logOut,
    logIn,
    handleUpdateProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
