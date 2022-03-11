<template>
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
</template>

<script>
import {
  Star,
  ChevronForward,
  LogoGithub
} from '@vicons/ionicons5'
import {
  NAvatar,
  NIcon,
  NButton,
} from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Star,
    ChevronForward,
    LogoGithub,
    NAvatar,
    NIcon,
    NButton,
  }
})
</script>

<style scoped>

</style>
