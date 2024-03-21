import { useState, useEffect } from "react";
import "./App.css";
import Countdown from "./components/countdown/Countdown";
function App() {
  const [targetDate, setTargetDate] = useState("");
  const [countdownActive, setCountdownActive] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const handleInputChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = new Date();
    const maxDate = new Date(currentDate.getTime() + (100 * 24 * 60 * 60 * 1000)); // Maximum 100 days
    if (new Date(selectedDate) > maxDate) {
      alert('Maximum allowed time is 100 days from now.');
    } else {
      setTargetDate(selectedDate);
    }
  };

  const startTimer = () => {
    if (targetDate.trim() !== "") {
      const targetDateTime = new Date(targetDate).getTime();
      console.log(targetDateTime);
      const currentTime = new Date().getTime();
      console.log(currentTime);
      setRemainingTime(targetDateTime - currentTime);
      console.log(remainingTime);
      setCountdownActive(true);
    }
  };
  const stopTimer = () => {
    setCountdownActive(false);
    setRemainingTime(0);
  };
  // console.log(remainingTime);

  useEffect(() => {
    let interval;
    if (countdownActive) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1000;
          } else {
            clearInterval(interval);
            setCountdownActive(false);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [countdownActive]);

  return (
    <div className="container">
      <h1 className="title">
        Countdown <span className="timer">Timer</span>{" "}
      </h1>
      <div className="date">
        <input
          className="datetime"
          type="datetime-local"
          value={targetDate}
          onChange={handleInputChange}
          disabled={countdownActive}
        />
      </div>
      <div className="start_timer_button">
        {/* <button className='button' onClick={startTimer} disabled={countdownActive}>Start timer</button>
        <button className='button' onClick={stopTimer} disabled={!countdownActive}>Stop timer</button> */}
        {!countdownActive && (
          <button className='button' onClick={startTimer}>Start Countdown</button>
        )}
        {countdownActive && (
          <button className='button' onClick={stopTimer}>Cancel Countdown</button>
        )}
      </div>
      <Countdown remainingTime={remainingTime} />
    </div>
  );
}

export default App;
