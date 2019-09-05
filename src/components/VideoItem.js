import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            onVideoSelect(video)
        }
    }

    return (
        <div onClick={() => onVideoSelect(video)} onKeyDown={handleKeyDown} className="videoItem" tabIndex='0'>
            <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <p>{video.snippet.title}</p>
        </div>
    )
}

export default VideoItem