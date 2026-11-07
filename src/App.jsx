import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);

  function pickNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  }

  return (
    <div className="container">
      <div className="generator-card">
        <div className="app-icon">🍀</div>

        <h1>Lucky Number Picker</h1>

        <p className="subtitle">
          Discover your lucky number between 1 and 100
        </p>

        <div className="number-display">
          {number === null ? (
            <p className="placeholder">
              Your lucky number is waiting!
            </p>
          ) : (
            <h2>{number}</h2>
          )}
        </div>

        <button onClick={pickNumber}>
          Pick My Number
        </button>
      </div>
    </div>
  );
}

export default App;