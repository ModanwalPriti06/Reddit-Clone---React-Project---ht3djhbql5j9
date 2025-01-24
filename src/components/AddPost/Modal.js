import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const TITLE = {
  height: "50px",
  width: "500px",
//   border: "none",
//   backgroundColor: "white"
};

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "white ",
  padding: "100px",
  zIndex: 1000,
};
const MODAL_OVERLAY = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.5)",
  zIndex: 1000,
};
function Modal({ open, onClose }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  if (!open) return null;

  function AddData() {
    var add = JSON.parse(localStorage?.getItem("add") || "[]");
    const storedCurVal = JSON.parse(localStorage.getItem("currentValue"));
    const storedAddVal = JSON.parse(localStorage.getItem("add"));

    var list = {
      postId: add.length + 1,
      userId: storedCurVal?.userId,
      username: storedCurVal?.uname,
      title: title,
      description: desc,
      upVote: 0,
      downVote: 0,
    };
    add.unshift(list);
    localStorage.setItem("add", JSON.stringify(add));
    setTitle("");
    setDesc("");
    onClose(false);
  }

  return (
    <>
      <div style={MODAL_OVERLAY} className="card" />
      <div style={MODAL_STYLE}>
        <div className="mb-3">
          {/* <label style={{ fontSize: "27px" }}>Title</label> */}
          <br></br>
          <textarea
            as="textarea"
            style={TITLE}
            rows={1}
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          {/* <label style={{ fontSize: "27px" }}>Decription</label> */}
          <br></br>
          <textarea
            as="textarea"
            style={TITLE}
            rows={3}
            placeholder="Enter Description..."
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div style={{display:'flex',gap:'5px', justifyContent:'right' }}>
        <button className="btn btn-outline-primary" onClick={AddData}>
          Add
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={onClose}
        >
          Close
        </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
