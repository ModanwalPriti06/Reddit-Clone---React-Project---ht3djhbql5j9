import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import AddPost from './AddPost/AddPost';
import Home from './HomePage/Home';
//import HomeCopy from './HomePage/HomeCopy';

import Login from './LoginPage/Login';
function App() {
  return ( 
    <Router>
      <Routes>
        
      <Route path='/' element={<Home/>}></Route>

      <Route path='/login' element={<Login/>}></Route>
      <Route path='/addpost' element={<AddPost/>}></Route>
      </Routes>
    </Router>

   
  );
}

export default App;

