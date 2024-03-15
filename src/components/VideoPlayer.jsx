import React from 'react';

const VideoPlayer = ({video}) => {
    // const [currentVid, setCurrentVid] = React.useState({
    //         title:"",
    //         url:""
    // });

    if (!video){
        return <div>Please select a video</div>;
    }

    // setCurrentVid(video);

    return(
        <div className="video-player">
            <h2>{video.title}</h2>
            <video className="object-fit-sm-contain border rounded" style={{ width:`${27}em` }} controls autoPlay loop>
                {console.log(video.url)}
                <source src={video.url} type="video/mp4"/>
                Your browser doesnot supportt the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;