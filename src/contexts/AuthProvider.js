import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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
        localStorage.removeItem("sh-travel-token");
        toast("log out ");
      })
      .catch((error) => {
        console.log(error.message, "from log out");
      });
  };

  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Google sign in");

        // VERIFY JWT ///
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            localStorage.setItem("sh-travel-token", data.token);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userInfo = {
    login,
    user,
    loader,
    setloader,
    createUser,
    logout,
    googleSignIn,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
