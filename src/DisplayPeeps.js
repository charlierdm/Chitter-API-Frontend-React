import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "./App.css";

export const DisplayPeeps = (props) => {
  const [peeps, setPeeps] = useState(undefined);

  useEffect(() => {
    fetchPeepsPromise();
  }, [peeps]);

  const fetchPeepsPromise = () => {
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps`)
      .then((res) => res.json())
      .then((data) => setPeeps(data));
  };

  const handlePeepUpdate = async (url = "", method) => {
    const response = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Token token=${props.session.session_key}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const likeUnlike = (peep) => {
    if (peep.likes.length === 0) {
      handlePeepUpdate(
        `${props.chitter}/peeps/${peep.id}/likes/${props.session.user_id}`,
        "PUT"
      );
    }

    peep.likes.forEach((el) => {
      if (el.user.id === props.session.user_id) {
        handlePeepUpdate(
          `${props.chitter}/peeps/${peep.id}/likes/${props.session.user_id}`,
          "DELETE"
        );
      } else {
        handlePeepUpdate(
          `${props.chitter}/peeps/${peep.id}/likes/${props.session.user_id}`,
          "PUT"
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
                {props.session && (
                  <div id="svg-images">
                    <img
                      alt="cross"
                      title="delete"
                      className="images"
                      width="30"
                      onClick={() =>
                        handlePeepUpdate(
                          `${props.chitter}/peeps/${peep.id}`,
                          "DELETE"
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
                )}
              </div>
            </ul>
          ))
        : "Loading..."}
    </div>
  );
};