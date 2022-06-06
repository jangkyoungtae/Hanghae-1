
import axios from 'axios'
import { IWords } from '../redux/word/types'

export default axios.create({
    baseURL: "http://wordlist.s3-website.ap-northeast-2.amazonaws.com/api",
})
export async function getUserProfile(path: string) {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
    const response = await axios.get<IWords>(
        `http://wordlist.s3-website.ap-northeast-2.amazonaws.com/api/${path}`
    );
  return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
}