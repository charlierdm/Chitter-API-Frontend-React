import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "./App.css";

const DisplayPeeps = (session) => {
  const [peeps, setPeeps] = useState();

  useEffect(() => {
    fetchPeepsPromise();
  }, [peeps]);

  const fetchPeepsPromise = () => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((res) => res.json())
      .then((data) => setPeeps(data));
  };

  const deletePeepData = async (url = "") => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Token token=${session.session.session_key}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const createLikeData = async (url = "") => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Token token=${session.session.session_key}`,
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
          {peep.id}<br />
          <button onClick={() => deletePeepData(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peep.id}`)}>delete</button><br/>
          <img id="like" width="50" onClick={() => 
          createLikeData(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peep.id}/likes/${session.session.user_id}`)
          }
          
          src={process.env.PUBLIC_URL + '/like.svg'} /> 
          
          </div>
        </ul>
      )): 'Loading...'}
    </div>
  );
};

export default DisplayPeeps;
