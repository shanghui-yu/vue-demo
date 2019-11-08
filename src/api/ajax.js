import axios from 'axios'
import qs from 'qs'
const config= {
	 headers:{'Content-Type':'multipart/form-data'}
}
function errorFunction (error){
  if (error.response) {
    // 发送请求后，服务端返回的响应码不是 2xx   
    let { data } = error.response
    if (data.error) {
      alert(data.error.message)
    }
  } else if (error.request) {
    // 发送请求但是没有响应返回
    console.log(error.request, 7);
  } else {
    // 其他错误
    console.log('Error', error.message, 8);
  }
}
const fetch = ({url, body, type, header }) => {
  if (type === 'POST') {
    return axios.post(url, qs.stringify(body), header).catch(error => {
      errorFunction(error)
    })
  } else {
    return axios.get(url, {params: body}).catch(error=>{
      errorFunction(error)
    })
  }
}

export default fetch
