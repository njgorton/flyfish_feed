import React, { useRef } from 'react'
import VideoItem from './VideoItem'
import ScrollArrows from './ScrollArrows'

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />
        )
    })

    const scrollList = useRef(null)

    const scrollUp = () => {
        scrollList.current.scrollBy({
            top: -200,
            left: 0,
            behavior: 'smooth'
        })
    }

    const scrollDown = () => {
        scrollList.current.scrollBy({
            top: 200,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="videoList__container">
            <ScrollArrows scrollUp={scrollUp} scrollDown={scrollDown} />
            <div ref={scrollList} className="videoList">{renderedList}</div>
        </div>
    )
}

export default VideoList