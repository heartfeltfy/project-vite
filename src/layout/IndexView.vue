<script lang="ts" setup></script>

<template>
  <div class="tiger-layout">
    <header>
      <HeaderView />
    </header>
    <main>
      <aside>
        <el-scrollbar>
          <AsideView />
        </el-scrollbar>
      </aside>
      <section>
        <p v-for="i in 100" :key="i">123123</p>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.tiger-layout {

  header {
    height: var(--header-height);
    flex-shrink: 0;
    border-bottom: 1px solid var(--header-border);
    padding: 0 32px;
    background: radial-gradient(transparent 1px, var(--bg-color) 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    top: 0;
    left: 0;
    position: relative;
    z-index: var(--nav-z-index);
    box-sizing: border-box;
  }

  @media screen and (min-width: 960px) {
    header {
      position: sticky;
      width: 100%;
    }
  }

  main {
    overflow-y: auto;

    aside {
      position: fixed;
      top: var(--header-height);
      bottom: 0;
      left: 0;
      border-right: 1px solid var(--header-border);
      padding: 48px 32px 96px calc((100vw - var(--screen-max-width)) / 2);
      width: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
    }

    section {
      padding-top: var(--header-height);
    }

    @media screen and (min-width: 960px) and (min-width: 1440px) {
      section {
        padding-left: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
      }
    }
  }
}
</style>
