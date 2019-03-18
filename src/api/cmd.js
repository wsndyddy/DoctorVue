import axios from '@/libs/api.request'

export const sendCmd = data => {
  return axios.request({
    url: 'cmd',
    data: data,
    method: 'post'
  })
}
