import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';



const Login = () => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handelGoogleSignIn = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const loggedInUser = result.user;
            setUser(loggedInUser)
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    const handelGithubSignIn =  ()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const githubLoggedInUser = result.user;
            setUser(githubLoggedInUser)

        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handelSignOut = ()=>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            {
                user ?
                <button onClick={handelSignOut}>Sign out</button>:
               <div>
                 <button onClick={handelGoogleSignIn}>Google Login</button>
                 <button onClick={handelGithubSignIn}>Github Login</button>
               </div>

            }
            
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