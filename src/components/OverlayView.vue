<script lang="ts" setup></script>

<template>
  <div v-if="false" class="shade"></div>
</template>

<style lang="scss" scoped>
.shade {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
  transition: opacity .5s;
  z-index: var(--z-index-shade);
}
</style>
