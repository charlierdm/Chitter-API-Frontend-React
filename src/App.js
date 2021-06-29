import DisplayPeeps from "./DisplayPeeps";
import SignUp from "./SignUp";
import { CreatePeep } from "./CreatePeep";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [sessionData, setSessionData] = useState();

  return (
    <div className="app">
      <div className="title">Chitter</div>
      <div className="sign-up">
        {sessionData ? (
          <button variant="outline-light" onClick={() => setSessionData("")}>
            Log Out
          </button>
        ) : (
          <SignUp setSession={setSessionData} />
        )}
      </div>
      <div>
        <CreatePeep session={sessionData} />
      </div>
      <div>
        <DisplayPeeps session={sessionData} />
      </div>
    </div>
  );
};

export default App;
