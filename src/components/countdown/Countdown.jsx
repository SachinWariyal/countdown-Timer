import React from 'react'
import './countdown.css';
const Countdown = ({ remainingTime }) => {
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div>
      <div className='timer-container'>
        <div className='real-timer'>{formatTime(days)} <span>Days</span></div>  <div className='real-timer'>{formatTime(hours)} <span>Hours</span></div> {' '}
        <div className='real-timer'>{formatTime(minutes)} <span>Minutes</span></div>  <div className='real-timer'>{formatTime(seconds)} <span>Seconds</span></div>
      </div>
    </div>
  );
}

export default Countdown