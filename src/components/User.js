import React from "react";
import Detail from "./Detail";
import { useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);

  //var iden = toString(props.id);

  async function fetchData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    res.json().then((res) => {
      setUser(res);
      setLoaded(true);
    });
  }

  fetchData();

  return (
    <div>
      {loaded ? (
        <Detail
          name={user.name}
          email={user.email}
          username={user.username}
          phone={user.phone}
          website={user.website}
          street={user.address.street}
          suite={user.address.suite}
          city={user.address.city}
          zipcode={user.address.zipcode}
        />
      ) : null}
    </div>
  );
};

export default User;
