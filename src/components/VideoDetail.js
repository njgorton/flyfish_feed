import React from 'react'
import ReactPlayer from 'react-player'

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) {
        return <h1 style={{ color: 'white' }}>Loading...</h1>
    }

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    const date = new Date(selectedVideo.snippet.publishedAt)
    const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`

    return (
        <div className="videoDetail">
            <div className="videoDetail__aspectRatio">
                <ReactPlayer
                    url={videoSrc}
                    className="videoDetail__reactPlayer"
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>

            <div className="videoDetail__description">
                <h2>{selectedVideo.snippet.title}</h2>
                <span>Published on {formattedDate}</span>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}


export default VideoDetail