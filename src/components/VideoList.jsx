import React from 'react';

const VideoList = ({videos, onVideoSelect}) => {
    
    return(
        <div className="video-list">
            <h2>
                Videos
            </h2>
                <ul className="list-group">
                    {videos.map((video) => (
                        <li className="list-group-item" key={video.id} onClick={() => onVideoSelect(video)}>
                            {video.title}
                        </li>
                    ))}
                </ul>
        </div>
    );
};

export default VideoList;