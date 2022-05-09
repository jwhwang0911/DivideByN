import React from "react";
import { useParams } from "react-router-dom";
import { eventList } from "./Var";

const EventDescription = () => {
  const { place } = useParams();
  const description = eventList.filter((event) => event.place === place)[0];
  return (
    <div>
      <h2 id="headers">place: {description.place}</h2>
      <h2 id="headers">name: {description.name}</h2>
      <h2 id="headers">price: {description.price}</h2>
      <h2 id="headers">date: {description.date}</h2>
      <div style={{ display: "flex" }}>
        {description.participants.map((participant) => (
          <h3 style={{ margin: "0 auto" }}> {participant} </h3>
        ))}
      </div>
    </div>
  );
};

export default EventDescription;
