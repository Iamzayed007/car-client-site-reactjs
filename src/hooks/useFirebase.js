import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, getIdToken, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuth from '../firebase/firebase.initialize';

initializeAuth()
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth()


    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                // save user to db
                saveUser(email, name, 'POST')

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                history.replace('/')

            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false))
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);


            })
            .finally(() => setIsLoading(false));

    }




    const logOut = () => {
        setIsLoading(true);

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));


    }

    // check admin 
    useEffect(()=>{
        fetch(`https://powerful-bastion-59588.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])

    // SAVE USER DB
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://powerful-bastion-59588.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()


    }


    const signInWithGoogle = (location, history) => {

        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination)
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
                const uid = user.uid;
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed
    }, [])





    return {
        user,
        admin,
        isLoading,
        token,
        registerUser,
        logOut,
        loginUser,
        authError,
        signInWithGoogle

    }
};

export default useFirebase;