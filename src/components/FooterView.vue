<template>
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
    <div class="menu-item" @click="demo">
      <n-icon size="11" v-if="!isDark" :component="Sunny" />
      <n-icon size="11" v-else :component="Moon" />
      <span class="ml-2">System theme</span>
    </div>
  </nav>
</template>

<script>
import {computed, defineComponent} from 'vue'
import {
  NIcon,
  NButton,
} from 'naive-ui'
import {
  LogoVue,
  LogoTwitter,
  Sunny,
  Moon

} from '@vicons/ionicons5'
import { useStore } from "vuex"

export default defineComponent({
  components: {
    NIcon,
    NButton,
    LogoVue,
    LogoTwitter
  },
  setup() {
    const store = useStore()
    const demo = () => {
      if (localStorage.getItem('theme') === 'dark') {
        store.commit('saveTheme', '')
      } else {
        store.commit('saveTheme', 'dark')
      }
    }
    const isDark = computed(() => store.state.darkTheme === 'dark')
    return {
      demo,
      Sunny,
      Moon,
      isDark
    }
  }
})
</script>

<style scoped>

</style>
