<template>
    <n-config-provider
        :theme="getDarkTheme"
        :theme-overrides="getDarkTheme === undefined ? lightThemeOverrides : darkThemeOverrides"
    >
      <div id="app">
        <router-view />
      </div>
    </n-config-provider>
</template>
<script>
import { defineComponent, computed } from 'vue'
// import darkmodejs from '@assortment/darkmodejs'
import {
  NConfigProvider,
  darkTheme,
} from 'naive-ui'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    NConfigProvider
  },
  setup() {
    const store = useStore()
    store.commit('setTheme')
    // const config = { onChange: (activeTheme) => {
    //     store.commit('saveTheme', activeTheme)
    //   } }
    // darkmodejs(config)
    if (store.state.darkTheme === 'dark') {
      document.getElementById('body').classList.add('dark')
    }
    const getDarkTheme = computed(() =>
      store.state.darkTheme === 'dark' ? darkTheme : undefined
    )
    const isDark = computed(() => store.state.darkTheme === 'dark')
    // 主题覆盖选项
    const darkThemeOverrides = {
    }
    const lightThemeOverrides = {

    }
    return {
      darkTheme,
      getDarkTheme,
      isDark,
      darkThemeOverrides,
      lightThemeOverrides
    }
  }
})
</script>
