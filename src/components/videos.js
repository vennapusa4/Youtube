import React from 'react';
import Video from './video'
const Videos = (props) => {
    const videoitems=props.videos.map(video=>{
        return <Video onselect={props.onselect} video={video}/>
    });
    return ( <h1>{videoitems}</h1> );
}
 
export default Videos;