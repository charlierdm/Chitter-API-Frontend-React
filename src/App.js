import Peeps from "./Peeps";
import SignUp from "./SignUp";
import User from "./User";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <span className="title">Chitter</span>
      <div>
        <SignUp />
      </div>
      <div className="peeps">
        <Peeps />
      </div>
    </div>
  );
};

export default App;
