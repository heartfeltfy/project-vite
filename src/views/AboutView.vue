<script lang="ts" setup>
import * as store from "@/store"
import User from "@/api/login/index"

const useStore = store.useLoginStore()
console.log(useStore.getToken)
const state = reactive({
  message: [] as any[]
})

// 获取数据
const getUserInfo = async () => {
  const { data } = await User.getUserInfo({ page: 1, tab: "ask", limit: 10 })
  state.message = data
  console.log(data)
}
getUserInfo()

const list = reactive<any[]>([
  { status: 1 },
  { status: 2 },
  { status: 4 },
  { status: 5 }
])

interface IEncode {
  [index: string]: any;
}

const encode: IEncode = {
  1: "等待庭审",
  2: "正在庭审",
  4: "庭审结束",
  5: "休庭"
}
list.forEach((value) => {
  value.statusName = encode[value.status]
})
console.log(list)
</script>

<template>
  <div class="template">
    AboutView
  </div>
</template>

<style lang="scss" scoped></style>
