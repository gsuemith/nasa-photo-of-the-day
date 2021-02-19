import React, {useState, useEffect} from "react";
import Album from './components/Album'
import FeaturedPhoto from './components/FeaturedPhoto'
import axios from 'axios';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = `https://api.nasa.gov/planetary/apod`
const API_KEY = 'ArPgFY87J422ZogJ4c4ybXxYz9x2KJgcsec76N1a'

function App() {
  const [image, setImage] = useState(null)
  const [images, setImages] = useState(null)
  const [date, setDate] = useState((() => {
    let today = new Date()
    today = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    return today
  })())

  // Set the featured image to the photo of the day
  useEffect(() => {
    function get(){
      axios.get(`${URL}?api_key=${API_KEY}&date=${date}`)
        .then(res => {
          setImage(res.data)
        })
        .catch(err =>{
          console.log("Error:", err)
        })
      }
    get();
  }, [date])
  
  useEffect(() => {
    axios.get(`${URL}?api_key=${API_KEY}&count=24`)
      .then(res => {
        setImages(res.data.filter(apod => apod.media_type === 'image'))
      })
      .catch(err => console.log("Error", err))
  }, [])

  return (

    <div className="App ">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {image && <FeaturedPhoto date={date} setDate={setDate}/>}
      <Album apod={image} images={images}/>
    </div>
  );
}

export default App;
