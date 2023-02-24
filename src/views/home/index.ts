export class Message {
  public tab: string
  public title: string

  constructor(tab: string, title: string) {
    this.tab = tab
    this.title = title
  }

  /**
   * 获取描述信息
   */
  getContent(): string {
    return this.tab + '-' + this.title
  }
}
