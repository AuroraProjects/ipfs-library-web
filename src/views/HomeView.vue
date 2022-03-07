<template>
<n-layout>
  <n-layout-header>
    <div class="logo">IPFSLibrary</div>
    <div class="menu">
      <nav>
        <n-button class="button-text" text strong>使用说明</n-button>
        <n-button class="button-text" text strong>常见问题</n-button>
        <n-button class="button-text" text strong>开源地址</n-button>
        <n-button class="button-text" text strong>
          <n-icon>
            <search />
          </n-icon>
        </n-button>
      </nav>
    </div>
    <div class="login">
      <n-button text strong>Login</n-button>
      <n-button class="register" text-color="#FF3987" text strong>Register</n-button>
    </div>
  </n-layout-header>
  <n-layout-content>
    内容
  </n-layout-content>
  <n-layout-footer>
    底部
  </n-layout-footer>
</n-layout>
</template>

<script>
import { defineComponent } from 'vue'
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NButton,
  NIcon
} from 'naive-ui'
import { Search } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    // 框架组件
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NButton,
    NIcon,
    // 图标
    Search,
  }
})
</script>

<style scoped>
/*头部布局*/
.n-layout-header {
  display: flex;
  /*background: darkgray;*/
  justify-content: space-between;
  padding-left: 4vw;
  padding-right: 4vw;
  height: 80px;
  align-items: center;
}

.logo {
  color: darkgray;
  font-size: 1.5rem;
  font-weight: 800;
}

.n-layout-header div {
  display: flex;
  /*background: #42b983;*/
  height: 30px;
  flex: 3;
  align-items: center;
}

/*头部右侧布局*/
.login {
  display: flex;
  justify-content: flex-end;
}

.register {
  margin-left: 2rem;
}

/*目录布局*/
.menu{
  display: flex;
  width: 494px;
  justify-content: center;
}
.menu nav {
  display: flex;
  /*background: antiquewhite;*/
  height: 30px;
  width: 494px;
  justify-content: center;
  align-items: center;
}
.button-text {
  font-weight: 700;
  margin: 0 0.5rem;
}

.n-layout-content {
  display: flex;
  background: darksalmon;
  height: 90vh;
}

/*底部布局*/
.n-layout-footer {
  display: flex;
  background: #42b983;
  height: 10vh;
}
</style>
