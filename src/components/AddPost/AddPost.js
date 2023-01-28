import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Modal from './Modal';

let PostArray=[];

function AddPost() {
    const navigate=useNavigate();
    const [isopen,setIsOpen]=useState(false);
  
    const storedAddVal = JSON.parse(localStorage.getItem("add"));

    PostArray = Array.isArray(storedAddVal) ? [...storedAddVal] : [storedAddVal]
      
    function logout(){
      confirm("Now you are logout from this website..")
     localStorage.setItem('currentValue', JSON.stringify({...JSON.parse(localStorage?.getItem('currentValue')),
      uname: ""}));
    
      navigate('/')
    }
    const filteredData = PostArray.filter(item => item?.username === JSON.parse(localStorage.getItem("currentValue"))?.uname);
    
    function home(){
      navigate('/')
  }
 
    function upvote(e){
      let post = JSON.parse(localStorage.getItem('add'));
      let btnId=e.target.id; 
     
      for(let i=0;i<post.length;i++){
          //{(post[i].postId==btnId)?console.log(btnId):console.log("fail")} 
          let comp=post[i].postId==btnId;
          if(comp){
            post[i].upVote+=1;
            localStorage.setItem("add", JSON.stringify(post));
           console.log("success");
            console.log(btnId);
          
          } 
    }
      alert("like..😍")
     
    }
    function downvote(e){
      let post = JSON.parse(localStorage.getItem('add'));
      let btnId=e.target.id; 
     
      for(let i=0;i<post.length;i++){
          //{(post[i].postId==btnId)?console.log(btnId):console.log("fail")} 
          let comp=post[i].postId==btnId;
          if(comp){
            post[i].downVote+=1;
            localStorage.setItem("add", JSON.stringify(post));
           console.log("success");
            console.log(btnId);
          
          } 
    }
      alert("Down Vote..😏")
      //setDisLikes(dlikes+1)
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
            <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={home} style={{width:"10rem"}}>Home 🏠</button>
            <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={()=>{setIsOpen(true)}} style={{width:"10rem"}}>Add Post 📝</button>
            <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={logout} style={{width:"10rem"}}>LogOut 📤</button>
        </div>
       
    
     {filteredData.map((e,index)=>(  
  
            <div style={{ width: '25rem' }} className="d-flex align-items-center mx-auto bg-dark m-3 card" border="dark" key={index+1}>
            <div class="card-body" >
                <h2 class="card-title" style={{color:"white"}}>{e?.title}</h2>
                <h4 class="card-text" style={{color:"white"}}>{e?.description}</h4>
                <button className='btn btn-warning upBtn m-3' id={e?.postId} onClick={upvote}>💖</button>
                <span style={{color:"white"}}>{e?.upVote}</span>
                <button className='btn btn-warning downBtn m-3' id={e?.postId} onClick={downvote}>💔</button>
                <span style={{color:"white"}}>{e?.downVote}</span>
               
            </div>
            </div>
        ))}
        <Modal open={isopen} onClose={()=>setIsOpen(false)}>
  
        </Modal>
        <Footer/>
    </div>
  )
}

export default AddPost
