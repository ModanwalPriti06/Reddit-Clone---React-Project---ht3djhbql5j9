import React,{useState} from 'react'

import {useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';

//let currentValue=[];
function Login() {
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  
  let loginArray=[];
  function print(){
    //push data in localStorage
        var c=JSON.parse(localStorage.getItem('c')||'[]');
        var list={
          username:name,
          userpass:password
        }
        c.push(list)
        localStorage.setItem('c',JSON.stringify(c));
//current value store in local storage
        var currentval={
          uname:name,
          upass:password
        }
        localStorage.setItem('currentValue',JSON.stringify(currentval));
    //---------------------------------------------------------

    setName("");
    setPassword("");
    // get login data from local storage and push into new Array
    loginArray = [...JSON.parse(localStorage.getItem("c"))];
    console.log(loginArray); 
    
    navigate('/addpost')
  }
function homepage(){
  navigate('/home')
}
  return (
    <div>
      
     <div className='bg-dark'>
            
     <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={homepage} style={{width:"8rem"}}>Home</button>
        </div>
        <h1 className="text-center m-4">Login Here</h1>
      <div body className="card mx-auto d-flex align-items-center mx-auto bg-dark m-5" style={{width:"28rem"}}>
      <div class="card-body">
      <form onSubmit={(e)=>{e.preventDefault()}}>

      <div className="mb-3" controlId="exampleForm.ControlInput1">
        <label className="text-white">Username</label>
        <input type="text" placeholder="Enter User name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </div>

      <div className="mb-3" controlId="exampleForm.ControlInput1">
        <label className="text-white">Password</label>
        <input type="password" placeholder="Enter Strong Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
    
    </form>

    <button variant="light" className="btn btn-outline-primary" onClick={print} style={{width:"5rem"}}>Sign</button>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login