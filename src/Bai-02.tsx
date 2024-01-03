import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [seconds]);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timerId);
      alert("Time's up");
    }
  }, [seconds]);

  useEffect(() => {
    // Reset bộ đếm khi component được mount hoặc khi seconds giảm về 0
    setSeconds(10);
  }, []);

  return (
    <div>
      <h1>Timer: {seconds}s</h1>
    </div>
  );
};

export default Timer;
