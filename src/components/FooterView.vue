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
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import {
  NIcon,
  NButton,
} from 'naive-ui'
import {
  LogoVue,
  LogoTwitter,
} from '@vicons/ionicons5'
export default defineComponent({
  components: {
    NIcon,
    NButton,
    LogoVue,
    LogoTwitter
  }
})
</script>

<style scoped>

</style>
