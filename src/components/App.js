import React, { useState, useEffect } from 'react'
import '../app.scss'
import SearchBar from './SearchBar'
import Categories from './Categories'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
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

            <nav>
                <Categories onTermSubmit={onTermSubmit} />
            </nav>

            <main className="app__videoContent">
                <VideoDetail selectedVideo={selectedVideo} />

                <VideoList onVideoSelect={onVideoSelect} videos={videos} />
            </main>

            <footer className="app__footer">
                <p className="app__footerText">To see the repository for this React App and all my other projects, visit my Github, @
                    <a href="https://github.com/njgorton" target="_blank" rel="noopener noreferrer" className="app__footerLink"><i className="devicon-github-plain"></i>/njgorton</a>.
                    <br></br>
                    Copyright <span>&copy;</span> 2019 Useful UI | Nathaniel Gorton.
                </p>
            </footer>
        </div>
    )
}

export default App