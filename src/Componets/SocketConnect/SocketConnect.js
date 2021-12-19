import { useEffect } from 'react/cjs/react.development';
import {io} from 'socket.io-client';
const SocketConnet = ()=>{

    const socket = io('http://localhost:5000/',{
        withCredentials: true,
        transports: ['websocket'],
        forceNew: true,
      
      
            extraHeaders:{
              "my-custom-header":"abcd"
            }
          
        
      })

     useEffect(()=>{
        socket.on('connected', () => {
    
            debugger;
          })
     },[])



      console.log(socket);


return {
    socket
}

}

export default SocketConnet;