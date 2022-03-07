<template>
<n-layout>
  <n-layout-header class="flex items-center h-16">
    <div class="flex-none ml-8 flex-1 bg-amber-800">
      logo
    </div>
    <div class="flex-grow flex-1 bg-amber-500 max-w-sm min-w-max">
      <div class="flex justify-center flex-nowrap">
        <span class="mx-3.5">导航选项</span>
        <span class="mx-3.5">导航选项</span>
        <span class="mx-3.5">导航选项</span>
        <span class="mx-3.5">导航选项</span>
        <span class="mx-3.5">导航选项</span>
      </div>
    </div>
    <div class="flex-none mr-8 flex-1 bg-amber-600">
      <div class="flex justify-end">
        <a>注册</a>
        <a class="ml-3">登录</a>
      </div>
    </div>
  </n-layout-header>
  <n-layout-content>
    内容
  </n-layout-content>
  <n-layout-footer>
    底部
  </n-layout-footer>
</n-layout>
</template>

<script>
import { defineComponent } from 'vue'
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  // NButton,
  // NIcon
} from 'naive-ui'
// import { Search } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    // 框架组件
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    // NButton,
    // NIcon,
    // // 图标
    // Search,
  }
})
</script>

<style scoped>
</style>
