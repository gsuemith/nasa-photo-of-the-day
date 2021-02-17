import React, {useState, useEffect} from "react";
import Album from './components/Album.js'
import axios from 'axios';
import "./App.css";

const url = `https://api.nasa.gov/planetary/apod`
const date = '2021-02-14'


function App() {
  const [image, setImage] = useState(null)
  const [images, setImages] = useState(null)
  const [pause, setPause] = useState(null)

  useEffect(() => {
    function get(){
      axios.get(`${url}?api_key=DEMO_KEY&date=${date}`)
        .then(res => {
          console.log(res)
          setImage(res.data)
        })
        .catch(err =>{
          console.log("Error:", err)
        })
        console.log("ran")
      }

    get();

    return () => {}
  }, [pause])
  
  useEffect(() => {
    axios.get(`${url}?api_key=DEMO_KEY&count=24`)
      .then(res => {
        console.log(res.data);
        setImages(res.data.filter(apod => apod.media_type === 'image'))
      })
      .catch(err => console.log("Error, err"))
  }, [pause])

  return (

    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Album apod={image} images={images}/>
    </div>
  );
}

export default App;
