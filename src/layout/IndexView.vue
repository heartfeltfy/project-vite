<script lang="ts" setup></script>

<template>
  <div class="tiger-layout">
    <header>
      HeaderView
    </header>
    <main>
      <aside></aside>
      <section></section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.tiger-layout {

  header {
    height: var(--header-height);
    flex-shrink: 0;
    border-bottom: 1px solid var(--header-border);
  }

  main {
    overflow-y: auto;

    aside {
      position: fixed;
      width: 100px;
      top: var(--header-height);
      bottom: 0;
      left: 0;
      border-right: 1px solid var(--header-border);
    }
  }
}
</style>
