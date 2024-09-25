import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoIntro from './screens/intro.jsx';
import Home from './screens/home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoIntro/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
