import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoIntro from './screens/intro.jsx';

import Home from './screens/home.jsx';
import Photos from "./screens/photos.jsx";
import Direction from "./screens/direction.jsx";
import About from "./screens/about-me.jsx";
import Merch from "./screens/merch.jsx"

import Login from './screens/loginFirebase.jsx';
import ImageUpload from './screens/formFirebase.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoIntro/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/direction" element={<Direction />} />
        <Route path="/about" element={<About />} />
        <Route path="/merch" element={<Merch />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/3GzUx6zy' element={<ImageUpload/>}/>
      </Routes>
    </Router>
  );
};

export default App;
