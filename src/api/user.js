import axios from '@/libs/api.request'

export const getAllUser = data => {
  data.cmd = 'query_data'
  data.type = 'all'

  return axios.request({
    url: 'user',
    data: data,
    method: 'post'
  })
}

export const login = data => {
  data.cmd = 'login'

  return axios.request({
    url: 'user',
    data: data,
    method: 'post'
  })
}
