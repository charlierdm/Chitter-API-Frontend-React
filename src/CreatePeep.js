import { useState } from "react";
import "./App.css";

export const CreatePeep = ({ session, chitter }) => {
  const [peepBody, setPeepBody] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    postPeepData(`${chitter}/peeps`, {
      peep: { user_id: `${session.user_id}`, body: `${peepBody}` },
    });
    setPeepBody("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <textarea
        value={peepBody}
        id="input-peep"
        placeholder="What would you like to post today?"
        className="peep-text-input"
        onChange={(e) => setPeepBody(e.target.value)}
      ></textarea>
      <br />
      <button>Submit</button>
    </form>
  );
};
