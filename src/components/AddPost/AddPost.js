import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Modal from "./Modal";

let PostArray = [];

function AddPost() {
  const navigate = useNavigate();
  const [isopen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(-99);

  let storedAddVal = JSON.parse(localStorage.getItem("add"));

  PostArray = Array.isArray(storedAddVal) ? [...storedAddVal] : [storedAddVal];

  function logout() {
    confirm("Now you are logout from this website..");
    localStorage.setItem(
      "currentValue",
      JSON.stringify({
        ...JSON.parse(localStorage?.getItem("currentValue")),
        uname: "",
      })
    );

    navigate("/");
  }
  let filteredData = PostArray.filter(
    (item) =>
      item?.username === JSON.parse(localStorage.getItem("currentValue"))?.uname
  );

  function home() {
    navigate("/");
  }
  useEffect(() => {
    if (selectedId !== -99) {
      console.log("hello");
      setSelectedId(-99);
      storedAddVal = JSON.parse(localStorage.getItem("add"));
      PostArray = Array.isArray(storedAddVal)
        ? [...storedAddVal]
        : [storedAddVal];
      filteredData = PostArray.filter(
        (item) =>
          item?.username ===
          JSON.parse(localStorage.getItem("currentValue"))?.uname
      );
    }
  }, [selectedId]);

  function upvote(e) {
    let post = JSON.parse(localStorage.getItem("add"));
    let btnId = e.target.id;

    for (let i = 0; i < post.length; i++) {
      //{(post[i].postId==btnId)?console.log(btnId):console.log("fail")}
      let comp = post[i].postId == btnId;
      if (comp) {
        post[i].upVote += 1;
        localStorage.setItem("add", JSON.stringify(post));
        console.log("success");
        console.log(btnId);
      }
    }
    setSelectedId(btnId);
    // alert("like..😍");
  }
  function downvote(e) {
    let post = JSON.parse(localStorage.getItem("add"));
    let btnId = e.target.id;

    for (let i = 0; i < post.length; i++) {
      //{(post[i].postId==btnId)?console.log(btnId):console.log("fail")}
      let comp = post[i].postId == btnId;
      if (comp) {
        post[i].downVote += 1;
        localStorage.setItem("add", JSON.stringify(post));
        console.log("success");
        console.log(btnId);
      }
    }
    // alert("Down Vote..😏");
    setSelectedId(btnId);
  }
  return (
    <>
      <div style={{ backgroundColor: "#D7E9B9", height: "94vh" }}>
        <div
          className="bg-dark"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              width={50}
              card
              height={50}
              alt="logo"
              className="my-3 rounded"
              style={{ marginLeft: "10px" }}
              src="https://user-images.githubusercontent.com/33750251/59486444-3699ab80-8e71-11e9-9f9a-836e431dcbfd.png"
            />
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "white",
                marginLeft: "5px",
              }}
            >
              Reddit
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              variant="light"
              className="btn btn-outline-danger align-items-right"
              onClick={home}
              style={{ width: "10rem" }}
            >
              Home{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </button>
            <button
              variant="light"
              className="btn btn-outline-danger align-items-right"
              onClick={() => {
                setIsOpen(true);
              }}
              style={{ width: "10rem" }}
            >
              Add Post{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <button
              variant="light"
              className="btn btn-outline-danger align-items-right"
              onClick={logout}
              style={{ width: "10rem" }}
            >
              Logout{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <h3 className="text-center m-2">Post Added by you</h3>

        {filteredData.map((e, index) => (
          <div
            style={{ width: "25rem" }}
            className="d-flex align-items-center mx-auto bg-dark m-3 card"
            border="dark"
            key={index + 1}
          >
            <div class="card-body">
              <h2 class="card-title" style={{ color: "white" }}>
                {e?.title}
              </h2>
              <h4 class="card-text" style={{ color: "white" }}>
                {e?.description}
              </h4>
              <button
                className="btn btn-warning upBtn m-3"
                id={e?.postId}
                onClick={upvote}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              </button>
              <span style={{ color: "white" }}>{e?.upVote}</span>
              <button
                className="btn btn-warning downBtn m-3"
                id={e?.postId}
                onClick={downvote}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                  />
                </svg>
              </button>
              <span style={{ color: "white" }}>{e?.downVote}</span>
            </div>
          </div>
        ))}
        <Modal open={isopen} onClose={() => setIsOpen(false)}></Modal>
      </div>
      <Footer />
    </>
  );
}

export default AddPost;
