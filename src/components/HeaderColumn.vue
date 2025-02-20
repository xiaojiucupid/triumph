<script setup>
import { useRouter } from "vue-router";

const router = useRouter();



const openInNewTab = () => {
  window.open('http://localhost:8082/#/', '_blank');
};
</script>

<template>
  <el-menu
    :default-active="activeName"
    class="headers"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
  >
    <!-- 左侧部分 -->
    <div class="left-section">
      <div class="left-section">
        <!-- 左侧部分：图片 -->
        <a href="#HomePage" class="header-link">
          <img
            src="../assets/lg.webp"
            class="header_img"
            alt="Image Description"
            style="width: 60px; height: 60px"
          />
        </a>
      </div>

      <div>
        <el-menu-item
          name="home"
          class="header_title"
          @click="router.push('/home')"
        >
          面向新质生产力的智能化数字服务平台
        </el-menu-item>
      </div>
    </div>

    <!-- 右侧部分 -->
    <div class="right-section">
      <el-menu-item
        name="products"
        class="header_product"
        style="margin-right: 60px"
        @click="router.push('/products')"
      >
        产品选择
      </el-menu-item>
      <el-menu-item
        name="resources"
        class="header_resource"
        style="margin-right: 60px"
        @click="openInNewTab"
      >
        资源展示
      </el-menu-item>

      <el-menu-item
        name="resources"
        class="header_about"
        style="margin-right: 60px"
        @click="router.push('/about')"
      >
        关于我们
      </el-menu-item>
      <el-menu-item
        name="analysis"
        class="header_analyse"
        style="margin-right: 90px"
        @click="router.push('/analyse')"
      >
        开始分析
      </el-menu-item>
      <a href="/login" class="header-link">
        <span class="circle"> 登录</span>
      </a>
    </div>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeName: "home", // 默认选中首页
    };
  },
  methods: {
    handleSelect(name) {
      this.activeName = name; // 更新选中的菜单项
      console.log("选中菜单项：", name);
    },
  },
};
</script>

<style scope>
/* 父容器设置为 flex 布局 */
.headers {
  display: flex;
  justify-content: space-between; /* 左右两部分之间的间距 */
  align-items: center;
  background-color: #cfd3dc;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
  padding: 0px;
  pointer-events: auto; /* 确保父容器可以响应点击事件 */
}

/* 左侧菜单项的样式 */
.left-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left-section .header_img {
  margin-right: 30px; /* 图片与标题之间的间距 */
}

.left-section .header_title {
  font-size: 16px;
}
.header_img {
  margin-bottom: 1px;
  padding-left: 0%;
}

/* 右侧菜单项的样式 */
.right-section {
  display: flex;
  align-items: center;
}

.right-section .el-menu-item {
  margin-right: 30px;
  cursor: pointer; /* 确保可点击 */
}

/* 右侧菜单项样式 */
.header-link {
  margin-right: 10px;
  display: inline-block;
  text-decoration: none; /* 去掉默认的链接下划线 */
  cursor: pointer; /* 设置为可点击的样式 */
}

/* 圆形按钮样式 */
.header-link .circle {
  display: inline-block;
  padding: 15px 10px; /* 设置内边距，使得按钮形成圆形 */
  border-radius: 50%; /* 设置为圆形 */
  background-color: #a3a6ad; /* 圆形的背景颜色 */
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 1; /* 确保文字居中 */
  transition: background-color 0.3s ease; /* 背景颜色变化过渡 */
}

/* 圆形按钮的 hover 效果 */
.header-link:hover .circle {
  background-color: #6c6e72; /* hover 时背景颜色变化 */
}

.el-menu-item {
  cursor: pointer; /* 显示为手指形状 */
}

/* 增加一个留白，使得菜单不会遮挡下面的内容 */
.content {
  padding-top: 5px;
}
</style>
