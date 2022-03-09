<template>
<n-layout>
  <n-layout-header class="header">
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
          <a href="#" class="text-pink-500">Register</a>
          <a href="#" class="ml-3">Login</a>
        </div>
        <div class="flex">
          <button><n-icon class="mx-3.5 visible lg:hidden" size="20"><search/></n-icon></button>
          <n-icon @click="menu" class="visible lg:hidden" size="20"><ellipsis-vertical /></n-icon>
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
        <a href="#">Login</a>
        <a href="#" class="text-pink-500">Register</a>
      </nav>
    </div>
  </div>
<!--  内容布局-->
  <n-layout-content class="content">
    <div class="cover">
      <div class="cover-content">
        <div>
          <n-avatar round :size="100" class="avatar"
                    src="https://avatars.githubusercontent.com/u/32693466?v=4"
          />
          <div>
            这里是网站介绍哈哈哈哈哈哈
          </div>
          <div class="cover-cta">
            <n-button color="#FF79AE" ghost>
              <template #icon>
                <n-icon>
                  <logo-github/>
                </n-icon>
              </template>
              Github
            </n-button>
            <n-button color="#000" ghost class="ml-2">Login</n-button>
          </div>
        </div>
      </div>
    </div>
    <main>
      <div class="content-post">
        <article class="feed">
          <div class="feed-calendar">
            <div class="feed-calendar-month"> Mar </div>
            <div class="feed-calendar-day"> 07 </div>
          </div>
          <h2 class="feed-title">#Title</h2>
          <div class="feed-right">
            <div class="feed-visibility"><n-icon color="#FFC105"><star /></n-icon></div>
            <div class="feed-length"> datetime </div>
            <n-icon class="feed-icon" color="#999"><chevron-forward /></n-icon>
          </div>
        </article>
      </div>
    </main>
<!--  底栏布局-->
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
  NAvatar,
  NButton,
} from 'naive-ui'
import {
  Search,
  Star,
  ChevronForward,
  EllipsisVertical,
  LogoGithub
} from '@vicons/ionicons5'

export default defineComponent({
  components: {
    // 框架组件
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NIcon,
    NAvatar,
    NButton,
    // 图标
    Search,
    Star,
    ChevronForward,
    EllipsisVertical,
    LogoGithub
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
