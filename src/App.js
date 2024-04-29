import './App.css';
import Blogs from './Frontend/Pages/Blogs/Blogs';
import Home from './Frontend/Pages/Home/Home';
import Login from './Frontend/Pages/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Blogs' element={<Blogs/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
