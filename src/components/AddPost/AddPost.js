import React, { useState } from 'react'
//import { useCallback } from 'react';
import MyModal from './MyModal';
import {useNavigate} from 'react-router-dom';

import Footer from '../Footer/Footer';

let PostArray=[];

function AddPost() {
    const navigate=useNavigate();
    const [show, setShow] = useState(false);
    const [likes,setLikes]=useState(0)
    const [dlikes,setDisLikes]=useState(0)

    const parsed = JSON.parse(localStorage.getItem("add"));
    PostArray = Array.isArray(parsed) ? [...parsed] : [parsed]
      
    function logout(){
     localStorage.setItem('currentValue', JSON.stringify({...JSON.parse(localStorage.getItem('currentValue')),
      uname: ""}));
      navigate('/home')
    }
    const filteredData = PostArray.filter(item => item.username === JSON.parse(localStorage.getItem("currentValue")).uname);
    
    function home(){
      navigate('/home')
  }
  function allpost(){
    navigate('/allpost')
  }

    function upvote(){
      alert("like..😍")
      setLikes(likes+1)
    }
    function downvote(){
      alert("Down Vote..😏")
      setDisLikes(dlikes+1)

    }

  return (
    <div>
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
            <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={home} style={{width:"8rem"}}>Home</button>
            <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={() => setShow(true)} style={{width:"12rem"}}>Add Post</button>
            <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={allpost} style={{width:"12rem"}}>All Local Post</button>
            <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={logout} style={{width:"8rem"}}>LogOut</button>
        </div>
       
    
     {filteredData.map((e,index)=>(  
        
            <div style={{ width: '25rem' }} className="d-flex align-items-center mx-auto bg-dark m-3 card" border="dark" key={index.userId}>
            <div class="card-body" >
                <h2 class="card-title" style={{color:"white"}}>{e.title}</h2>
                <h4 class="card-text" style={{color:"white"}}>{e.description}</h4>
                <button className='btn btn-success upBtn m-3' onClick={upvote}>👍</button>
                <span style={{color:"white"}}>{likes}</span>
                <button className='btn btn-warning downBtn m-3' onClick={downvote}>👎</button>
                <span style={{color:"white"}}>{dlikes}</span>
               
            </div>
            </div>
        ))}

        {show && <MyModal SetShow={setShow} show={show}/>}
        <Footer/>
    </div>
  )
}

export default AddPost
