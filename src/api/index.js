import { glHttp } from '../libs/http'

const api = {
  gitlab: {
    getToken(data) {
      return glHttp({
        method: 'post',
        url: '/oauth/token',
        data: {
          grant_type: 'password',
          ...data,
        },
      })
    },
  },
}

export default api
