import React from "react";
import "./App.css";
import Home from "./js/Home";
import Profile from "./js/Profile";
import LogIn from "./js/LogIn";
import Register from "./js/Register";
import Calendar from "./js/Calendar";
import { CreateEvent } from "./js/CreateEvent";
import CreateUser from "./js/CreateUser";
import EventDescription from "./js/EventDescription";
import { Routes, Route } from "react-router-dom";
import SelectTravel from "./js/SelectTravel";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/:username/profile" element={<Profile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route
          path="/:username/:travel/createEvent"
          element={<CreateEvent />}
        />
        <Route path="/:username/:travel/createUser" element={<CreateUser />} />
        <Route path="/event/:place" element={<EventDescription />} />
        <Route path="/selectTravel" element={<SelectTravel />} />
        <Route path="/:username/:travel" element={<Home />} />
      </Routes>
    </div>
  );
};

export { App };
