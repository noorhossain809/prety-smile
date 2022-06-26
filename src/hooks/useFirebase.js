import { useState, useEffect } from "react";
import initializeFirebase from "../components/Login/Firebase/Firebase.init";
import { getAuth, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";



initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('')
   

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const register = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = {email, displayName: name}
        setUser(newUser)

        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ... 
        });
        
        history.replace('/')
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const login = (email, password, history, location) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const destination = location?.state?.from || '/'
    history.replace(destination)
    // const user = userCredential.user;
    setAuthError('')
    // ...
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));

  }

  const GoogleSign = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    const destination = location?.state?.from || '/'
    history.replace(destination)
    setAuthError('')
    // ...
  }).catch((error) => {
    setAuthError(error.message);
  }).finally(() => setIsLoading(false));

  }

  const logout = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        
      })
      .finally(() => setIsLoading(false));
  }

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribe;
  },[])

  return {
    user,
    isLoading,
    authError,
    register,
    login,
    GoogleSign,
    logout,
  };
};
export default useFirebase;
