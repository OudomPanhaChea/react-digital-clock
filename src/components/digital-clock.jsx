import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const second = time.getSeconds();
    const meridien = hours >= 12 ? "PM":"AM";
    
    hours = hours % 12 || 12;

    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(second)} ${meridien}`;
  }

  function padZero(number) {
    return (number < 10 ? '0' : '') + number;
  }

  return(
    <div className="w-full min-h-[100vh] flex justify-center items-center px-8 bg-black bg-opacity-10">
      <div className="backdrop-blur-md container m-auto w-full rounded-lg py-8 text-center">
        <span className="text-white text-6xl md:text-8xl xl:text-9xl drop-shadow-lg">{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;