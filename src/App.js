import React, {useState, useEffect} from "react";
import Album from './components/Album'
import FeaturedPhoto from './components/FeaturedPhoto'
import axios from 'axios';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = `https://api.nasa.gov/planetary/apod`
const DATE = '2021-02-14'
const API_KEY = 'ArPgFY87J422ZogJ4c4ybXxYz9x2KJgcsec76N1a'

function App() {
  const [image, setImage] = useState(null)
  const [images, setImages] = useState(null)

  useEffect(() => {
    function get(){
      axios.get(`${URL}?api_key=${API_KEY}&date=${DATE}`)
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
  }, [])
  
  useEffect(() => {
    axios.get(`${URL}?api_key=${API_KEY}&count=24`)
      .then(res => {
        console.log(res.data);
        setImages(res.data.filter(apod => apod.media_type === 'image'))
      })
      .catch(err => console.log("Error, err"))
  }, [])

  return (

    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {image && <FeaturedPhoto apod={image}/>}
      <Album apod={image} images={images}/>
    </div>
  );
}

export default App;
