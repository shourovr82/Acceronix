import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../FirebaseConfig/firebase.config';

export const AcceronixContext = createContext();

const AcceronixProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();


  const registerAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateCurrentUserProfile = (userDetails) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: userDetails.displayName,
      photoURL: userDetails.photoURL
    })
  }

  const logInWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }



  const handleLogout = () => {
    setLoading(true);
    return signOut(auth)
  }





  const handleGoogleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })

    return () => unsubscribe();
  }, [])

  const contextInfo = {
    handleGoogleLogin,
    user,
    loading,
    handleLogout,
    registerAccount,
    updateCurrentUserProfile,
    logInWithEmail,
  }
  return (
    <div>
      <AcceronixContext.Provider value={contextInfo}>
        {children}
      </AcceronixContext.Provider>
    </div>
  );
};

export default AcceronixProvider;