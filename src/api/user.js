import axios from '@/libs/api.request'

export const getAllUser = data => {
  return axios.request({
    url: 'user',
    data: data,
    method: 'post'
  })
}
