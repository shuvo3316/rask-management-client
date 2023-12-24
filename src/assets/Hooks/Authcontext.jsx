import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../../firebase/firebase.config";
//import useAxiosPublic from "./useAxiosPublic";

export const AuthContext=createContext(null)
const auth =getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children} ) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    //const axiosPublic=useAxiosPublic();

    const createUser=(email,password)=>{
        setLoading(true);

        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
          
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
           const unsubscribe= onAuthStateChanged(auth,currentUser =>{
                setUser(currentUser);
                console.log('current user',currentUser);
               // const userInfo={email:currentUser?.email}

                // if(currentUser){
                //     //todo token set
                //     // axiosPublic.post('/jwt',userInfo)
                //     // .then(res=>{
                //     //     if(res.data.token){
                //     //         localStorage.setItem('access-token',res.data.token);
                //     //     }
                //     // })

                // }
                // else
                // {
                //     //todo remove token
                //     localStorage.removeItem('access-token');
                //     console.log('access token removed');
                // }

                setLoading(false)
            });
            return ()=>{
                return unsubscribe();
            }

    },[])

    const info ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;