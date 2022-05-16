import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { users } from "./Var";
import personSrc from "../img/person.png";

var eventList = [
  {
    index: 1,
    place: "newEvent",
    name: "me",
    price: "101010",
    date: "2022/02/28",
    participants: ["sungjun", "haeun", "jangwon", "yooseung"],
  },
  {
    index: 2,
    place: "place",
    name: "name",
    price: "price",
    date: "date",
    participants: [
      "sungjun",
      "haeun",
      "jangwon",
      "yooseung",
      "doyoon",
      "heejeong",
    ],
  },
];

function CreateEvent() {
  var payer = [];
  var participants = [...users];
  const user = useLocation().state.user;
  const travel = useLocation().state.travel;
  // const [place, setPlace] = useState();
  // const [price, setPrice] = useState();
  // const [date, setDate] = useState();

  // const onChangePlace = (e) => {
  //   setPlace(e.target.value);
  //   e.preventDefault();
  // };

  // const onChangePrice = (e) => {
  //   setPrice(e.target.value);
  //   e.preventDefault();
  // };

  // const onChangeDate = (e) => {
  //   setDate(e.target.value);
  //   e.preventDefault();
  // };

  function CreateUser({ user }) {
    const [participate, setParticipate] = useState("participate");
    const [nameColor, setNameColor] = useState("green");
    const onClickIcon = () => {
      if (participate === "participate") {
        setParticipate("no");
        setNameColor("black");
        participants.pop(user.name);
      } else if (participate === "no") {
        setParticipate("payer");
        setNameColor("blue");
        participants.push(user.name);
        payer.push(user.name);
      } else if (participate === "payer") {
        setParticipate("participate");
        setNameColor("green");
        payer.pop(user.name);
      }
      console.log(payer);
      console.log(participants);
    };

    return (
      <div className="user" onClick={onClickIcon}>
        <img className="icon" src={personSrc} alt="profile" />
        <br />
        <span style={{ color: nameColor }}>{user.name}</span>
      </div>
    );
  }

  const onClickSubmit = (e) => {
    if (payer.length === 1) {
      const newEvent = {
        index: eventList.length + 1,
        place: document.querySelector("#place").value,
        name: payer[0],
        price: document.querySelector("#price").value,
        date: document.querySelector("#date").value,
        participants: participants,
      };

      console.log(newEvent);
      eventList.push(newEvent);
    } else if (payer.length > 1) {
      alert("결제자는 한 명이어야 합니다\nError: Too Many Payers");
      e.preventDefault();
    } else if (payer.length === 0) {
      alert("결제자는 한 명이어야 합니다\nError: No Payer");
      e.preventDefault();
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="장소"
          type="text"
          id="place"
          name="place"
          size="5"
        />
        <input
          placeholder="가격"
          type="text"
          id="price"
          name="price"
          size="5"
        />
        <input placeholder="날짜" type="date" id="date" name="date" size="5" />
      </div>
      <div>
        {users.map((user) => (
          <CreateUser user={user} key={user.index} />
        ))}
      </div>
      <Link
        to={`/${user}/${travel}`}
        state={{ user: user, travel: travel, eventList: eventList }}
        onClick={onClickSubmit}
      >
        <button>이벤트 추가</button>
      </Link>
    </div>
  );
}

export { CreateEvent, eventList };
