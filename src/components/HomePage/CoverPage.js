import React from 'react'
import { useEffect } from 'react';
import Home from './Home';

function CoverPage() {
    useEffect(()=>{
        var add=[];
        var list={
          userId:1,
          username:"Author",
          title:"Title",
          description:"Description",
          upVote:4,
          downVote:0,
        }
        add.push(list)
        localStorage.setItem('add',JSON.stringify(add));
      
      
        //login
        var c=[];
        var list1={
          username:"Author",
          userpass:"hsad5es772@gh"
        }
        c.push(list1)
        localStorage.setItem('c',JSON.stringify(c));
      
      
        //current value
        var currentval={
          uname:"",
          upass:""
        }
        localStorage.setItem('currentValue',JSON.stringify(currentval));
        
    },[])
  return (
    <div>
      <Home/> 
      </div>
  )
}

export default CoverPage