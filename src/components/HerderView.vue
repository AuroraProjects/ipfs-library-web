<template>
  <div class="flex-none ml-3 lg:mr-8 flex-1 md:flex-2">
    <p class="flex text-base h-7 items-center font-black">IPFSLibrary</p>
  </div>
  <!--目录布局-->
  <div class="flex-grow flex-1 max-w-sm min-w-max md:hidden">
    <nav class="flex justify-center flex-nowrap items-center font-semibold">
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
        <button class="flex items-center">
          <n-icon class="visible lg:hidden" size="20" @click="search"
          ><search
          /></n-icon>
        </button>
        <div @click="menuAction" class="lg:hidden burger">
          <div class="burger-bar"></div>
          <div class="burger-bar"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="mobile-menu lg:hidden">
    <div class="container">
      <nav>
        <a style="margin-top: 0" href="#">导航选项</a>
        <a href="#">导航选项</a>
        <a href="#">导航选项</a>
        <a href="#">导航选项</a>
      </nav>
    </div>
  </div>
  <!-- 搜索框遮罩-->
  <div class="modal-overlay" style="display: block">
    <div class="modal modal-search">
      <!--搜索框-->
      <div class="search-from">
        <input class="ml-5" placeholder="你想要什么?">
        <n-button style="background-color: #FF79AE" color="#FF79AE">搜索</n-button>
      </div>
    </div>
    <n-icon class="modal-close" size="24" @click="modalClose"><close/></n-icon>
  </div>
</template>

<script>
import {
  Search,
  Close
} from '@vicons/ionicons5'
import { defineComponent } from 'vue'
import {
  NIcon,
  NButton,
  darkTheme
} from 'naive-ui'
export default defineComponent({
  components: {
    Search,
    NIcon,
    NButton,
    Close
  },
  props: {
    modal: Boolean,
    menu: Boolean
  },
  emits: ['updateModal', 'closeModal', 'menuAction'],
  setup(props, { emit }) {
    const search = () => {
      emit('updateModal', true)
    }
    const modalClose = () => {
      emit('closeModal', false)
    }
    let close = false
    const menuAction = () => {
      close = !close
      emit('menuAction', close)
    }
    return {
      search,
      modalClose,
      menuAction,
      darkTheme
    }
  }
})
</script>
