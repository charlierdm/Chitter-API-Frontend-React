import DisplayPeeps from "./DisplayPeeps";
import SignUp from "./SignUp";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="title">Chitter</div>
      <div className="sign-up">
        <SignUp />
      </div>
      <div>
        <DisplayPeeps />
      </div>
    </div>
  );
};

export default App;
