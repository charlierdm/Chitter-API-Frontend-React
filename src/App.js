import DisplayPeeps from "./DisplayPeeps";
import SignUp from "./SignUp";
import { CreatePeep } from "./CreatePeep";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./App.css";

const App = () => {
  const [sessionData, setSessionData] = useState();

  return (
    <div className="app">
      <div className="title">Chitter</div>
      <div className="sign-up">
        {sessionData ? (
          <Button variant="outline-light" onClick={() => setSessionData("")}>Log Out</Button>
        ) : (
          <SignUp setSession={setSessionData} />
        )}
      </div>
      <div>
        <CreatePeep session={sessionData}/>
      </div>
      <div>
        <DisplayPeeps />
      </div>
    </div>
  );
};

export default App;
