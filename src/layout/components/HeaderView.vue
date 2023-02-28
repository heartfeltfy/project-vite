<script lang="ts" setup></script>

<template>
  <div class="header-container">HeaderView</div>
</template>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  margin: 0 auto;
}

@media screen and (min-width: 1440px) {
  .header-container {
    max-width: var(--screen-max-width)
  }
}
</style>
