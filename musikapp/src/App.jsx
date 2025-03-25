import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import About from './Pages/About';
import Playlist from './Pages/Playlist'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/About" element={<About />} />
        <Route path="/Playlist" element={<Playlist/>} />
      </Routes>
    </BrowserRouter>
  );
}