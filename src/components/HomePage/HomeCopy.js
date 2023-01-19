import React from 'react';
import { useState,useEffect } from 'react';

import {useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';


function HomeCopy () {
const navigate=useNavigate();
const[isdisable,setDisable]=useState(false);
useEffect(()=>{
  if(JSON.parse(localStorage.getItem('currentValue')).uname==="")
  setDisable(true);
  else{
    setDisable(false)
  }
},[])
 const parsed = JSON.parse(localStorage.getItem("add"))
 let newArray = Array.isArray(parsed) ? [...parsed] : [parsed]

      function login(){
        navigate('/login');
      }
      function addPost(){
      const currentValue = JSON.parse(localStorage.getItem("currentValue"));
      if(currentValue && currentValue.uname === "" ){
              navigate('/login');
      } else if(currentValue) {
            navigate('/addpost');
      } else {
        console.log("Error: No currentValue found in localStorage")
      }
    }

  return (
    <div> 
     
      <div className='bg-dark'>        
        <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={login} style={{width:"8rem"}}>Login</button>
        <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={addPost} style={{width:"12rem"}}>Add Post</button>
      </div>

        <h1 className="text-center" style={{fontFamily:"fantasy"}}>Our All Local Post</h1>
        
       {newArray.map((post) => (
       <div style={{ width: '25rem' }} className="d-flex align-items-center mx-auto bg-dark m-3" border="dark">
        <div class="card-body">
            <h2 class="card-title" style={{color:"red"}}>{post.title}</h2>
            <h4 class="card-text" style={{color:"white"}}>{post.description}</h4>
            <button className='btn btn-success upBtn m-3' disabled={isdisable} >👍</button>
            <span style={{color:"white"}}>{post.upVote}</span>
            <button className='btn btn-warning downBtn m-3' disabled={isdisable}>👎</button>
            <span style={{color:"white"}}>{post.downVote}</span>  
        </div>
        </div>

     ))};
     <Footer/>
       </div>

  )
}

export default HomeCopy