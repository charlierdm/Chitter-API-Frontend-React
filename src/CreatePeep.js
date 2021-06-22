import { useState } from "react";
import "./App.css";

export const CreatePeep = ({session}) => {
  
  const [peepBody, setPeepBody] = useState();

  const postPeepData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token token=${session.session_key}`,
        "Content-Type": "application/json",
        responseType: 'text'
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };  

  return (
    <div>
      <input className="peep-text-input" onChange={(e) => setPeepBody(e.target.value)}>

      </input> 
      <button onClick={() => {postPeepData("https://chitter-backend-api-v2.herokuapp.com/peeps",
      {
        "peep": {"user_id":`${session.user_id}`, "body":`"${peepBody}"`}
      }
      )}}>Submit</button>

    </div>
  )
}
