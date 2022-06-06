
import axios from 'axios'

export default axios.create({
    baseURL: "http://wordlist.s3-website.ap-northeast-2.amazonaws.com/",
})