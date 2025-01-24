import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import userLoginData from "./userLoginData";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let loginInput = { userName: name, userPass: parseInt(password) };
  let isValidUSer = userLoginData.find(
    (item) => item.userName === loginInput.userName
  );

  function print() {
    if (isValidUSer) {
      const ispassValid = loginInput.userPass === isValidUSer.userPass;

      if (ispassValid) {
        alert("LOGGED IN SUCCESFULL");

        //current value store in local storage
        var currentval = {
          uname: loginInput.userName,
          userId: isValidUSer.userId,
          upass: loginInput.userPass,
        };
        localStorage.setItem("currentValue", JSON.stringify(currentval));
        setName("");
        setPassword("");
        navigate("/addpost");
      } else {
        alert("PASSWORD IS INVALID");
      }
    } else {
      alert("USER IS INVALID");
    }
  }
  function homepage() {
    navigate("/");
  }
  return (
    <>
      <div
        style={{ backgroundColor: "#D7E9B9", height: "100%", width: "100%" }}
      >
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
              className="btn btn-outline-danger"
              onClick={homepage}
              style={{ width: "7rem" }}
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
          </div>
        </div>
        <h1 className="text-center m-2">Login Here</h1>
        <div
          body
          className="card mx-auto d-flex align-items-center mx-auto bg-dark m-3"
          style={{ width: "28rem" }}
        >
          <div class="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div
                className="mb-3 form-group"
                controlId="exampleForm.ControlInput1"
              >
                <img
                  width={300}
                  height={200}
                  alt="logo"
                  style={{ marginLeft: "10px", paddingLeft: "50px" }}
                  src="https://www.shahucollegelatur.org.in/Activity%20portal/img/login.gif"
                />
                <br></br>
                <label className="text-white"></label>
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3" controlId="exampleForm.ControlInput1">
                <label className="text-white"></label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
            </form>

            <button
              variant="light"
              className="btn btn-outline-primary mx-5"
              onClick={print}
              style={{ width: "15rem" }}
            >
              Sign
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
