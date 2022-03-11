<template>
  <n-layout :class="{'modal-opened': modal, 'menu-opened': menu}">
    <n-layout-header class="header">
      <HerderView
          :modal="modal"
          :menu="menu"
          @updateModal="updateModal"
          @closeModal="closeModal"
          @menuAction="menuAction"
      ></HerderView>
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
  </n-layout>
</template>

<script>
import HerderView from "@/components/HerderView"
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
  Star,
  ChevronForward,
  LogoGithub,
  LogoVue,
  LogoTwitter
} from "@vicons/ionicons5";

export default defineComponent({
  components: {
    HerderView,
    // 框架组件
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NIcon,
    NAvatar,
    NButton,
    // 图标
    Star,
    ChevronForward,
    LogoGithub,
    LogoVue,
    LogoTwitter
  },
  setup() {
    const modal = ref(false)
    // 下发子组件的数据
    const updateModal = (bool) => {
      modal.value = bool
    }
    const closeModal = (bool) => {
      modal.value = bool
    }
    const menu = ref(false)
    const menuAction = (bool) => {
      menu.value = bool
    }
    return {
      modal,
      menu,
      menuAction,
      updateModal,
      closeModal
    }
  }
})
</script>
