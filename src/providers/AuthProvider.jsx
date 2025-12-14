import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import { getAnalytics, logEvent } from "firebase/analytics";

const auth = getAuth(app);
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then((res) => {
      logEvent(analytics, "signup", { method: "email" });
      return res;
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then((res) => {
      logEvent(analytics, "login", { method: "email" });
      return res;
    });
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider).then((res) => {
      logEvent(analytics, "login", { method: "google" });
      return res;
    });
  };

  const logOut = async () => {
    logEvent(analytics, "logout");
    return await signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then((res) => {
      logEvent(analytics, "update_profile", { name });
      return res;
    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log('current user--->', currentUser)
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
