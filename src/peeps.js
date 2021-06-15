import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "./App.css";

const Peeps = () => {
  const [peeps, setPeeps] = useState();

  useEffect(() => {
    fetchPeepsPromise();
  }, []);

  const fetchPeepsPromise = () => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((res) => res.json())
      .then((data) => setPeeps(data));
  };

  return (
    <div>
      {peeps ? peeps.map((peep) => (
        <ul className="peeps-list" key={peep.id}>
          <div className="peep-body">{peep.body}</div>
          posted by: {peep.user.handle}
          <br /> on: {dateFormat(peep.created_at)}
          <div>{peep.likes.length} likes</div>
        </ul>
      )): 'Loading...'}
    </div>
  );
};

export default Peeps;
