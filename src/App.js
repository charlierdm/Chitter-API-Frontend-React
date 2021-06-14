import Peeps from "./peeps";
import User from "./user"
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <div><User /></div>
      <div className="Peeps"><Peeps /></div>
    </div>
  );
};

export default App;
