import './App.css';
import BlogsDisplay from './Frontend/Pages/Blogs/BlogsDisplay.jsx';
import Blog from './Frontend/Pages/Blogs/Blog.jsx';
import Home from './Frontend/Pages/Home/Home.jsx';
import Login from './Frontend/Pages/Login/Login.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Blogs' element={<BlogsDisplay/>}></Route>
    <Route path='/Blog' element={<Blog/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
