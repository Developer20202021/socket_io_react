
import { useEffect, useRef, useState, React } from 'react';
import Firebase from '../Firebase/Firebase';
import SocketConnet from '../SocketConnect/SocketConnect';


function Home(props) {

  const socket = props.value
  console.log(props.value);

  const {getUser, setUser} = Firebase();





    console.log(getUser?.email);




 
 






















  const [getMessage, setGetMessage] = useState([])

  
  const array = [];

















    
    
    socket.on('send', data=>{
   
  
      console.log(getMessage);
  
  
  
  
        setGetMessage([...getMessage,data]);
    })





  
 

  


  const message = useRef();




// useEffect(()=>{
  

  // socket.on('data', (data)=>{
  //   console.log(data);
  // })


  // socket.on('hello', (data)=>{
  //   console.log(data);
  // })
 

 useEffect(()=>{
  socket.emit('user', `${getUser?.email}`)
 },[getUser])

  // socket.emit('name',`hello`)
// },[getUser])

   
    

    
  
 


    


  
   





  const send = ()=>{
   

    socket.emit('message',`c6h6ch3h@gmail.com,${message.current.value}`)




  }


  
  




  return (
    <div className="">


      <div>
        <ul>
        {getMessage.length>0?getMessage.map(m=><li>{m}</li>):null}
        </ul>
      </div>


      <input type="text" ref={message} />
      <button onClick={send}>Send</button>     

     









    </div>
  );
}

export default Home;