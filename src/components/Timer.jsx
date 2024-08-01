import React, { useState, useEffect } from "react";
import { FaRegStopCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";

function Timer() {
  const defaultTime = 20 * 60; // 20 minuti in secondi
  const [time, setTime] = useState(defaultTime);
  const [selectedTime, setSelectedTime] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleOptionChange = (newTime) => {
    setSelectedTime(newTime);
    setTime(newTime);
  };

  const handleBeginPauseClick = () => {
    setIsRunning(!isRunning);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    setTime(selectedTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center mt-11">
      <div className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-blue-500 flex items-center justify-center mb-5">
        <p className="text-3xl md:text-5xl text-white">{formatTime(time)}</p>
      </div>
      <div className="mb-5">
        <button
  className={`
    border border-gray-400 px-4 py-2 mx-2 rounded 
    md:text-lg md:px-6 md:py-3
    ${selectedTime === 10 * 60 
      ? "bg-blue-600 text-white" 
      : "bg-gray-200 text-gray-600"}
  `}
  onClick={() => handleOptionChange(10 * 60)}
>
          10
        </button>
       <button
  className={`
    border border-gray-400 px-4 py-2 mx-2 rounded 
    md:text-lg md:px-6 md:py-3
    ${selectedTime === 20 * 60 
      ? "bg-blue-600 text-white" 
      : "bg-gray-200 text-gray-600"}
  `}
  onClick={() => handleOptionChange(20 * 60)}
>
          20
        </button>
        <button
  className={`
    border border-gray-400 px-4 py-2 mx-2 rounded 
    md:text-lg md:px-6 md:py-3
    ${selectedTime === 60 * 60 
      ? "bg-blue-600 text-white" 
      : "bg-gray-200 text-gray-600"}
  `}
  onClick={() => handleOptionChange(60 * 60)}
>
          60
        </button>
      </div>
      <div className="flex">
        {isRunning ? (
          <button
            className="bg-red-500 text-white flex flex-col items-center px-4 py-2 mx-2 rounded md:text-lg md:px-6 md:py-3"
            onClick={handleBeginPauseClick}
          >
            <FaRegCirclePause className="mb-1 md:text-2xl" />
            Pause
          </button>
        ) : (
          <button
            className="bg-green-500 text-white flex flex-col items-center px-4 py-2 mx-2 rounded md:text-lg md:px-6 md:py-3"
            onClick={handleBeginPauseClick}
          >
            <FaRegPlayCircle className="mb-1 md:text-2xl" /> Begin
          </button>
        )}
        <button
          className="bg-yellow-500 text-white flex flex-col items-center px-4 py-2 mx-2 rounded md:text-lg md:px-6 md:py-3"
          onClick={handleResetClick}
        >
          <FaRegStopCircle className="mb-1 md:text-2xl" />
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
