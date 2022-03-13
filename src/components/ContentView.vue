<template>
  <div class="cover">
    <div class="cover-content">
      <div>
        <n-avatar
            round
            :size="100"
            class="avatar"
            :src="avatar"
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
          <n-button ghost class="ml-2">Login</n-button>
        </div>
      </div>
    </div>
  </div>
  <main>
    <div class="content-post">
      <article class="feed cursor-pointer" v-for="(item, index) of data" :key="index">
        <div class="feed-calendar">
          <div class="feed-calendar-month">#NUMBER</div>
          <div class="feed-calendar-day">{{ item.id }}</div>
        </div>
        <h2 class="feed-title">《{{ item.title }}》</h2>
        <div class="feed-right">
          <div class="feed-visibility">
            <n-icon color="#FFC105"><star /></n-icon>
          </div>
          <div class="feed-length">{{ item.addDate }}</div>
          <n-icon class="feed-icon" color="#999"><chevron-forward/></n-icon>
        </div>
      </article>
    </div>
  </main>
  <div class="loading">
    <n-spin class="mb-10 mt-10" stroke="#FF1A75" v-if="loading"></n-spin>
    <n-button class="mb-3 mt-10" ghost @click="more">LOAD MORE</n-button>
  </div>
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
  NSpin
} from 'naive-ui'
import {defineComponent, ref} from 'vue'
// 演示数据
const data = [
  {
    id: 1,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 2,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 3,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 4,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 2,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 3,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 4,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 2,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 3,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 4,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 2,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 3,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 4,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 2,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 3,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  },
  {
    id: 4,
    title: '人民的名义',
    addDate: '2022-01-01',
    ipfsKey: '#eeeeeeeeeeeee'
  }
]
export default defineComponent({
  components: {
    Star,
    ChevronForward,
    LogoGithub,
    NAvatar,
    NIcon,
    NButton,
    NSpin
  },
  setup () {
    const avatar = ref("https://avatars.githubusercontent.com/u/32693466?v=4")
    const loading = ref(false)
    const more = () => {
      loading.value = true
    }
    return {
      avatar,
      data,
      loading,
      more
    }
  }
})
</script>

<style scoped lang="sass">
// 结构选择器用于分割列表
article:nth-child(5n)
  margin-top: 3rem
</style>
