import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  
  const refAnalogWrapper = useRef(null)
  const [analogWrapper, setAnalogWrapper] = useState();
  //...
  useEffect(() => {
    let getPositions = refAnalogWrapper.current.getBoundingClientRect();
    let YPosition = getPositions.y;
    setAnalogWrapper(YPosition);
    // console.log(refAnalogWrapper.current.getBoundingClientRect())
  }, []);
  

  // useEffect(()=> {
  //     console.log(refAnalogWrapper.current.getBoundingClientRect())
  // }, [analogWrapper])

  // console.log(refAnalogWrapper.current.getBoundingClientRect())


  return (
    <div id="analog-wrapper" ref={refAnalogWrapper}>
      <Timer />
    </div>
  );
  
}


const Timer = () => {
  
  const heightPosition = 40;
  const [hourFirstPosition, setHourFirstPosition] = useState(null);  
  const [hourSecondPosition, setHourSecondPosition] = useState(null);

  const [minuteFirstPosition, setMinuteFirstPosition] = useState(null);
  const [minuteSecondPosition, setMinuteSecondPosition] = useState(null);

  const [secondFirstPosition, setSecondFirstPosition] = useState(null);
  const [secondSecondPosition, setSecondSecondPosition] = useState(null);
  
  setInterval(() => {
    
    let date = new Date();

    //Hour
    let currentHours = date.getHours();
    currentHours = ("0" + currentHours).slice(-2);
    let HourFirst = currentHours[0];
    let HourSecond = currentHours[1];
    if(HourFirst > 0) {
      setHourFirstPosition(HourFirst*heightPosition);
    } else {
      setHourFirstPosition(0)
    }
    const hourfirst = document.querySelectorAll('.hours-container .first .timeNumber');
    for(let i=0; i<hourfirst.length; i++) {
      hourfirst[i].classList.remove("selected");
    }
    hourfirst[HourFirst].classList.add("selected");

    if(HourSecond > 0) {
      setHourSecondPosition(HourSecond*heightPosition);
    } else {
      setHourSecondPosition(0)
    }
    const hoursecond = document.querySelectorAll('.hours-container .second .timeNumber');
    for(let i=0; i<hoursecond.length; i++) {
      hoursecond[i].classList.remove("selected");
    }
    hoursecond[HourSecond].classList.add("selected");

    //Minutes
    let currentMinutes = date.getMinutes();
    currentMinutes = ("0" + currentMinutes).slice(-2);
    let MinuteFirst = currentMinutes[0];
    let MinuteSecond = currentMinutes[1];
    if(MinuteFirst > 0) {
      setMinuteFirstPosition(MinuteFirst*heightPosition);
    } else {
      setMinuteFirstPosition(0)
    }
    const minutefirst = document.querySelectorAll('.minutes-container .first .timeNumber');
    for(let i=0; i<minutefirst.length; i++) {
      minutefirst[i].classList.remove("selected");
    }
    minutefirst[MinuteFirst].classList.add("selected");

    if(MinuteSecond > 0) {
      setMinuteSecondPosition(MinuteSecond*heightPosition);
    } else {
      setMinuteSecondPosition(0)
    }
    const minutessecond = document.querySelectorAll('.minutes-container .second .timeNumber');
    for(let i=0; i<minutessecond.length; i++) {
      minutessecond[i].classList.remove("selected");
    }
    minutessecond[MinuteSecond].classList.add("selected");

    //Seconds
    let currentSeconds = date.getSeconds();
    currentSeconds = ("0" + currentSeconds).slice(-2);
    let SecondFirst = currentSeconds[0];
    let SecondSecond = currentSeconds[1];
    if(SecondFirst > 0) {
      setSecondFirstPosition(SecondFirst*heightPosition);
    } else {
      setSecondFirstPosition(0)
    }
    const secondfirst = document.querySelectorAll('.seconds-container .first .timeNumber');
    for(let i=0; i<secondfirst.length; i++) {
      secondfirst[i].classList.remove("selected");
    }
    secondfirst[SecondFirst].classList.add("selected");

    
    if(SecondSecond > 0) {
      setSecondSecondPosition(SecondSecond*heightPosition);
    } else {
      setSecondSecondPosition(0)
    }
    const secondsecond = document.querySelectorAll('.seconds-container .second .timeNumber');
    for(let i=0; i<secondsecond.length; i++) {
      secondsecond[i].classList.remove("selected");
    }
    secondsecond[SecondSecond].classList.add("selected");

    
    
  }, 1000)

  // useEffect(() => {

  //   const colors = [
  //     'Red', 'Green', 'Blue', 'Brown', 'Yellow', 'Black'
  //   ]
  
  //   const loopFun = () => {
  //     for(let i=0; i<colors.length; i++){
        
  //     }
  //   }
  
  //   useEffect(()=>{
  //     loopFun();
  //   }, []);

  // }, [])
  

  return (<>
  <div className="hours-container">
    <div className="timeWrapper first" style={{transform: `translateY(-${hourFirstPosition}px)`}}>
      <div className="timeNumber">0</div>
      <div className="timeNumber">1</div>
      <div className="timeNumber">2</div>
    </div>    
    <div className="timeWrapper second" style={{transform: `translateY(-${hourSecondPosition}px)`}}>
      <div className="timeNumber">0</div>
      <div className="timeNumber">1</div>
      <div className="timeNumber">2</div>
      <div className="timeNumber">3</div>
      <div className="timeNumber">4</div>
      <div className="timeNumber">5</div>
      <div className="timeNumber">6</div>
      <div className="timeNumber">7</div>
      <div className="timeNumber">8</div>
      <div className="timeNumber">9</div>
    </div>
  </div>
  <div className="minutes-container">
    <div className="timeWrapper first" style={{transform: `translateY(-${minuteFirstPosition}px)`}}>
      <div className="timeNumber">0</div>
      <div className="timeNumber">1</div>
      <div className="timeNumber">2</div>
      <div className="timeNumber">3</div>
      <div className="timeNumber">4</div>
      <div className="timeNumber">5</div>
    </div>
    <div className="timeWrapper second" style={{transform: `translateY(-${minuteSecondPosition}px)`}}>
      <div className="timeNumber">0</div>
      <div className="timeNumber">1</div>
      <div className="timeNumber">2</div>
      <div className="timeNumber">3</div>
      <div className="timeNumber">4</div>
      <div className="timeNumber">5</div>
      <div className="timeNumber">6</div>
      <div className="timeNumber">7</div>
      <div className="timeNumber">8</div>
      <div className="timeNumber">9</div>
    </div>
  </div>
  <div className="seconds-container">
    <div className="timeWrapper first" style={{transform: `translateY(-${secondFirstPosition}px)`}}>
      <div className="timeNumber">0</div>
      <div className="timeNumber">1</div>
      <div className="timeNumber">2</div>
      <div className="timeNumber">3</div>
      <div className="timeNumber">4</div>
      <div className="timeNumber">5</div>
    </div>
    <div className="timeWrapper second" style={{transform: `translateY(-${secondSecondPosition}px)`}}>
      <div className="timeNumber">0</div>
      <div className="timeNumber">1</div>
      <div className="timeNumber">2</div>
      <div className="timeNumber">3</div>
      <div className="timeNumber">4</div>
      <div className="timeNumber">5</div>
      <div className="timeNumber">6</div>
      <div className="timeNumber">7</div>
      <div className="timeNumber">8</div>
      <div className="timeNumber">9</div>
    </div>
  </div>
  </>);

}


export default App;
