<template>
    <n-config-provider
        :theme="getDarkTheme"
        :theme-overrides="getDarkTheme === undefined ? lightThemeOverrides : darkThemeOverrides"
    >
      <div id="app" :class="{'dark': isDark}">
        <router-view />
      </div>
    </n-config-provider>
</template>
<script>
import { defineComponent, computed } from 'vue'
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
    const getDarkTheme = computed(() =>
      store.state.darkTheme === 'dark' ? darkTheme : undefined
    )
    store.commit('setTheme')
    const isDark = computed(() => store.state.darkTheme === 'dark')
    /**
     * @type import('naive-ui').GlobalThemeOverrides
     */
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