import http from '@/utils/http'

interface IParams {
  page: number,
  tab: string,
  limit: number
}

interface IDataType {
  title: string,
  tab: string,
  content: string
}

export default class User {
  static async getUserInfo(data: IParams) {
    return http.get<IResponse<IDataType[]>>('/topics', {
      params: data
    })
  }
}
