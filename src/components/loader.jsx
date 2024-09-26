import loaderImage from '../assets/icon-logo.png';

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <img
        src={loaderImage}
        alt="Loading"
        className="animate-pulse w-24 h-auto"
      />
    </div>
  );
};

export default Loader;
