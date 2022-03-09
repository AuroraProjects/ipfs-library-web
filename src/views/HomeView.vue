<template>
<n-layout class="menu-open">
  <n-layout-header class="flex items-center h-16">
    <div class="flex-none ml-3 lg:mr-8 flex-1 md:flex-2">
      <p class="flex text-base h-7 items-center font-black">IPFSLibrary</p>
    </div>
<!--    目录布局-->
    <div class="flex-grow flex-1 max-w-sm min-w-max md:hidden">
      <nav class="flex justify-center flex-nowrap h-7 items-center text-base">
          <a class="mx-3.5" href="#">导航选项</a>
          <a class="mx-3.5" href="#">导航选项</a>
          <a class="mx-3.5" href="#">导航选项</a>
          <a class="mx-3.5" href="#">导航选项</a>
          <button class="flex items-center"><n-icon class="mx-3.5" size="20"><search /></n-icon></button>
      </nav>
    </div>
<!--    注册布局-->
    <div class="flex-none mr-3 lg:mr-8 flex-1 md:flex-none text-base">
      <div class="flex justify-end h-7 items-center">
        <div class="visible md:hidden">
          <a href="#" class="text-pink-500">注册</a>
          <a href="#" class="ml-3">登录</a>
        </div>
        <div class="flex">
          <button><n-icon class="mx-3.5 visible lg:hidden" size="20"><search/></n-icon></button>
          <n-icon @click="menu" class="visible lg:hidden" size="20"><list /></n-icon>
        </div>
      </div>
    </div>
  </n-layout-header>
  <div class="mobile-menu lg:hidden" v-if="menuVisible">
    <div class="container">
      <nav class="mobile-nav">
        <a href="#">导航选项</a>
        <a href="#">导航选项</a>
        <a href="#">导航选项</a>
        <a href="#">导航选项</a>
        <a href="#">注册</a>
        <a href="#">登录</a>
      </nav>
    </div>
  </div>
  <n-layout-content class="content">
    内容布局
    内容布局
    内容布局
    内容布局
    内容布局
  </n-layout-content>
  <n-layout-footer class="footer">
    <div>底部信息</div>
    <div>底部信息</div>
    <div>底部信息</div>
    <div>底部信息</div>
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
