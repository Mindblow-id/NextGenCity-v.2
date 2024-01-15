import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import ListBlog from './pages/ListBlog';
import Indicator from './pages/Indicator';

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
        </Routes > 
      </BrowserRouter>
    </>
  );
}

export default App;
