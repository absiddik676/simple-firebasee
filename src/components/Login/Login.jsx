import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';



const Login = () => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    console.log(user);
    const handelGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const loggedInUser = result.user;
            setUser(loggedInUser)
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <button onClick={handelGoogleSignIn}>Google Login</button>
            {user && <div>
                <h3>{user.displayName}</h3>
                <h3>{user.email}</h3>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;