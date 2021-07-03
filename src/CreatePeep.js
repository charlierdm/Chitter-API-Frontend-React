import { useState } from "react";
import "./App.css";

export const CreatePeep = (props) => {
  const [peepBody, setPeepBody] = useState();

  const postPeepData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token token=${props.session.session_key}`,
        "Content-Type": "application/json",
        responseType: "text",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  return (
    <div>
      <textarea
        id="input-peep"
        placeholder="What would you like to post today?"
        className="peep-text-input"
        onChange={(e) => setPeepBody(e.target.value)}
      ></textarea>
      <br />
      <button
        onClick={() => {
          postPeepData(`${props.chitter}/peeps`, {
            peep: { user_id: `${props.session.user_id}`, body: `${peepBody}` },
          });
        }}
      >
        Submit
      </button>
    </div>
  );
};
