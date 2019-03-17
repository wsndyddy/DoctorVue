import axios from '@/libs/api.request'

export const getReport = data => {
  return axios.request({
    url: 'report',
    data: data,
    method: 'post'
  })
}
