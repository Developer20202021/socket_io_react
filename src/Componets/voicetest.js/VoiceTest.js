import React, { useRef } from 'react';

const VoiceTest = () => {

    const textValue = useRef();



    



    const voiceStart = ()=>{

        const text = textValue.current.value;
        const voices = window.speechSynthesis.getVoices();
        // const volume = window.speechSynthesis.volume;

        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = 'en';
        msg.voice = voices[1];
        msg.volume = 3.5;


        
        console.log();
        
        
       

        window.speechSynthesis.speak(msg)

    




    }





    return (
        <div>
            <input ref={textValue}   type="text" name="" id="" />

            <button onClick={voiceStart}>Start</button>
            
        </div>
    );
};

export default VoiceTest;