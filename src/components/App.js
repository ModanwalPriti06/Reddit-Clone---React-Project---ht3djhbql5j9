import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import AddPost from './AddPost/AddPost';
import MyModal from './AddPost/MyModal';
import Home from './HomePage/Home';
import HomeCopy from './HomePage/HomeCopy';
import CoverPage from './HomePage/CoverPage';
import Login from './LoginPage/Login';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<CoverPage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/allpost' element={<HomeCopy/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/addpost' element={<AddPost/>}></Route>
      <Route path='/addpost/modal' element={<MyModal/>}></Route>
      </Routes>
    </Router>
  
   
  );
}

export default App;

