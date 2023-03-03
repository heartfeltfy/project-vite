<script lang="ts" setup>
import User from "@/api/login/index"
import { plainToInstance } from "class-transformer"
import { Message } from "./index"

// 数据状态
const state = reactive({
  message: [] as Message[]
})
// 获取数据
const getUserInfo = async () => {
  try {
    const { data } = await User.getUserInfo({ page: 1, tab: "ask", limit: 10 })
    const propData = plainToInstance(Message, data)
    console.log(propData)
    state.message = propData
  } catch (e) {
    console.error(e)
  }
}
getUserInfo()

</script>
<template>
  <div class="tiger-home">HomeView</div>
</template>

<style lang="scss" scoped></style>
