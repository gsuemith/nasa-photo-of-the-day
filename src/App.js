import React {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

useEffect(() = {
  axios.get('https://api.nasa.gov/planetary/apod')
  .then(res => {
    
  })
  .catch(err =>{
    console.log("Error:", err)
  })
}, [])

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
