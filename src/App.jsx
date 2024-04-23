import CountdownForm from './components/CountdownForm';
import CountdownDisplay from './components/CountdownDisplay';
import useCountdown from './hooks/useCountdown';
import VideoBackground from './components/VideoBackground';

/**
 * The main component of the application, which renders either the countdown form or the countdown display.
 * This component also handles the main state transitions between active countdown and form via a custom hook.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  const { countdown, handleFormSubmit, resetCountdown } = useCountdown();

  return (
    <div className='app-container'>
      <VideoBackground />
      <div className='container'>
        {countdown.isActive ? (
          <CountdownDisplay countdown={countdown} resetCountdown={resetCountdown} />
        ) : (
          <CountdownForm handleFormSubmit={handleFormSubmit} />
        )}
      </div>
    </div>
  );
}

export default App;
