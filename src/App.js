import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
//import SearchBar from "./components/searchbar/SearchBar";
//import VideoDetail from "./components/videodetail/VideoDetail";
import VideoList from "./components/videolist/VideoList";

function App() {

  const apiUrl='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyDqTmQ8ObLsln_hinp5f_I2Atguxlqc4Y8'

  const [searchVideos, setSearchVideos] = useState(null)
  
  useEffect(() => {
    
          axios.get(apiUrl).then(result => {
            console.log(result.data.items)
            const {searchVideos} = result.data.items;
            console.log(searchVideos)
            setSearchVideos(searchVideos)
            console.log(searchVideos)
      })
    })
 
  return (
    <div className="App">
        {(searchVideos) && (searchVideos.map((videoUnitat, index) => <VideoList key={index} videoLLista={videoUnitat} />))}
        {searchVideos}
    </div>
  );

 

}

export default App;

//A la linia 26, si faig un alert no apareix res "localhost:3000 dice", vol dir que el valor de searchVideos es nul.Inicialment searchVideos és nul (useState). Després useEffect el carrega amb dades.
//He de fer un renderitzat condicional per a que searchVideos només es recorri quan tingui dades


// linia 29   {searchVideos}

// {alert (searchVideos)} 