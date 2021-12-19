import logo from './logo.svg';
import './App.css';


import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Componets/Home/Home';
import Socket from './Componets/Socket/Socket';
import SocketConnet from './Componets/SocketConnect/SocketConnect';
import VoiceTest from './Componets/voicetest.js/VoiceTest';


function App() {
 
  const {socket} = SocketConnet()

  
  




  return (
    <div className="App">

      <BrowserRouter>

      <Switch>


        <Route path='/voice'>
         <VoiceTest></VoiceTest>
        </Route>


        <Route exact path='/home'>
          <Home value={socket}> </Home>

        </Route>


        <Route path='/login'>
          <Socket></Socket>
        </Route>











      </Switch>











      </BrowserRouter>
    

     









    </div>
  );
}

export default App;
