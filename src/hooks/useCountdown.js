import { useState, useEffect } from 'react';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function useCountdown() {
  const [countdown, setCountdown] = useState({
    title: '',
    date: '',
    isActive: false,
    isComplete: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown.isActive && !countdown.isComplete) {
        const now = new Date();
        const distance = new Date(countdown.date) - now;
        if (distance < 0) {
          setCountdown((prev) => ({ ...prev, isComplete: true }));
          clearInterval(interval);
        } else {
          const days = Math.floor(distance / DAY);
          const hours = Math.floor((distance % DAY) / HOUR);
          const minutes = Math.floor((distance % HOUR) / MINUTE);
          const seconds = Math.floor((distance % MINUTE) / SECOND);
          setCountdown((prev) => ({ ...prev, days, hours, minutes, seconds }));
        }
      }
    }, SECOND);
    return () => clearInterval(interval);
  }, [countdown.isActive, countdown.isComplete, countdown.date]);

  const handleFormSubmit = (title, date) => {
    setCountdown({
      title,
      date,
      isActive: true,
      isComplete: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  const resetCountdown = () => {
    setCountdown({
      title: '',
      date: '',
      isActive: false,
      isComplete: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  return { countdown, handleFormSubmit, resetCountdown };
}

export default useCountdown;
