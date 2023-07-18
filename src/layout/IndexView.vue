<script lang="ts" setup></script>

<template>
  <div class="tiger-layout">
    <!-- 遮罩层 -->
    <transition name="overlay">
      <OverlayView />
    </transition>
    <header>
      <HeaderView :data="{ name: '哈哈ceshi' }" />
    </header>
    <!-- 菜单开关 -->
    <div class="valve">
      <ValveView />
    </div>
    <!-- 坐标菜单滚动 -->
    <el-scrollbar class="aside">
      <div class="tiger-aside-scrollbar">
        <AsideView />
      </div>
    </el-scrollbar>
    <!-- 主内容区 -->
    <section>
      <div class="tiger-section">
        <div class="tiger-section-container">tiger-section-container</div>
        <div class="tiger-section-wrapper">
          <nav class="wrapper-content">wrapper-content</nav>
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
    transition: background-color 0.3s, opacity 0.25s, transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    background: var(--bg-color);
    z-index: var(--z-index-sidebar);

    :deep(.el-scrollbar__wrap) {
      border: 1px solid var(--header-border);

      .tiger-aside-scrollbar {
        height: 100%;
        padding-bottom: 5em;
      }
    }
  }

  .valve {
    display: flex;
    padding: 0.75em 32px;
    border: 1px solid var(--header-border);
    border-top: none;
  }

  section {
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

  .overlay-enter-active,
  .overlay-leave-active {
    transition: opacity var(--transition-delay) ease;
  }

  .overlay-enter-from,
  .overlay-leave-to {
    opacity: 0;
  }
}

/*
  适配样式引入
 */
@import "media.scss";
</style>
