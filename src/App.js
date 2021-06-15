import DisplayPeeps from "./DisplayPeeps";
import SignUp from "./SignUp";
import User from "./User";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="title">Chitter</div>
      <div>
        <SignUp />
      </div>
      <div>
        <DisplayPeeps />
      </div>
    </div>
  );
};

export default App;
