import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';
function Home () {

  let newArray=[];
const navigate=useNavigate();
const[isdisable,setDisable]=useState(false);
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
let parsed = JSON.parse(localStorage?.getItem("add"))
newArray = Array.isArray(parsed) ? [...parsed] : [parsed]
let localCurValGet=JSON.parse(localStorage?.getItem('currentValue'));
const [selectedId,setSelectedId]=useState(-99);

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
  <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" 
  style={{marginLeft:"40rem",marginTop:"15rem"}}/>
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
  /* useEffect(()=>{
    //if(selectedId!== -99){
    console.log("hello");
   /* setSelectedId(-99);
     parsed = JSON.parse(localStorage?.getItem("add"))
  newArray = Array.isArray(parsed) ? [...parsed] : [parsed]
    //filteredData = PostArray.filter(item => item?.username === JSON.parse(localStorage.getItem("currentValue"))?.uname);
    }
  },[selectedId])*/

    function upvote(e){
      let post = JSON.parse(localStorage?.getItem('add'));
      let btnId=e.target.id; 
     
      for(let i=0;i<post.length;i++){
          //{(post[i].postId==btnId)?console.log(btnId):console.log("fail")} 
          let comp=post[i].postId==btnId;
          if(comp){
            post[i].upVote+=1;
            localStorage.setItem("add", JSON.stringify(post));
           console.log("success");          
          } 
    }
    setSelectedId(btnId);
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
    setSelectedId(btnId);
    }
  return (
    <div style={{backgroundColor:"#D7E9B9"}}> 
      <div className='header bg-dark'>   
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
       <div style={{ width: '25rem'}} key={idx} className="d-flex align-items-center bg-dark mx-auto m-3 card" border="dark">
        <div class="card-body">
            <h2 class="card-title" style={{color:"red"}}>{post.title}</h2>
            <h4 class="card-text" style={{color:"white"}}>{post.description}</h4>
            <button className='btn btn-warning upBtn m-3' id={post.postId} disabled={isdisable} onClick={upvote}>💖</button>
            <span style={{color:"white"}}>{post.upVote}</span>
            <button className='btn btn-warning downBtn m-3' id={post.postId} disabled={isdisable} onClick={downvote}>💔</button>
            <span style={{color:"white"}}>{post.downVote}</span>  
        </div>
        </div>

     ))};   
    <Footer/>   
       </div>
  )
}

export default Home
