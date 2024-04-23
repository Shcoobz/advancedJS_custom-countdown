import videoFile from '../vid/time.mp4';

/**
 * Displays a full-screen looping video as a background to the application.
 * @returns {JSX.Element} The video background component.
 */
const VideoBackground = () => {
  return (
    <div className='video-background'>
      <video className='video-background' loop muted autoPlay>
        <source src={videoFile} type='video/mp4' />
      </video>
      <div className='video-overlay'></div>
    </div>
  );
};

export default VideoBackground;
