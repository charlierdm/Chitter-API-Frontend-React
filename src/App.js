import { useEffect, useState } from 'react';
import './App.css';

const App = () =>  {
  
  const [peeps, setPeeps] = useState();

  useEffect(() => {
    fetchPeepsPromise();
  }, [])

  const fetchPeepsPromise = () => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then(res => res.json())
    .then(data => setPeeps(data.map(peep => `${peep.body}\n`)));
  }

  return (
    <div className="App">
      <header className="App-header">
      <p>{peeps}</p>
      </header>
      
    </div>
  );
}

export default App;
