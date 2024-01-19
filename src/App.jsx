import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import ListBlog from './pages/ListBlog';
import Indicator from './pages/Indicator';
import Ai from "./pages/Technology/AI"
import CloudComputiing from "./pages/Technology/CloudComputing"
import IoT from "./pages/Technology/IoT"
import WearableTechnology from "./pages/Technology/WearableTechnology"

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path='/'  element={<Home />}/>
          <Route path='/blog'  element={<ListBlog />}/>
          <Route path='/blog/:slug'  element={<Blog />}/>
          <Route path='/dashboard'  element={<Dashboard />}/>
          <Route path='/indicator'  element={<Indicator />}/>
          <Route path='/technology/ai'  element={<Ai />}/>
          <Route path='/technology/cloudcomputing'  element={<CloudComputiing />}/>
          <Route path='/technology/iot'  element={<IoT />}/>
          <Route path='/technology/wearabletechnology'  element={<WearableTechnology />}/>
        </Routes > 
      </BrowserRouter>
    </>
  );
}

export default App;
