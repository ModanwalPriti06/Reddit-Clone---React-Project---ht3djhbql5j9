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
//const [click,setClick]=useState(false)

useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    setData(json);
    setIsLoading(false);
  }
  fetchData();
},[]);

useEffect(()=>{
  if(JSON.parse(localStorage.getItem('currentValue')).uname==="")
  setDisable(true);
  else{
    setDisable(false)
  }
},[])

if (isLoading) {
  return (
    <div>
  <h1>Loading...</h1>
  </div>
  );
}
      function login(){
        navigate('/login');
      }
      function addPost(){
        if(JSON.parse(localStorage.getItem('currentValue')).uname!=="")
        {
          navigate('/addpost');   
        }
        else{
          navigate('/login');
        }  
    }

  return (
    <div> 
      <div className='bg-dark header'>   
      
     
      <img
        width={60}
        height={100}
        alt="171x180"
        className='my-3 rounded'
        src="https://user-images.githubusercontent.com/33750251/59486444-3699ab80-8e71-11e9-9f9a-836e431dcbfd.png"
      />
    <span style={{fontSize:"30px",fontWeight:"bold",color:"white"}}>Reddit</span>
        <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={login} style={{width:"8rem"}}>Login</button>
        <button variant="light" className="btn btn-outline-danger m-2 p-3 align-items-right" onClick={addPost} style={{width:"12rem"}}>Add Post</button>
        
      </div>

        <h1 className="text-center" style={{fontFamily:"fantasy"}}>Our All Post</h1>
        
       {data.map((post) => (
       <div style={{ width: '25rem' }} className="d-flex align-items-center mx-auto bg-dark m-3" border="dark">
        <div class="card-body">
            <h2 class="card-title" style={{color:"red"}}>{post.title}</h2>
            <h4 class="card-text" style={{color:"white"}}>{post.body}</h4>
            <button className='btn btn-success upBtn m-3' disabled={isdisable} >👍</button>
            <span style={{color:"white"}}>4</span>
            <button className='btn btn-warning downBtn m-3' disabled={isdisable}>👎</button>
            <span style={{color:"white"}}>0</span>  
        </div>
        
        </div>

     ))};
    <Footer/>
       
       </div>

  )
}

export default Home


// navigate('/login');  
//add:[{"userId":1,"username":"Priti","title":"fd sdfg","description":"sf dgsdrgf sd","upVote":0,"downVote":0},{"userId":2,"username":"Priti","title":"ki ljkihj","description":"yutrycer","upVote":0,"downVote":0},{"userId":3,"username":"Priti","title":"jbhjb","description":"uhgjhgb","upVote":0,"downVote":0},{"userId":4,"username":"Priti","title":"rtgbsdrtg","description":"db fgdrtg","upVote":0,"downVote":0},{"userId":5,"username":"gippy","title":"vtyuirt","description":"erv ert","upVote":0,"downVote":0}]
//c:[{"username":"Priti","userpass":"12345"}]