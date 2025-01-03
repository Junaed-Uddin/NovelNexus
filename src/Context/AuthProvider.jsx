import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("junaed");
  // providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // sign up users
  const signUpUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user's profile
  const userUpdateProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, name, photoURL);
  };

  // verification email
  const verificationEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // sign in user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // password reset mail
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // signout
  const logOut = () => {
    return signOut(auth);
  };

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github provider
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const authInfo = {
    user,
    setUser,
    signUpUsers,
    userUpdateProfile,
    verificationEmail,
    loginUser,
    passwordReset,
    logOut,
    googleSignIn,
    githubSignIn,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
