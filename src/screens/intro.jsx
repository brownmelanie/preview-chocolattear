import videoSrc from "../assets/video-demo.mp4";
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoIntro = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight); // Estado para almacenar la altura del viewport
  const navigate = useNavigate();

  // Función para actualizar la fecha y hora
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

  // Hook para actualizar la fecha y hora cada minuto
  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  // Hook para actualizar la altura del viewport en caso de redimensionamiento
  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight); // Actualiza la altura del viewport
    };

    window.addEventListener('resize', updateHeight); // Escucha cambios de tamaño de ventana
    updateHeight(); // Llama la función para establecer la altura al cargar

    return () => window.removeEventListener('resize', updateHeight); // Limpieza del listener
  }, []);

  // Función para reproducir el video
  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  // Función para pausar el video
  const handleStop = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  // Redirección al hacer clic en CHOCOLATTEAR.MP4
  const handleRedirect = () => {
    navigate('/home');
  };

  return (
    <div style={{ height: `${viewportHeight}px` }} className="relative w-full"> {/* Se ajusta la altura del contenedor */}
      <video ref={videoRef} className="object-cover w-full h-full" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute bottom-5 left-5 grid grid-rows-4 grid-cols-2 border border-black bg-white w-52 h-24">
        <p className="col-span-2 flex items-center justify-center font-custom text-sm border-solid border-black border-b" onClick={handleRedirect}>
          CHOCOLATTEAR.MP4
        </p>
        <p className="col-span-2 flex items-center justify-center font-custom text-sm border-solid border-black border-b">
          Photography & Direction
        </p>
        
        <button onClick={handleStop} className={`font-custom border-solid border-black border-b border-e text-sm ${!isPlaying ? 'opacity-50' : ''}`} disabled={!isPlaying}>
          Stop
        </button>
        <div className="flex items-center justify-center font-custom text-sm border-solid border-black border-b">
          {date}
        </div>
        
        <button onClick={handlePlay} className={`font-custom border-solid border-black border-e text-sm ${isPlaying ? 'opacity-50' : ''}`} disabled={isPlaying}>
          Play
        </button>
        <div className="flex items-center justify-center font-custom text-sm">
          {time}
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
