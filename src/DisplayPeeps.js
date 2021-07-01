import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "./App.css";

const DisplayPeeps = (session) => {
  const [peeps, setPeeps] = useState();

  const chitter = "https://chitter-backend-api-v2.herokuapp.com"

  useEffect(() => {
    fetchPeepsPromise();
  }, [peeps]);

  const fetchPeepsPromise = () => {
    fetch(`${chitter}/peeps`)
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
        Authorization: `Token token=${session.session.session_key}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const likeUnlike = (peep) => {
    if (peep.likes.length === 0) {
      createLikeData(
        `${chitter}/peeps/${peep.id}/likes/${session.session.user_id}`
      );
    }

    peep.likes.forEach((el) => {
      if (el.user.id === session.session.user_id) {
        deleteLikeData(
          `${chitter}/peeps/${peep.id}/likes/${session.session.user_id}`
        );
      } else {
        createLikeData(
          `${chitter}/peeps/${peep.id}/likes/${session.session.user_id}`
        );
      }
    });
  };

  return (
    <div className="peeps">
      {peeps
        ? peeps.map((peep) => (
            <ul className="peeps-list" key={peep.id}>
              <div className="peep-body">{peep.body}</div>
              <div className="peep-details">
                posted by: {peep.user.handle}
                <br />
                {dateFormat(peep.created_at, "mmmm dS, h:MM:ss TT")}
                <div>
                  {`${peep.likes.length} `}
                  {peep.likes.length === 1 ? "like" : "likes"}
                </div>
                <div id="svg-images">
                  <img
                    alt="cross"
                    title="delete"
                    className="images"
                    width="30"
                    onClick={() =>
                      deletePeepData(
                        `${chitter}/peeps/${peep.id}`
                      )
                    }
                    src={process.env.PUBLIC_URL + "cross.svg"}
                  />

                  <img
                    alt="thumbs-up"
                    title="like"
                    className="images"
                    width="35"
                    onClick={() => likeUnlike(peep)}
                    src={process.env.PUBLIC_URL + "/like.svg"}
                  />
                </div>
              </div>
            </ul>
          ))
        : "Loading..."}
    </div>
  );
};

export default DisplayPeeps;
