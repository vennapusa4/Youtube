import React, { Component } from 'react';
import Search  from './search';
import Videos  from './videos';
import VideoDetail  from './videodetail';

import YTSearch from 'youtube-api-search'
const apiKEY='AIzaSyB5uNv8_n1nDEI_KOGz5jV4u0zXzRiHKb8';

export default class App extends Component {
  constructor(props) {
    let test = "gg<hhd";
let aa = test.replace("<","").replace('>',"");
let a=1;
console.log(aa);
    super(props);
    this.state = { videos:[],
      selected:null
     };
    YTSearch({key:apiKEY,term:'telugu songs'}, (videos)=> {
     this.setState({videos: videos,
      selected:videos[0]
     })
      console.log(this.state);
      
    })
    
  }
   Search (term) { 
    YTSearch({key:apiKEY,term:term}, (videos)=> {
      this.setState({videos: videos,
       selected:videos[0]
      })
       console.log(this.state);
     })
  };
  render() {
  //   const listItems=this.state.videos.map((video,key)=>{
  //     return <h1 onClick={this.state.Button()}>{key }</h1>
  // });
    return (
      <React.Fragment>
      <Search onSearch={(term)=>this.Search(term)}/>;
      <VideoDetail  video={this.state.selected}/>
      <Videos onselect={selected=>this.setState({selected})} videos={this.state.videos} />;
      
      </React.Fragment>
    );
  }
}
