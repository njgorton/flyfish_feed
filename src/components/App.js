import React, { useState, useEffect } from 'react'
import '../App.scss'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
// import VideoDetail from './VideoDetail'

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        onTermSubmit('flyfishing')
    }, [])

    const onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: `flyfishing ${term}`
            }
        })

        setVideos(
            response.data.items
        )
    }

    const onVideoSelect = video => {
        setSelectedVideo(video)
    }

    return (
        <div className="container">
            <h1 className="heading">Flyfish Feed</h1>
            <SearchBar onTermSubmit={onTermSubmit} />
            <VideoList
                onVideoSelect={onVideoSelect}
                videos={videos}
            />
        </div>
    )
}

// class App extends React.Component {
//     state = { videos: [], selectedVideo: null };

//     componentDidMount() {
//         this.onTermSubmit('flyfishing');
//     }

//     onTermSubmit = async term => {
//         const response = await youtube.get('/search', {
//             params: {
//                 q: `flyfishing ${term}`
//             }
//         });

//         this.setState({
//             videos: response.data.items,
//             // selectedVideo: response.data.items[0]
//         });
//     };

//     onVideoSelect = video => {
//         this.setState({ selectedVideo: video });
//     };

//     render() {
//         return (
//             <div className="container">
//                 <h1 className="heading">Flyfish Feed</h1>
//                 <SearchBar onTermSubmit={this.onTermSubmit} />
//                 <VideoList
//                     onVideoSelect={this.onVideoSelect}
//                     videos={this.state.videos}
//                 />
//             </div>
//         );
//     }
// }

export default App