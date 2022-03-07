<template>
<n-layout>
  <n-layout-header class="flex items-center h-16">
    <div class="flex-none ml-3 lg:mr-8 flex-1 md:flex-2">
      <p class="flex text-base h-7 items-center font-black">IPFSLibrary</p>
    </div>
<!--    目录布局-->
    <div class="flex-grow flex-1 max-w-sm min-w-max md:hidden">
      <div class="flex justify-center flex-nowrap h-7 items-center text-base">
          <span class="mx-3.5">导航选项</span>
          <span class="mx-3.5">导航选项</span>
          <span class="mx-3.5">导航选项</span>
          <span class="mx-3.5">导航选项</span>
          <n-icon @click="showMask" class="mx-3.5" size="20"><search /></n-icon>
      </div>
    </div>
<!--    注册布局-->
    <div class="flex-none mr-3 lg:mr-8 flex-1 md:flex-none">
      <div class="flex justify-end h-7 items-center">
        <div class="visible md:hidden">
          <a class="accent-pink-600">注册</a>
          <a class="ml-3">登录</a>
        </div>
        <div class="flex">
          <n-icon @click="showMask" class="mx-3.5 visible lg:hidden" size="20"><search/></n-icon>
          <n-icon @click="menu" class="visible lg:hidden" size="20"><list /></n-icon>
        </div>
      </div>
    </div>
  </n-layout-header>
  <div class="menu flex mobile items-end pt-8 pr-3 flex-4" v-if="menuVisible">
    <span>导航选项</span>
    <span class="mt-2">导航选项</span>
    <span class="mt-2">导航选项</span>
    <span class="mt-2">导航选项</span>
    <a class="mt-2 accent-pink-600">注册</a>
    <span class="mt-2">登录</span>
  </div>
  <div class="mask">
    <!-- 外层的遮罩 -->
    <div class="mask-cover flex justify-center" v-if="isShow" @click="closeByMask"></div>
    <!-- 设置动画 -->
    <transition name="fade">
      <!-- 内容区 -->
      <div class="mask-content flex bg-amber-400" v-if="isShow">
        <!-- 插槽，放置要插入到遮罩里的内容 -->
        <slot name="default">111</slot>
      </div>
    </transition>
  </div>
  <n-layout-content class="content h-14">
    内容布局
  </n-layout-content>
  <n-layout-footer>
    底部
  </n-layout-footer>
</n-layout>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NIcon
} from 'naive-ui'
import {
  Search,
  List
} from '@vicons/ionicons5'

export default defineComponent({
  components: {
    // 框架组件
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NIcon,
    // 图标
    Search,
    List
  },
  props: {
    //是否可以点击遮罩关闭，默认是
    closeOnClickModal: {
      type: Boolean,
      default: true,
    }
  },
  setup (props) {
    const menuVisible = ref(false)
    const menu = () => {
      menuVisible.value = !menuVisible.value
    }
    let isShow = ref(false);

    //打开遮罩，由外部进行调用
    let showMask = () => {
      isShow.value = true;
    };

    //关闭遮罩
    let closeMask = () => {
      isShow.value = false;
    };

    //通过点击遮罩关闭
    let closeByMask = () => {
      if (props.closeOnClickModal) {
        isShow.value = false;
      }
    };
    return {
      menuVisible,
      menu,
      showMask,
      closeMask,
      closeByMask,
      isShow
    }
  }
})
</script>

<style scoped lang="scss">
.mask-cover {
  background: rgba($color: #121212, $alpha: 0.5);
  position: fixed;
  z-index: 1;
  // 设置top、left、宽高保证全屏遮罩
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

//内容层，z-index要大于遮罩层，确保内容在遮罩上显示
.mask-content {
  position: fixed;
  z-index: 2;
}

//动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
