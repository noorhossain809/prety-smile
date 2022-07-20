import { useState, useEffect } from "react";
import initializeFirebase from "../components/Login/Firebase/Firebase.init";
import { getAuth, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken
} from "firebase/auth";



initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  const [admin, setAdmin] = useState(false)
  const [token, setToken] = useState("")
   

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const register = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        const newUser = {email, displayName: name}
        setUser(newUser)
        
          // sent to firebase after creation
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
        saveUser(email, name, 'POST')
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
    saveUser(user.email, user.displayName, 'PUT')
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
          getIdToken(user)
          .then(idToken => {
            setToken(idToken)
            console.log(idToken)
          })
          
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribe;
  },[])

  useEffect(() => {
    fetch(`https://fathomless-scrubland-68650.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  }, [user.email])

  const saveUser = (email, displayName, method) => {
    const user = {email, displayName}

        fetch('https://fathomless-scrubland-68650.herokuapp.com/users', {
          method: method,
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
  }

  return {
    user,
    isLoading,
    authError,
    admin,
    token,
    register,
    login,
    GoogleSign,
    logout,
  };
};
export default useFirebase;
