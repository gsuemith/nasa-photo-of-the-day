import React, {useState, useEffect} from "react";
import Album from './components/Album.js'
import axios from 'axios';
import "./App.css";

const url = `https://api.nasa.gov/planetary/apod`
const date = '2021-02-14'


function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(`${url}?api_key=DEMO_KEY&date=${date}`)
      .then(res => {
        console.log(res)
        setImage(res.data)
      })
      .catch(err =>{
        console.log("Error:", err)
      })
  }, [])
  

  return (

    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Album apod={image}/>
    </div>
  );
}

export default App;
