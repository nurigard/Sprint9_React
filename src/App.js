import React from 'react';
import './App.css';
import axios from 'axios'
//import SearchBar from "./components/searchbar/SearchBar";
//import VideoDetail from "./components/videodetail/VideoDetail";
//import VideoList from "./components/videolist/VideoList";

function App() {

  //'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part=contentDetails&mine=true&key=[your_api_key]'
  //const apiUrl='https://www.googleapis.com/youtube/v3/videos'

  //const apiUrl = 'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.playlistItems.list?part=snippet%252CcontentDetails%252Cstatus&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA'

  const apiUrl = 'https://www.youtube.com/channel/UCqAEtEr0A0Eo2IVcuWBfB9g'

  return (
    <div className="App">
      {axios.get(apiUrl).then(result => {
          console.log(result)
      })}

      

    </div>
  );
}

export default App;
