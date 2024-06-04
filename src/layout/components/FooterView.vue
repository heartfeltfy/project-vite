<script lang="ts" setup>
import { cn } from "@/lib/utils"

const date = new Date().getFullYear()
</script>

<template>
  <footer :class="cn('flex justify-center items-center gap-1 text-sm p-2')">
    <p>© {{ date }} 小M All Rights Reserved</p>
    <github-logo />
  </footer>
</template>

<style scoped>

</style>
