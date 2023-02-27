import { defineStore } from "pinia"

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      token: "测试使用"
    }
  },
  getters: {
    // 获取token
    getToken: (state) => state.token + "token"
  },
  actions: {}
})
