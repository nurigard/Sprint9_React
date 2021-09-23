import VideoItem from "./videoitem/VideoItem"

const VideoList = ({llistaVideos}) =>{

    //<div>{llistaVideos}</div>
 
    return (
        <div>
         
        {(llistaVideos) && (llistaVideos.map((videoUnitat, index) => <VideoItem key={index} videoLLista={videoUnitat} />))}

        </div>
    )

}

 export default VideoList;