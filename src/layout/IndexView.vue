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
        <div>
          <p v-for="i in 1" :key="i">内容显示区域</p>
        </div>
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
    padding: 0 12px 0 24px;
    background: radial-gradient(transparent 1px, var(--bg-color) 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    top: 0;
    left: 0;
    position: sticky;
    z-index: var(--nav-z-index);
    box-sizing: border-box;
  }

  @media screen and (min-width: 768px) {
    header {
      padding: 0 12px 0 32px;
    }
  }
  @media screen and (min-width: 960px) {
    header {
      width: 100%;
    }
  }
  @media screen and (min-width: 1280px) {
    header {
      padding: 0 32px;
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
      padding: 48px 32px 0;
      display: block;
      width: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
    }

    @media screen and (min-width: 768px) {
      aside {
        width: var(--sidebar-width-small);
      }
    }
    @media screen and (max-width: 960px) {
      aside {
        display: none;
      }
    }
    @media screen and (min-width: 1440px) {
      aside {
        padding: 48px 48px 96px calc((100vw - var(--screen-max-width)) / 2);
        width: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
      }
    }
    @media screen and (min-width: 1680px) {
      aside {
        padding: 48px 32px 96px calc((100vw - var(--screen-max-width)) / 2);
        width: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
      }
    }

    section {
      padding-top: var(--header-height);
    }

    @media screen and (min-width: 960px) {
      section {
        padding-left: calc(var(--sidebar-width-sm) + 10px);
      }
    }
    @media screen and (min-width: 960px) and (min-width: 1280px) {
      section {
        padding-left: calc(var(--sidebar-width-small));
      }
    }
    @media screen and (min-width: 960px) and (min-width: 1440px) {
      section {
        padding-left: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
      }
    }


  }
}
</style>
