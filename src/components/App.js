import React, { useState, useEffect } from 'react'
import '../app.scss'
import SearchBar from './SearchBar'
import Categories from './Categories'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import Footer from './Footer'
import youtube from '../apis/youtube'

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

        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    const onVideoSelect = video => {
        setSelectedVideo(video)
    }

    return (
        <div className="app">
            <header>
                <h1 className="app__header">Flyfish Feed</h1>
                <SearchBar onTermSubmit={onTermSubmit} />
            </header>

            <Categories onTermSubmit={onTermSubmit} />

            <main className="app__videoContent">
                <VideoDetail selectedVideo={selectedVideo} />
                <VideoList onVideoSelect={onVideoSelect} videos={videos} />
            </main>

            <Footer />
        </div>
    )
}

export default App