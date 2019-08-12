import axios from 'axios'

const KEY = 'AIzaSyDtgbvsGSGTDXZWsTYWprbuI8EQEyy5ygA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
})