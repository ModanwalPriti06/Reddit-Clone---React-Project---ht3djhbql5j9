import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
//import {useNavigate} from 'react-router-dom';

const MODAL_STYLE={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#FF7B54',
    padding:'50px',
    zIndex:1000
}
const MODAL_OVERLAY={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.5)',
    zIndex:1000
}
function Modal({open,onClose}) {
    const [title,setTitle]=useState("");
    const [desc, setDesc] = useState("");

    if(!open) return null;

    function AddData(){
        var add=JSON.parse(localStorage?.getItem('add')||'[]');
        var list={
          userId:add.length+1,
          username:JSON.parse(localStorage.getItem("currentValue"))?.uname,
          title:title,
          description:desc,
          upVote:0,
          downVote:0,
      
        }
        add.push(list)
        localStorage.setItem('add',JSON.stringify(add));
         setTitle("");
         setDesc("");
         onClose(false)
        }

  return (
      <>
      <div style={MODAL_OVERLAY} className='card'/>
    <div style={MODAL_STYLE}>
    <div className="mb-3">
            <label style={{fontSize:"27px"}}>Title</label><br></br>
            <textarea as="textarea" rows={1} placeholder="Enter Title Here" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className="mb-3">
            <label style={{fontSize:"27px"}}>Decription</label><br></br>
            <textarea as="textarea" rows={3} placeholder="Enter Description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
        </div>
        <button className='btn btn-outline-danger' onClick={onClose} style={{marginRight:"20px"}}>Close</button>
        <button className='btn btn-outline-primary' onClick={AddData}>Add</button>
     
    </div>
    </>
  )
}

export default Modal