import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword , onAuthStateChanged, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () =>{
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState('');
  const  [isLoading, setIsLoading] = useState(true)
  const auth = getAuth();

  const registerUser = (email, password) => {
      setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       setAuthError('')
        setUser(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
        
      })
      .finally(() => setIsLoading(false));
  };
  
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setAuthError('')
      setUser(user);
    
    })
    .catch((error) => {
      const errorCode = error.code;
      setAuthError(error.message);
    });
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
           
        } else {
            setUser({})
        }
        setIsLoading(false);
    });
    return () => unsubscribed;
}, [])

  const logOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() =>  setIsLoading(false));
      

  }

  return {
      user,
      isLoading,
      authError,
      registerUser,
      loginUser,
      logOut,

  }
}

export default useFirebase;