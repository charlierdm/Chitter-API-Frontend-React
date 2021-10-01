import { useEffect, useState } from "react";
import "./App.css";
import { Peep } from "./Peep";

export const DisplayPeeps = ({ session, chitter }) => {
  const [peeps, setPeeps] = useState([]);

  useEffect(() => {
    fetchPeepsPromise();
  }, [peeps]);

  const fetchPeepsPromise = () => {
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps`)
      .then((res) => res.json())
      .then((data) => setPeeps(data));
  };

  return (
    <ul className="peeps-list">
      {peeps
        ? peeps.map((peep) => (
            <Peep
              key={peep.id}
              userHandle={peep.user.handle}
              createdAt={peep.created_at}
              peepBody={peep.body}
              likes={peep.likes}
              session={session}
              peep={peep}
              chitter={chitter}
            />
          ))
        : "Loading..."}
    </ul>
  );
};
