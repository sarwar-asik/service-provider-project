import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";

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

//   for log out 


const logout = () => {
    return signOut(auth)
      .then(() => {
        alert("logout");
        toast('log out ')
      })
      .catch((error) => {
        console.log(error.message, "from log out");
      });
  };


  const userInfo = { login ,user,loader, createUser,logout};
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
