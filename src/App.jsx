import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import ListBlog from './pages/ListBlog/Index';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path='/'  element={<Home />}/>
          <Route path='/blog'  element={<ListBlog />}/>
          <Route path='/blog/:slug'  element={<Blog />}/>
          <Route path='/dashboard'  element={<Dashboard />}/>
        </Routes > 
      </BrowserRouter>
    </>
  );
}

export default App;
