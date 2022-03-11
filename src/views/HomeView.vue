<template>
  <n-layout :class="{'modal-opened': modal}">
    <n-layout-header class="header">
      <div class="flex-none ml-3 lg:mr-8 flex-1 md:flex-2">
        <p class="flex text-base h-7 items-center font-black">IPFSLibrary</p>
      </div>
      <!--    目录布局-->
      <div class="flex-grow flex-1 max-w-sm min-w-max md:hidden">
        <nav
          class="
            flex
            justify-center
            flex-nowrap
            items-center
            font-semibold
            text-base
          "
        >
          <a class="mx-3.5" href="#">导航选项</a>
          <a class="mx-3.5" href="#">导航选项</a>
          <a class="mx-3.5" href="#">导航选项</a>
          <a class="mx-3.5" href="#">导航选项</a>
          <button class="flex items-center">
            <n-icon class="mx-3.5" size="20" @click="search"><search /></n-icon>
          </button>
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
            <button>
              <n-icon class="mx-3.5 visible lg:hidden" size="20" @click="search"
                ><search
              /></n-icon>
            </button>
            <n-icon class="visible lg:hidden" size="20"
              ><ellipsis-vertical
            /></n-icon>
          </div>
        </div>
      </div>
    </n-layout-header>
    <!--  内容布局-->
    <n-layout-content class="content">
      <div class="cover">
        <div class="cover-content">
          <div>
            <n-avatar
              round
              :size="100"
              class="avatar"
              src="https://avatars.githubusercontent.com/u/32693466?v=4"
            />
            <div>这里是网站介绍哈哈哈哈哈哈</div>
            <div class="cover-cta">
              <n-button color="#FF79AE" ghost>
                <template #icon>
                  <n-icon>
                    <logo-github />
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
              <div class="feed-calendar-month">Mar</div>
              <div class="feed-calendar-day">07</div>
            </div>
            <h2 class="feed-title">#Title</h2>
            <div class="feed-right">
              <div class="feed-visibility">
                <n-icon color="#FFC105"><star /></n-icon>
              </div>
              <div class="feed-length">datetime</div>
              <n-icon class="feed-icon" color="#999"
                ><chevron-forward
              /></n-icon>
            </div>
          </article>
          <article class="feed">
            <div class="feed-calendar">
              <div class="feed-calendar-month">Mar</div>
              <div class="feed-calendar-day">07</div>
            </div>
            <h2 class="feed-title">#Title</h2>
            <div class="feed-right">
              <div class="feed-visibility">
                <n-icon color="#FFC105"><star /></n-icon>
              </div>
              <div class="feed-length">datetime</div>
              <n-icon class="feed-icon" color="#999"
                ><chevron-forward
              /></n-icon>
            </div>
          </article>
        </div>
      </main>
      <!--  底栏布局-->
    </n-layout-content>
    <n-layout-footer class="footer">
      <div class="email">
        <form class="subscribe-from">
          <input
            placeholder="请输入您的邮箱"
            class="ml-3"
            type="text"
          />
          <n-button style="background-color: #FF79AE" color="#FF79AE" round>订阅</n-button>
        </form>
      </div>
      <div class="social">
        <n-icon size="24"><logo-vue /></n-icon>
        <n-icon size="24" class="ml-3"><logo-twitter /></n-icon>
      </div>
      <div class="copyright">Powered by <a href="#">IPFS-Library</a></div>
      <nav class="footer-nav">
        <a class="menu-item" href="#">导航</a>
        <a class="menu-item" href="#">导航</a>
        <a class="menu-item" href="#">导航</a>
        <a class="menu-item" href="#">导航</a>
      </nav>
    </n-layout-footer>
    <!-- 搜索框遮罩-->
    <div class="modal-overlay" style="display: block">
      <div class="modal modal-search">
    <!--搜索框-->
        <div class="search-from">
          <input class="ml-5" placeholder="你想要什么?">
          <n-button style="background-color: #FF79AE" color="#FF79AE">搜索</n-button>
        </div>
      </div>
      <n-icon class="modal-close" size="24" color="#fff" @click="modalClose"><close/></n-icon>
    </div>
  </n-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NIcon,
  NAvatar,
  NButton,
} from "naive-ui";
import {
  Search,
  Star,
  ChevronForward,
  EllipsisVertical,
  LogoGithub,
  LogoVue,
  LogoTwitter,
  Close
} from "@vicons/ionicons5";

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
    LogoGithub,
    LogoVue,
    LogoTwitter,
    Close
  },
  setup() {
    const modal = ref(false)
    const search = () => {
      modal.value = true
    }
    const modalClose = () => {
      modal.value = false
    }
    return {
      search,
      modal,
      modalClose
    };
  },
});
</script>
