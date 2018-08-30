import React, {
    Component
} from 'react';
const VideoDetail = ({video}) => {
    debugger;
    if (!video) {
        return  <h1>loading...</h1>
    }
    const url=`https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
        </div>
    );
}

export default VideoDetail;