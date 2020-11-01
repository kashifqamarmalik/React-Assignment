import React from "react";
import { useHistory } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div>
      <p>
        <b>Name:</b> {props.name}
      </p>
      <p>
        <b>E-Mail:</b> {props.email}
      </p>
      <p>
        <b>Username:</b> {props.username}
      </p>
      <p>
        <b>Phone:</b> {props.phone}
      </p>
      <p>
        <b>Website: </b>
        {props.website}
      </p>

      <h3>Address: </h3>

      <ul>
        <li>
          <b>Street:</b> {props.street}
        </li>
        <li>
          <b>Suite:</b> {props.suite}
        </li>
        <li>
          <b>City:</b> {props.city}
        </li>
        <li>
          <b>Zipcode:</b> {props.zipcode}
        </li>
      </ul>

      <button onClick={handleClick}>Back</button>
    </div>
  );
};

export default Detail;
