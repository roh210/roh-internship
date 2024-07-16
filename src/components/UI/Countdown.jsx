import React, { useEffect, useState } from "react";

export default function Countdown({ expiryDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(expiryDate)); //STORE HOURS,MINUTES AND SECONDS AS AN OBJECT

  useEffect(() => {
    let cancelAnimationId;

    function updateTimer() {
      setTimeLeft(getTimeLeft(expiryDate));
      cancelAnimationId = requestAnimationFrame(updateTimer);
    }
    updateTimer();

    return () => cancelAnimationFrame(cancelAnimationId);
  }, [expiryDate]);

  function getTimeLeft(expiryDate) {
    const millisLeft = new Date(expiryDate) - Date.now();
    
    if (millisLeft < 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
   
   
    const seconds = Math.floor((millisLeft / 1000) % 60);
    const minutes = Math.floor((millisLeft / (1000 * 60)) % 60);
    const hours = Math.floor((millisLeft / (1000 * 60 * 60)) % 24);
    
   

    return { hours, minutes, seconds };
  }

  return (
    <div className="de_countdown">
      {timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
        ? "EXPIRED"
        : `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
    </div>
  );
}
