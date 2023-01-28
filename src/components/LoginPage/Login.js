import React,{useState} from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';
import userLoginData from './userLoginData';

function Login() {
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  //=======================login=============================
  let loginInput = { userName: name, userPass: parseInt(password) }
  let isValidUSer = userLoginData.find((item)=> item.userName === loginInput.userName )
  
  //====================================================
 
  function print(){
    if(isValidUSer){
      const ispassValid = loginInput.userPass === isValidUSer.userPass; 
      
       if(ispassValid){
            alert("LOGGED IN SUCCESFULL");

          //current value store in local storage
          var currentval={
            uname:loginInput.userName,
            userId:isValidUSer.userId,
            upass:loginInput.userPass
          }
          localStorage.setItem('currentValue',JSON.stringify(currentval));
      //---------------------------------------------------------

          setName("");
          setPassword("");    
          navigate('/addpost') 
            
      } else {
           alert("PASSWORD IS INVALID")
      } 
  }
   else {
     alert("USER IS INVALID")
  }

}
function homepage(){
  navigate('/')
}
  return (
    
    <div style={{backgroundColor:"#D7E9B9"}}>
      
     <div className='bg-dark'>
     <img
        width={60}
        height={60}
        alt="logo"
        className='my-3 rounded'
        style={{marginLeft:"10px"}}
        src="https://user-images.githubusercontent.com/33750251/59486444-3699ab80-8e71-11e9-9f9a-836e431dcbfd.png"
      />
    <span style={{fontSize:"30px",fontWeight:"bold",color:"white"}}>Reddit</span>
            
     <button variant="light" className="btn btn-outline-danger m-3 p-3 align-items-right" onClick={homepage} style={{width:"8rem"}}>Home 🏠</button>
        </div>
        <h1 className="text-center m-2">Login Here</h1>
      <div body className="card mx-auto d-flex align-items-center mx-auto bg-dark m-3" style={{width:"28rem"}}>
      <div class="card-body">
      <form onSubmit={(e)=>{e.preventDefault()}}>

      <div className="mb-3 form-group" controlId="exampleForm.ControlInput1">
      <img
        width={300}
        height={200}
        alt="logo"
        style={{marginLeft:"10px",paddingLeft:"50px"}}
        src="https://www.shahucollegelatur.org.in/Activity%20portal/img/login.gif"
      /><br></br>
        <label className="text-white"></label>
        <input type="text" placeholder="Username" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
      </div>
      <div className="mb-3" controlId="exampleForm.ControlInput1">
        <label className="text-white"></label>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
      </div>

    </form>

    <button variant="light" className="btn btn-outline-primary mx-5" onClick={print} style={{width:"15rem"}}>Sign</button>
    </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Login