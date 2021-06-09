import './App.css';

const App = () =>  {

  const handleGetPeeps = () => {
    return fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then(res => res.json())
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
