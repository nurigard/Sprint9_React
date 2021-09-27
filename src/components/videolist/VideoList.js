import VideoItem from "./videoitem/VideoItem"

const VideoList = ({llistaVideos}) =>{

    return (
    <div>

    {(llistaVideos) && (llistaVideos.map(({videoUnitat, index}) => <VideoItem key={index} videoLLista={videoUnitat} />))}  
     
    </div>
    )

}

 export default VideoList;

 //Per a que no em surti l'error "objects are not valid as a react childs ..." he de posar els valors entre {}. A la linia 10 he posat (videoUnitat, index) entre {} 
 