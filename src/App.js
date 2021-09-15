import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
//import SearchBar from "./components/searchbar/SearchBar";
//import VideoDetail from "./components/videodetail/VideoDetail";
//import VideoList from "./components/videolist/VideoList";

function App() {

  const [searchVideos, setSearchVideos] = useState("")

  const apiUrl='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyDqTmQ8ObLsln_hinp5f_I2Atguxlqc4Y8'

  useEffect(() => {
          axios.get(apiUrl).then(result => {
            console.log(result.data.items)
            const {searchVideos} = result.data.items;
            setSearchVideos(searchVideos)
        })
      })
 
  return (
    <div className="App">
        {searchVideos}
    </div>
  );
}

export default App;
