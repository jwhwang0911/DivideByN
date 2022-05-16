import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const myTravel = ["a", "b", "c"];

const SelectTravel = () => {
  const user = useLocation().state.id;
  const [newTravel, setNewTravel] = useState("");

  const onNewTravel = (event) => {
    setNewTravel(event.currentTarget.value);
  };

  return (
    <div>
      <h1
        style={{ display: "block", margin: "10px auto", textAlign: "center" }}
      >
        My Travel List
      </h1>
      {myTravel.map((travel, id) => (
        <Link
          key={id}
          to={`/${user}/${travel}`}
          state={{ user: user, travel: travel }}
        >
          <h3 style={{ display: "block", margin: "auto", textAlign: "center" }}>
            {travel}
          </h3>
          <br />
        </Link>
      ))}
      <input onChange={onNewTravel} />
      <Link
        to={`/${user}/${newTravel}`}
        state={{ user: user, travel: newTravel }}
      >
        <button style={{ display: "block", margin: "20px auto" }}>
          Create Travel
        </button>
      </Link>
    </div>
  );
};

export default SelectTravel;
