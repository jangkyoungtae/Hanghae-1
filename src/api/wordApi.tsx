
import axios from 'axios'

export default axios.create({
    baseURL: "wordlist.s3-website.ap-northeast-2.amazonaws.com",
})