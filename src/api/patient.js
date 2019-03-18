import axios from '@/libs/api.request'

// 获取待检列表
export const getPatients = data => {
  data.cmd = 'getCheckList'
  data.type = 'all'

  return axios.request({
    url: 'patient',
    data: data,
    method: 'post'
  })
}
