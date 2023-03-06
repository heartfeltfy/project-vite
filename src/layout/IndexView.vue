<script lang="ts" setup></script>

<template>
  <div class="tiger-layout">
    <header>
      <HeaderView />
    </header>
    <el-scrollbar class="aside">
      <div class="tiger-aside-scrollbar">
        <AsideView />
      </div>
    </el-scrollbar>
    <section>
      <div class="tiger-section">
        <div class="tiger-section-container">
          tiger-section-container
        </div>
        <div class="tiger-section-wrapper">
          <nav class="wrapper-content">
            wrapper-content
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.tiger-layout {
  header {
    height: var(--header-height);
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


  .aside {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 48px 32px 0;
    width: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
    overflow-y: auto;
    transform: translate(-100%);
    transition: background-color .3s, opacity .25s, transform .5s cubic-bezier(.19, 1, .22, 1);
    background: var(--bg-color);
    z-index: var(--z-index-sidebar);

    .tiger-aside-scrollbar {
      height: 100%;
      padding-bottom: 5em;
    }
  }

  section {
    padding-top: var(--header-height);

    .tiger-section {
      padding: 32px 24px 96px;

      .tiger-section-container {
        border: 1px solid var(--header-border);
      }

      .tiger-section-wrapper {
        padding-left: 64px;
        display: none;

        .wrapper-content {
          position: sticky;
          top: calc(var(--header-height) + 32px);
          margin-top: 0;
          padding: 4px 8px 4px 12px;
          margin-bottom: 32px;
          width: 200px;
          border: 1px solid var(--header-border);
        }
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

    .aside {
      width: var(--sidebar-width-small);
    }

    section {
      .tiger-section {
        padding: 48px 32px 42px;
      }
    }
  }
}

/* 适配960px */
@media screen and (min-width: 960px) {
  .tiger-layout {
    .aside {
      top: var(--header-height);
      transform: translate(0);
    }

    section {
      padding-left: calc(var(--sidebar-width-sm) + 10px);

      .tiger-section {
        padding: 64px 64px 42px;
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
    section {
      padding-left: calc(var(--sidebar-width-small));
    }
  }
}

/* 适配1440px */
@media screen and (min-width: 1440px) {
  .tiger-layout {
    .aside {
      padding: 48px 32px 96px calc((100vw - var(--screen-max-width)) / 2);
      width: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
    }

    section {
      .tiger-section {
        padding: 64px 0 42px 64px;
        display: flex;

        .tiger-section-container {
          width: var(--section-width)
        }

        .tiger-section-wrapper {
          display: block;
        }
      }
    }
  }
}

/* 适配960px至1440px */
@media screen and (min-width: 960px) and (min-width: 1440px) {
  .tiger-layout {
    section {
      padding-left: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
    }
  }
}

/* 适配1680px */
@media screen and (min-width: 1680px) {
  .tiger-layout {
    .aside {
      padding: 48px 48px 96px calc((100vw - var(--screen-max-width)) / 2);
      width: calc((100vw - var(--screen-max-width)) / 2 + var(--sidebar-width-small));
    }

    section {
      .tiger-section {
        padding: 64px 0 42px 96px;
        display: flex;

        .tiger-section-wrapper {
          display: block;
        }
      }
    }
  }
}
</style>
