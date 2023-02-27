export {}
declare global {
  interface IResponse<T = any> {
    success: boolean
    data: T
  }
}
