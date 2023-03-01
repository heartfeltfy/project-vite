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
        <div class="tiger-section">
          <p v-for="i in 100" :key="i">内容显示区域</p>
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

    section {
      padding-top: var(--header-height);

      .tiger-section {
        padding: 32px 24px 96px;
      }
    }
  }
}

/* 媒介查询适配 */
/* 适配768px */
@media screen and (min-width: 768px) {
  .tiger-layout {
    header {
      padding: 0 12px 0 32px;
    }

    main {
      aside {
        width: var(--sidebar-width-small);
      }

      section {
        .tiger-section {
          padding: 48px 32px 42px;
        }
      }
    }
  }
}

/* 适配960px */
@media screen and (min-width: 960px) {
  .tiger-layout {
    main {
      section {
        padding-left: calc(var(--sidebar-width-sm) + 10px);

        .tiger-section {
          padding: 64px 64px 42px;
        }
      }
    }
  }
}

/* 适配1280px */
@media screen and (min-width: 1280px) {
  .tiger-layout {
    header {
      padding: 0 32px;
    }
  }
}

/* 适配960px至1280px */
@media screen and (min-width: 960px) and (min-width: 1280px) {
  .tiger-layout {
    main {
      section {
        padding-left: calc(var(--sidebar-width-small));
      }
    }
  }
}

/* 适配1440px */
@media screen and (min-width: 1440px) {
  .tiger-layout {
    main {
      aside {
        padding: 48px 48px 96px calc((100vw - var(--screen-max-width)) / 2);
        width: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
      }

      section {
        .tiger-section {
          padding: 64px 0 42px 64px;
        }
      }
    }
  }
}

/* 适配960px至1440px */
@media screen and (min-width: 960px) and (min-width: 1440px) {
  .tiger-layout {
    main {
      section {
        padding-left: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
      }
    }
  }
}

/* 适配1680px */
@media screen and (min-width: 1680px) {
  .tiger-layout {
    main {
      aside {
        padding: 48px 32px 96px calc((100vw - var(--screen-max-width)) / 2);
        width: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
      }

      section {
        .tiger-section {
          padding: 64px 0 42px 96px;
        }
      }
    }
  }
}

/* 适配小于960px时的操作 */
@media screen and (max-width: 960px) {
  .tiger-layout {
    main {
      aside {
        display: none;
      }
    }
  }
}
</style>
