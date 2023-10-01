import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firbase/firebase.config";

export const Authcontext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    const creatUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signinGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setuser(currentUser);
            setloading(false)
            console.log(currentUser)
        } )
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = { user, loading, creatUser,  signinUser, logOut, signinGoogle }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;