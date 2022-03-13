<template>
  <n-layout :class="{'modal-opened': modal, 'menu-opened': menu}" class="site">
    <n-layout-header class="header">
      <herder-view
          :modal="modal"
          :menu="menu"
          @updateModal="updateModal"
          @closeModal="closeModal"
          @menuAction="menuAction"
      />
    </n-layout-header>
    <!--  内容布局-->
    <n-layout-content class="content">
      <content-view />
    </n-layout-content>
    <!--  底栏布局-->
    <n-layout-footer class="footer">
      <footer-view />
    </n-layout-footer>
  </n-layout>
</template>

<script>
import HerderView from "@/components/HerderView"
import ContentView from "@/components/ContentView"
import FooterView from "@/components/FooterView"
import { defineComponent, ref } from "vue"
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
} from "naive-ui";

export default defineComponent({
  components: {
    HerderView,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    ContentView,
    FooterView
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
