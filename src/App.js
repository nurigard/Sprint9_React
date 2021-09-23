import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
//import SearchBar from "./components/searchbar/SearchBar";
//import VideoDetail from "./components/videodetail/VideoDetail";
import VideoList from "./components/videolist/VideoList";

function App() {

  const apiUrl='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyDqTmQ8ObLsln_hinp5f_I2Atguxlqc4Y8'

  const [searchVideos, setSearchVideos] = useState([])
  

    useEffect(() => {

      axios.get(apiUrl).then(result => {
        console.log('result', result)
        const searchVideos = result.data.items;    
        console.log('searchVideos', searchVideos)
        setSearchVideos(searchVideos)
        console.log('searchVideos', searchVideos)
      })
    }, [])

  return (
    <div className="App">
      <VideoList llistaVideos={searchVideos}/>
    </div>
  );
}

export default App;

//A la linia 26, si faig un alert no apareix res "localhost:3000 dice", vol dir que el valor de searchVideos es nul.Inicialment searchVideos és nul (useState). Després useEffect el carrega amb dades.
//He de fer un renderitzat condicional per a que searchVideos només es recorri quan tingui dades

//No puc imprimir searchVideos en Jsx, ja que és un objecte amb propietats. En Jsx només puc imprimir variables tipo text, nombres o valors booleans. A dins del return no puc posar {searchVideos}, a no ser que el seu valor no sigui un objecte

//de todas formas, el map habría que hacerlo dentro del videolist
//el videolist es un listado de videos, luego, le pasaras los videos como prop y dentro del videolist los recorrerás e imprimirás cada uno utilizando el componente videoitem


//{(searchVideos) && (searchVideos.map((videoUnitat, index) => <VideoList key={index} videoLLista={videoUnitat} />))}

//{(searchVideos) && (searchVideos.map((videoUnitat, index) => <p>La casa</p>))}

// {alert (searchVideos)} 