import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const APIKEY = '';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Bubble tea');
  }
//App -> VideoList -> VideoListItem
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar className='embed-responsive'  onSearchTermChange={videoSearch}/>
        <VideoDetail value= {this.state.selectedVideo}/>
        <VideoList
          //Function that updates App's state
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}/>
      </div>
    );
  }
  videoSearch(term) {
    YTSearch({key: APIKEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });

  }

}
ReactDOM.render(<App/>, document.querySelector('.container'));
