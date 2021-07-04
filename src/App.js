import DisplayPeeps from "./DisplayPeeps";
import SignUp from "./SignUp";
import { CreatePeep } from "./CreatePeep";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [sessionData, setSessionData] = useState();
  const chitter = "https://chitter-backend-api-v2.herokuapp.com";

  return (
    <div className="app">
      <div className="title">Chitter</div>
      <div className="sign-up">
        {sessionData ? (
          <button variant="outline-light" onClick={() => setSessionData("")}>
            Log Out
          </button>
        ) : (
          <SignUp setSession={setSessionData} session={sessionData} chitter={chitter} />
        )}
      </div>
      <div>
        {sessionData && <CreatePeep session={sessionData} chitter={chitter} />}
      </div>
      <div>
        <DisplayPeeps session={sessionData} chitter={chitter} />
      </div>
    </div>
  );
};

export default App;
