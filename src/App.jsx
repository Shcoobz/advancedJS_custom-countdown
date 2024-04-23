import CountdownForm from './components/CountdownForm';
import CountdownDisplay from './components/CountdownDisplay';
import useCountdown from './hooks/useCountdown';
import VideoBackground from './components/VideoBackground';

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
