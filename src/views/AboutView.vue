<script lang="ts" setup>
import * as store from '@/store'
import User from '@/api/login/index'

const useStore = store.useLoginStore()
console.log(useStore.getToken)

const state = reactive({
  message: [] as any[]
})
// 获取数据
const getUserInfo = async () => {
  const { data } = await User.getUserInfo({ page: 1, tab: 'ask', limit: 10 })
  state.message = data
}
getUserInfo()

</script>

<template>
  <div class="template">AboutView
    <p v-for="(value,index) in state.message" :key="index">{{ value.title }}</p>
    <HelloWorld/>
  </div>
</template>

<style lang="scss" scoped></style>
