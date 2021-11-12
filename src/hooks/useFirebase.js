import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword , onAuthStateChanged, updateProfile, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () =>{
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState('');
  const  [isLoading, setIsLoading] = useState(true)
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  const registerUser = (email, password, name) => {
      setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       setAuthError('')
       const newUser = {email, displayName: name}
        setUser(newUser)
        saveUser(email, name,'POST');
        updateProfile(auth.currentUser, {
          displayName: name
      }).then(() => {
      }).catch((error) => {
      });
          
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
        
      })
      .finally(() => setIsLoading(false));
  };
  
  const loginUser = (email, password,location,history ) => {
     setIsLoading(true);
     const destination = location?.state?.from || '/';
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setUser(userCredential.user);
      history.replace(destination)
        setAuthError('')

    })
    .catch((error) => {
      const errorCode = error.code;
      setAuthError(error.message);
    })
    .finally(() => setIsLoading(false)) ;
   
     
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
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() =>  setIsLoading(false));
      

  }

  const saveUser = (email, displayName, method ) => {
    const user = { email, displayName };
    fetch('https://serene-beyond-53028.herokuapp.com/users', {
        method: method ,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()

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