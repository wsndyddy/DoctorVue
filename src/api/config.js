import axios from '@/libs/api.request'

export const getConfig = data => {
  return axios.request({
    url: 'config',
    data: data,
    method: 'post'
  })
}

export const setConfig = data => {
  return axios.request({
    url: 'config',
    data: data,
    method: 'post'
  })
}
