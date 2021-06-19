import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "./App.css";

const DisplayPeeps = () => {
  const [peeps, setPeeps] = useState();

  useEffect(() => {
    fetchPeepsPromise();
  }, []);

  const fetchPeepsPromise = () => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((res) => res.json())
      .then((data) => setPeeps(data));
  };

  const deletePeepData = async (url = "") => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const createLikeData = async (url = "") => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const deleteLikeData = async (url = "") => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  return (
    <div className="peeps">
      {peeps ? peeps.map((peep) => (
        <ul className="peeps-list" key={peep.id}>
          <div className="peep-body">{peep.body}</div>
          <div className="peep-details">
          posted by: {peep.user.handle}
          <br /> on: {dateFormat(peep.created_at)}
          <div>{peep.likes.length} likes</div>
          {peep.id}
          </div>
        </ul>
      )): 'Loading...'}
    </div>
  );
};

export default DisplayPeeps;
