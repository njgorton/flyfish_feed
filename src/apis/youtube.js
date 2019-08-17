import axios from 'axios'
import YOUTUBE_KEY from './keys'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: YOUTUBE_KEY,
        type: 'video',
        part: 'snippet',
        maxResults: 25,
    }
})