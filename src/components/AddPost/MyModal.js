import React,{useState} from 'react';

import {useNavigate} from 'react-router-dom';


function MyModal({SetShow,show}) {
  const navigate=useNavigate();
  const [title,setTitle]=useState("");
  const [desc, setDesc] = useState("");


  function AddData(){
  var add=JSON.parse(localStorage.getItem('add')||'[]');
  var list={
    userId:add.length+1,
    username:JSON.parse(localStorage.getItem("currentValue")).uname,
    title:title,
    description:desc,
    upVote:0,
    downVote:0,

  }
  add.push(list)
  localStorage.setItem('add',JSON.stringify(add));
   setTitle("");
   setDesc("");
   SetShow(false) //close modal
   navigate('/addpost')
  }

  return (
    <>
      <modal show={show}
        onHide={() => SetShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">

        <header closeButton>
          <title>Add New Post</title>
        </header>

        <body>
        <form onSubmit={(e)=>{e.preventDefault()}}>

        <div className="mb-3">
            <label>Title</label>
            <input as="textarea" rows={1}  value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>

          <div className="mb-3">
            <label>Description</label>
            <input as="textarea" rows={3} value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
        </div>

        <button style={{width:"5rem"}} onClick={AddData}>Save</button>

          </form>
        </body>
      </modal>
    </>
  );
}

export default MyModal

//{"userId":0,"username":"Author","title":"title","description":"Decription","upVote":0,"downVote":0}