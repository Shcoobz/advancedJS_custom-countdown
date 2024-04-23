import PropTypes from 'prop-types';

/**
 * Displays the countdown timer or the completion message.
 * @param {Object} countdown - Object containing countdown details and state.
 * @param {Function} resetCountdown - Function to reset the countdown back to the initial form state.
 * @returns {JSX.Element} The active countdown display or the completion message component.
 */
function CountdownDisplay({ countdown, resetCountdown }) {
  return countdown.isComplete ? (
    <div className='complete'>
      <h1 className='complete-title'>{`${countdown.title} Complete`}</h1>
      <button onClick={resetCountdown}>New Countdown</button>
    </div>
  ) : (
    <div className='countdown'>
      <h1>{countdown.title}</h1>
      <ul>
        <li>
          <span>{countdown.days}</span>Days
        </li>
        <li>
          <span>{countdown.hours}</span>Hours
        </li>
        <li>
          <span>{countdown.minutes}</span>Minutes
        </li>
        <li>
          <span>{countdown.seconds}</span>Seconds
        </li>
      </ul>
      <button onClick={resetCountdown}>Reset</button>
    </div>
  );
}

CountdownDisplay.propTypes = {
  countdown: PropTypes.shape({
    title: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    isComplete: PropTypes.bool.isRequired,
  }).isRequired,
  resetCountdown: PropTypes.func.isRequired,
};

export default CountdownDisplay;
