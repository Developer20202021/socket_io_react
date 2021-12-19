import React from 'react';
import {useHistory} from 'react-router-dom';
import './Socket.css';
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Firebase from '../Firebase/Firebase';

const Socket = () => {

    const {loginWithGoogle} = Firebase()

   



   




      const googleLogIn= ()=>{

      loginWithGoogle();


      }





    return (
        <div>


            <button onClick={googleLogIn}>Google log in</button>


            
        </div>
    );
};

export default Socket;