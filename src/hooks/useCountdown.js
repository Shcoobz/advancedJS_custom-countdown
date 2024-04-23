import { useState, useEffect } from 'react';

/**
 * Constant values for time calculations in milliseconds.
 * @const {number} SECOND - Represents one second in milliseconds, used for countdown calculations.
 */
const SECOND = 1000;

/**
 * Constant values for time calculations in milliseconds.
 * @const {number} MINUTE - Represents one minute in milliseconds, used for countdown calculations.
 */
const MINUTE = 60 * SECOND;

/**
 * Constant values for time calculations in milliseconds.
 * @const {number} HOUR - Represents one hour in milliseconds, used for countdown calculations.
 */
const HOUR = 60 * MINUTE;

/**
 * Constant values for time calculations in milliseconds.
 * @const {number} DAY - Represents one day in milliseconds, used for countdown calculations.
 */
const DAY = 24 * HOUR;

/**
 * Custom React hook that manages the state and logic for a countdown timer.
 * Manages active state, completion, and interval setup for updating the countdown in real-time.
 * @returns {Object} Contains the countdown state, functions to handle form submission, and reset functionality.
 */
function useCountdown() {
  const [countdown, setCountdown] = useState({
    title: '', // The title of the countdown.
    date: '', // The end date for the countdown.
    isActive: false, // Indicates if the countdown is currently active.
    isComplete: false, // Indicates if the countdown has completed.
    days: 0, // The number of full days remaining in the countdown.
    hours: 0, // The number of full hours remaining after days.
    minutes: 0, // The number of full minutes remaining after hours.
    seconds: 0, // The number of seconds remaining after minutes.
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

  /**
   * Processes countdown data from the form and initializes the countdown timer state.
   * @param {string} title - The title of the countdown.
   * @param {string} date - The target date of the countdown.
   */
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

  /**
   * Resets all values in the countdown state to initial values, effectively stopping the countdown and showing the form again.
   */
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
