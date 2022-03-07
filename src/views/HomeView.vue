<template>
<n-layout>
  <n-layout-header>
    <div class="logo">IPFSLibrary</div>
    <div class="menu">
      <nav>
        <n-button class="button-text" text strong>使用说明</n-button>
        <n-button class="button-text" text strong>常见问题</n-button>
        <n-button class="button-text" text strong>开源地址</n-button>
        <n-button class="button-text" text strong>
          <n-icon>
            <search />
          </n-icon>
        </n-button>
      </nav>
    </div>
    <div class="login">
      <n-button text strong>Login</n-button>
      <n-button class="register" text-color="#FF3987" text strong>Register</n-button>
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
  NButton,
  NIcon
} from 'naive-ui'
import { Search } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    // 框架组件
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NButton,
    NIcon,
    // 图标
    Search,
  }
})
</script>

<style scoped>
</style>
