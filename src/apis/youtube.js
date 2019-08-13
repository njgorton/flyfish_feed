import axios from 'axios'

const KEY = 'AIzaSyDtgbvsGSGTDXZWsTYWprbuI8EQEyy5ygA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        type: 'video',
        part: 'snippet',
        maxResults: 10,
        safeSearch: 'moderate'
    }
})