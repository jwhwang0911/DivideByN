import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  let match = false;

  const onClickRegister = () => {
    const id = document.querySelector("#id");
    const password = document.querySelector("#password");
    const passwordDoubleCheck = document.querySelector("#passwordDoubleCheck");
    console.log(id);
    console.log(password);
    console.log(passwordDoubleCheck);
    if (password.value === passwordDoubleCheck.value) {
      match = true;
      alert("Succesfully Registered");
      localStorage.setItem(id.value, JSON.stringify(password.value));
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div>
      <h1 id="headers">Please Register</h1>
      <br />
      <input id="id" placeholder="ID" />
      <br />
      <input id="password" placeholder="Password" />
      <br />
      <input id="passwordDoubleCheck" placeholder="PasswordDoublecheck" />
      <br />
      <button
        onClick={onClickRegister}
        style={{ margin: "0 auto", display: "block" }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
