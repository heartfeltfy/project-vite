<script lang="ts" setup>
const date = new Date().getFullYear()
</script>

<template>
  <footer class="flex justify-center items-center gap-1 text-sm">
    <p>© {{ date }} 小M All Rights Reserved</p>
    <github-logo />
  </footer>
</template>

<style scoped>

</style>
