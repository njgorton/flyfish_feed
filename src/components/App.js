import React from 'react';
import '../App.scss';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
// import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('flyfishing');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: `flyfishing ${term}`
            }
        });

        this.setState({
            videos: response.data.items,
            // selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="container">
                <h1 className="heading">Flyfish Feed</h1>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

export default App;