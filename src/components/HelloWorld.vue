<script lang="ts" setup>
import { useRouter } from "vue-router"

const router = useRouter()
/**
 * 跳转页面且不在浏览器历史记录里面添加记录
 */
const jump = () => {
  const routeUrl = router.resolve({
    path: '/about',
    query: {
      id: 123123
    }
  })
  window.open(routeUrl.href, '_blank')
}
</script>
<template>
  <div class="template" @click="jump">Template</div>
</template>

<style lang="scss" scoped></style>
