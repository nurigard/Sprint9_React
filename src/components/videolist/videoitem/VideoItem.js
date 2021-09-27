
const VideoItem = ({videoLLista}) => {

    console.log('videoLLista', videoLLista);

    const imatgeVideo = videoLLista.id.videoId;
    const titolVideo = videoLLista.snippet.title;

    return(
        <div>
            {imatgeVideo}
            <h2>{titolVideo}</h2>
        </div>

    )
}
export default VideoItem;
