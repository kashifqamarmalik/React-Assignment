import React from "react";
import { useHistory } from "react-router-dom";
import User from "./User";

const Card = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push("/userdetails/" + props.id);
  }

  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.website}</p>
      <p>{props.email}</p>
      <button onClick={handleClick}>More Details</button>
    </div>
  );
};

export default Card;
