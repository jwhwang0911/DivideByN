import React from "react";
import { Link } from "react-router-dom";

const myTravel = ["a", "b", "c"];

const SelectTravel = () => {
  const user = JSON.parse(localStorage.getItem("id"));

  return (
    <div>
      <h1
        style={{ display: "block", margin: "10px auto", textAlign: "center" }}
      >
        My Travel List
      </h1>
      {myTravel.map((travel, id) => (
        <Link key={id} to={`/${user}/${travel}`}>
          <h3 style={{ display: "block", margin: "auto", textAlign: "center" }}>
            {travel}
          </h3>
          <br />
        </Link>
      ))}
      <input />
      <button style={{ display: "block", margin: "20px auto" }}>
        Create Travel
      </button>
    </div>
  );
};

export default SelectTravel;
