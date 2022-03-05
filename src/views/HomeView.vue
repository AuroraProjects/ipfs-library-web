<template>
  <n-layout>
    <n-layout-header>
      <div class="header-left-logo">
        <span>IPFSLibrary</span>
      </div>
      <div class="header-options">
        <span class="menu">会员计划</span>
        <span class="menu">会员计划</span>
        <span class="menu">会员计划</span>
        <span class="menu">会员计划</span>
        <span class="menu">会员计划</span>
      </div>
    </n-layout-header>
    <n-layout-content content-style="padding: 24px;">
      content
    </n-layout-content>
    <n-layout-footer>footer</n-layout-footer>
  </n-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'

export default defineComponent({
  components: {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter
  }
})
</script>

<style scoped>
.n-layout-header {
  display: flex;
  background: gray;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(1130px + 8vw);
  padding: 24px 4vw;
  width: 100%;
  align-items: center;
  height: 80px;
}

.n-layout-footer {
  display: flex;
  background: #42b983;
}

.header-left-logo {
  display: flex;
  flex: 2;
}

.header-options {
  align-items: center;
  display: flex;
}

.header-options {
  font-weight: 700;
  margin: 0 1.5rem;
}

.menu {
  font-weight: 700;
  margin: 0 1.5rem;
}

.n-layout-content {
  display: flex;
  height: 100vh;
  background: rgba(128, 128, 128, 0.4);
}
</style>
