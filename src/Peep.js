import dateFormat from "dateformat";
import cross from "./cross.svg";
import like from "./like.svg";

export const Peep = ({
  id,
  userHandle,
  createdAt,
  peepBody,
  likes,
  session,
  peep,
  chitter,
}) => {
  
  const handlePeepUpdate = async (url = "", method) => {
    const response = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Token token=${session.session_key}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const likeUnlike = (peep) => {
    let url = `${chitter}/peeps/${peep.id}/likes/${session.user_id}`;
    if (peep.likes.length === 0) return handlePeepUpdate(url, "PUT");

    peep.likes.forEach((el) => {
      el.user.id === session.user_id
        ? handlePeepUpdate(url, "DELETE")
        : handlePeepUpdate(url, "PUT");
    });
  };

  return (
    <ul className="peep" key={id}>
      <li className="user-and-date">
        <span className="written-by">
          <span className="user">{userHandle}</span> wrote:
        </span>
        <span className="peep-date">
          {dateFormat(createdAt, "mmmm dS, h:MM TT")}
        </span>
      </li>
      <li>
        <h3 className="peep-body">{peepBody}</h3>
      </li>
      <li className="peep-likes">
        {`${likes.length} `}
        {likes.length === 1 ? "like" : "likes"}
      </li>
      {session && (
        <li id="svg-images">
          <img
            alt="cross"
            title="delete"
            className="images"
            width="30"
            onClick={() => handlePeepUpdate(`${chitter}/peeps/${id}`, "DELETE")}
            src={cross}
          />

          <img
            alt="thumbs-up"
            title="like"
            className="images"
            width="35"
            onClick={() => likeUnlike(peep)}
            src={like}
          />
        </li>
      )}
    </ul>
  );
};
