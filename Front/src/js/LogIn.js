import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// const LogIn = () => {
//   const onClick = (event) => {
//     const id = document.querySelector("#id").value;
//     const password = document.querySelector("#password").value;
//     if (localStorage.getItem(id) === null) {
//       event.preventDefault();
//       alert("Given ID does not exist");
//     } else if (JSON.parse(localStorage.getItem(id)) === password) {
//       localStorage.setItem("id", JSON.stringify(id));
//     } else {
//       event.preventDefault();
//       alert("Incorrect Password");
//     }
//   };
//   return (
//     <div>
//       <h1 id="headers">Please Log In</h1>
//       <input id="id" placeholder="ID" />
//       <br />
//       <input id="password" placeholder="Password" />
//       <br />
//       <Link to={`/selectTravel`}>
//         <button id="logInButton" onClick={onClick}>
//           Log In
//         </button>
//       </Link>
//       <Link to="/register">
//         <button id="logInButton">Register</button>
//       </Link>
//     </div>
//   );
// };

const LogIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    if (localStorage.getItem(id) === null) {
      event.preventDefault();
      alert("Given ID does not exist");
    } else if (JSON.parse(localStorage.getItem(id)) !== password) {
      event.preventDefault();
      alert("Incorrect Password");
    } else {
      console.log(localStorage.getItem("id"));
      localStorage.setItem("id", JSON.stringify(id));
    }
  };

  return (
    <div>
      <h1
        style={{ margin: "10px auto", display: "block", textAlign: "center" }}
      >
        Log In
      </h1>
      <form>
        <div>
          <input name="id" placeholder="id" value={id} onChange={onIdHandler} />
        </div>
        <div>
          <input
            name="pw"
            placeholder="password"
            value={password}
            onChange={onPasswordHandler}
          />
        </div>
        <Link to={`/${id}/selectTravel`} state={{ id: id }}>
          <div>
            <button onClick={onSubmit}>Log In</button>
          </div>
        </Link>
        <Link to="/register">
          <div>
            <button>Register</button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
