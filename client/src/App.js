import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {


  const [randomNumber, setRandomNumber] = useState('')

  const handleRandomNumber = () => {

      fetch('https://api.deepakdev.live/random/number')
        .then(res => res.json())
        .then(data => {
          setRandomNumber(data.randomNumber)
        }).catch((error) => {
          console.log(error)
        })

  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {randomNumber}
        
        <button onClick={handleRandomNumber}>Get Random</button>

      </header>
    </div>
  );
}

export default App;
