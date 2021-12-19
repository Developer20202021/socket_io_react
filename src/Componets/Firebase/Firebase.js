import { GoogleAuthProvider,getAuth,signInWithPopup ,onAuthStateChanged} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {useHistory} from 'react-router-dom';
import { useEffect, useState } from "react/cjs/react.development";


const Firebase = ()=>{


    const [getUser, setUser] = useState();



    const history = useHistory();

    const firebaseConfig = {
        apiKey: "AIzaSyD7RjzPmeEO_ri94i8IQVBvSrJoU1s2ta8",
        authDomain: "socket-message-af6af.firebaseapp.com",
        projectId: "socket-message-af6af",
        storageBucket: "socket-message-af6af.appspot.com",
        messagingSenderId: "569408083214",
        appId: "1:569408083214:web:b96f54dde9f4e1028cf35f"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);



      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      const loginWithGoogle = ()=>{

        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user;
            setUser(user)
          
            fetch('http://localhost:5000/postuser', {
                method:"POST",
                headers:{
                    "Content-Type":"aplication/json"
                },
                body:JSON.stringify({email:user.email})
            })


            history.push('/home')
        })

      }


      useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
            }
            else{
                console.log('singOut');
            }
        })


      },[getUser])



      return{
          loginWithGoogle,
          getUser,
          setUser
      }






}

export default Firebase;