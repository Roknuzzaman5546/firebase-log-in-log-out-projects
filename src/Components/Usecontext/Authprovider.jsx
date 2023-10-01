import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firbase/firebase.config";

export const Authcontext = createContext(null)

const Authprovider = ({ children }) => {

    const [user, setuser] = useState(null)

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setuser(currentUser);
            console.log(currentUser)
        } )
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = { user, creatUser,  signinUser, logOut }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;