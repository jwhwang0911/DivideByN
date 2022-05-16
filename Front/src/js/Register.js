import { React, useState } from "react";
import { Link } from "react-router-dom";

// const Register = () => {
//   let match = false;

//   const onClickRegister = (event) => {
//     const id = document.querySelector("#id");
//     const password = document.querySelector("#password");
//     const passwordDoubleCheck = document.querySelector("#passwordDoubleCheck");
//     console.log(id);
//     console.log(password);
//     console.log(passwordDoubleCheck);
//     if (password.value === passwordDoubleCheck.value) {
//       match = true;
//       alert("Succesfully Registered");
//       localStorage.setItem(id.value, JSON.stringify(password.value));
//     } else {
//       event.preventDefault();
//       alert("Passwords do not match");
//     }
//   };

//   return (
//     <div>
//       <h1 id="headers">Please Register</h1>
//       <br />
//       <input id="id" placeholder="ID" />
//       <br />
//       <input id="password" placeholder="Password" />
//       <br />
//       <input id="passwordDoubleCheck" placeholder="PasswordDoublecheck" />
//       <br />
//       <Link to="/login">
//         <button
//           onClick={onClickRegister}
//           style={{ margin: "0 auto", display: "block" }}
//         >
//           Register
//         </button>
//       </Link>
//     </div>
//   );
// };

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    if (localStorage.getItem(id) !== null) {
      event.preventDefault();
      alert("Given ID already exists");
    } else if (password !== confirmPassword) {
      event.preventDefault();
      alert("Passwords do not match");
    } else if (password.length < 5) {
      event.preventDefault();
      alert("Password is too short");
    } else {
      alert("Succesfully Registered");
      localStorage.setItem(id, JSON.stringify(password));
    }
  };

  return (
    <div>
      <h1
        style={{ margin: "10px auto", display: "block", textAlign: "center" }}
      >
        Register
      </h1>
      <form>
        <div>
          <input placeholder="id" value={id} onChange={onIdHandler} />
        </div>
        <div>
          <input
            placeholder="password"
            value={password}
            onChange={onPasswordHandler}
          />
        </div>
        <div>
          <input
            placeholder="confirm password"
            value={confirmPassword}
            onChange={onConfirmPasswordHandler}
          />
        </div>
        <Link to="/login">
          <div>
            <button onClick={onSubmit}>Submit</button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Register;
