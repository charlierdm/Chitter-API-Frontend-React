import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "./App.css";

export const DisplayPeeps = (props) => {
  const [peeps, setPeeps] = useState([]);

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
    <div className="peeps-list">
      {peeps
        ? peeps.map((peep) => (
            <ul className="peep" key={peep.id}>
              <li className="user-and-date">
                <span className="written-by">
                  <span className="user">{peep.user.handle}</span> wrote:
                </span>
                <span className="peep-date">
                  {dateFormat(peep.created_at, "mmmm dS, h:MM TT")}
                </span>
              </li>
              <h3 className="peep-body">{peep.body}</h3>
              <li className="peep-likes">
                {`${peep.likes.length} `}
                {peep.likes.length === 1 ? "like" : "likes"}
              </li>
              {props.session && (
                <li id="svg-images">
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
                </li>
              )}
            </ul>
          ))
        : "Loading..."}
    </div>
  );
};
