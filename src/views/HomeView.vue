<template>
<n-layout>
  <n-layout-header class="flex items-center h-16">
    <div class="flex-none ml-3 lg:mr-8 flex-1 md:flex-2">
      <p class="flex text-base h-7 items-center font-black">IPFSLibrary</p>
    </div>
<!--    目录布局-->
    <div class="flex-grow flex-1 max-w-sm min-w-max md:hidden">
      <div class="flex justify-center flex-nowrap h-7 items-center text-base">
          <span class="mx-3.5">导航选项</span>
          <span class="mx-3.5">导航选项</span>
          <span class="mx-3.5">导航选项</span>
          <span class="mx-3.5">导航选项</span>
          <n-icon class="mx-3.5" size="20"><search /></n-icon>
      </div>
    </div>
<!--    注册布局-->
    <div class="flex-none mr-3 lg:mr-8 flex-1 md:flex-none">
      <div class="flex justify-end h-7 items-center">
        <div class="visible md:hidden">
          <a class="accent-pink-600">注册</a>
          <a class="ml-3">登录</a>
        </div>
        <div class="flex">
          <n-icon class="mx-3.5 visible lg:hidden" size="20"><search/></n-icon>
          <n-icon @click="menu" class="visible lg:hidden" size="20"><list /></n-icon>
        </div>
      </div>
    </div>
  </n-layout-header>
  <div class="menu flex mobile items-end pt-8 pr-3 flex-4" v-if="menuVisible">
    <span>导航选项</span>
    <span class="mt-2">导航选项</span>
    <span class="mt-2">导航选项</span>
    <span class="mt-2">导航选项</span>
    <a class="mt-2 accent-pink-600">注册</a>
    <span class="mt-2">登录</span>
  </div>
  <n-layout-content class="content">
    内容布局
    <n-input round placeholder="中" />
    <n-button type="success" class="">
      Primary
    </n-button>
  </n-layout-content>
  <n-layout-footer>
  </n-layout-footer>
</n-layout>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NIcon,
  NInput,
  NButton
} from 'naive-ui'
import {
  Search,
  List
} from '@vicons/ionicons5'

export default defineComponent({
  components: {
    // 框架组件
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NIcon,
    NInput,
    NButton,
    // NInput,
    // 图标
    Search,
    List,
  },
  setup () {
    const menuVisible = ref(false)
    const menu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {
      menuVisible,
      menu
    }
  }
})
</script>
