import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";
import app from "./firebase";
import { json } from "react-router-dom";

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
    signOut(auth)
      .then(() => setUser(null))
      .error((error) => console.log(error));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
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
    handleUpdateProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
