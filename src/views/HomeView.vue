<template>
  <n-layout>
    <n-layout-header>header</n-layout-header>
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
.n-layout-header,
.n-layout-footer {
  display: flex;
  background: #42b983;
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  display: flex;
  height: 100vh;
  background: rgba(128, 128, 128, 0.4);
}
</style>
