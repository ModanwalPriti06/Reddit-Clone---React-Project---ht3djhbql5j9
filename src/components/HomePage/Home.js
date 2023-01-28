import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';
function Home () {

const navigate=useNavigate();
const[isdisable,setDisable]=useState(false);
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const parsed = JSON.parse(localStorage?.getItem("add"))
 let newArray = Array.isArray(parsed) ? [...parsed] : [parsed]
let localCurValGet=JSON.parse(localStorage.getItem('currentValue'));

useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    let newArray=[...json.slice(0,3)];
    newArray=newArray.map((item)=>{
      
      return{
        postId:item.id,
        userId:1,
        username:"Priti",
        title:item.title,
        description:item.body,
        upVote:0,
        downVote:0
      }
    })
    setData(newArray);
    var add=JSON.parse(localStorage?.getItem('add')||'[]');
    newArray?.unshift(...add);
   // console.log(newArray);
    setIsLoading(false);
    
  }
  fetchData();
},[]);

useEffect(()=>{
  
  if(localCurValGet?.uname==="")

  setDisable(true);
  else{
    setDisable(false)
  }
},[])

if (isLoading) {
  return (
    <div>
  <h2 style={{color:"grey"}}>Loading...</h2>
  </div>
  );
}
      function login(){
        navigate('/login');
      }
      function addPost(){
        if(localCurValGet?.uname!=="")
        {
          navigate('/addpost');   
        }
        else{
          alert("Sorry You are not login")
          navigate('/login');
        }  
    }

  return (
    <div style={{backgroundImage:"linear-gradient(to right,white,tomato)"}}> 
      <div className='bg-dark header'>   
      <img
        width={60}card
        height={60}
        alt="logo"
        className='my-3 rounded'
        style={{marginLeft:"10px"}}
        src="https://user-images.githubusercontent.com/33750251/59486444-3699ab80-8e71-11e9-9f9a-836e431dcbfd.png"
      />
        <span style={{fontSize:"30px",fontWeight:"bold",color:"white"}}>Reddit</span>
        <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right login-btn"
         onClick={login} style={{width:"8rem"}}>Login 👤</button>
        <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" 
        onClick={addPost} style={{width:"12rem"}}>Add Post 📝</button>   
      </div>
        <h1 className="text-center" style={{fontFamily:"fantasy"}}>Our All Post</h1>
      
     

       {data.map((post,idx) => (
       <div style={{ width: '25rem'}} key={idx} className="d-flex align-items-center mx-auto bg-dark m-3 card" border="dark">
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

export default Home
