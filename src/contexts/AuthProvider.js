import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loader, setloader] = useState(true);

    const createUser = (email, password) => {
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

      const login = (email, password) => {
        setloader(true);
        return signInWithEmailAndPassword(auth, email, password);
      };



      
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setloader(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);


  const userInfo = { login ,user,loader, createUser};
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
