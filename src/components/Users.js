import React, { useState, useEffect } from "react";
import Card from "./Card";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    res.json().then((res) => {
      setUsers(res);
      setLoaded(true);
    });
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      {loaded ? (
        users.map((item) => (
          <Card
            id={item.id}
            name={item.name}
            website={item.website}
            email={item.email}
          />
        ))
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
};

export default Users;
