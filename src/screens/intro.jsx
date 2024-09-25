import videoSrc from "../assets/video-demo.mp4"
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoIntro = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const updateDateTime = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    setTime(formattedTime);
    setDate(formattedDate);
  };

  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleRedirect = () => {
    navigate('/home');
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="object-cover h-screen"
        autoPlay
        loop
        muted
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute bottom-5 left-5 grid grid-rows-4 grid-cols-2 border border-black bg-white w-52 h-24">
        
        <p className="col-span-2 flex items-center justify-center font-custom text-sm border-solid border-black border-b" onClick={handleRedirect} >CHOCOLATTEAR.MP4</p>

        
        <p className="col-span-2 flex items-center justify-center font-custom text-sm border-solid border-black border-b">Photography & Direction</p>

        
        <button
          onClick={handleStop}
          className={`font-custom border-solid border-black border-b border-e text-sm ${!isPlaying ? 'opacity-50' : ''}`}
          disabled={!isPlaying}
        >
          Stop
        </button>
        <div className="flex items-center justify-center font-custom text-sm border-solid border-black border-b">{date}</div>

        
        <button
          onClick={handlePlay}
          className={`font-custom border-solid border-black border-e text-sm ${isPlaying ? 'opacity-50' : ''}`}
          disabled={isPlaying}
        >
          Play
        </button>
        <div className="flex items-center justify-center font-custom text-sm">{time}</div>
      </div>
    </div>
  );
};

export default VideoIntro;
