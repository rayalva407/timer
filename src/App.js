import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  let seconds = ("0" + (Math.floor((time / 1000) % 60) % 60)).slice(-2);
  let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor((time / 3600000) % 60)).slice(-2);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
