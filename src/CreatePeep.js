import { useState } from "react";
import "./App.css";

export const CreatePeep = ({ session }) => {
  const [peepBody, setPeepBody] = useState();

  const chitter = "https://chitter-backend-api-v2.herokuapp.com";

  const postPeepData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token token=${session.session_key}`,
        "Content-Type": "application/json",
        responseType: "text",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  if (session) {
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
            postPeepData(`${chitter}/peeps`, {
              peep: { user_id: `${session.user_id}`, body: `${peepBody}` },
            });
          }}
        >
          Submit
        </button>
      </div>
    );
  } else {
    return "";
  }
};
