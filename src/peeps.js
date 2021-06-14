import { useEffect, useState } from "react";
import "./App.css";

const Peeps = () => {
 const [peeps, setPeeps] = useState();

  useEffect(() => {
    fetchPeepsPromise();
  }, []);

  const fetchPeepsPromise = () => {
    const dateFormat = require("dateformat");
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((res) => res.json())
      .then((data) =>
        setPeeps(
          data.reverse().map((peep) => (
            <ul key={peep.id}>
              {peep.body}
              <br />
              posted by: {peep.user.handle}
              <br /> on: {dateFormat(peep.created_at)}
            </ul>
          ))
        )
      );
  };

  return (
    <div>{peeps}</div>
    )
};

export default Peeps;