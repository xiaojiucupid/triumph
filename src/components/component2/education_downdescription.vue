<template>
  <div class="container">
    <!-- 按钮容器 -->
    <div class="btn"><a href="#">查看详细分析</a></div>
  </div>
</template>

<style scoped>
/* 导入字体 */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap");

/* 全局重置样式，去除默认边距、内边距，并启用 `box-sizing: border-box` */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

/* 页面主体样式 */
body {
  position: relative;
  display: flex;
  justify-content: center; /* 居中对齐 */
  align-items: center; /* 垂直居中 */
  min-height: 100vh; /* 让页面至少占满整个视口 */
  background: linear-gradient(to bottom, #5d326c, #350048); /* 紫色渐变背景 */
}

/* 按钮外部容器 */
.container {
  width: 100%;
  height: 100%; /* 让容器适应不同屏幕 */
  display: flex;
  flex-wrap: wrap; /* 允许按钮换行 */
  justify-content: space-around; /* 使按钮均匀分布 */
}

/* 按钮容器 */
.container .btn {
  position: relative;
  width: 90%; /* 按钮宽度设为容器的 25% */
  height: 70%; /* 高度相对于视口 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

/* 按钮样式 */
.container .btn a {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05); /* 透明白色背景 */
  box-shadow: 0 1.5vh 1.5vh rgba(0, 0, 0, 0.3); /* 轻微阴影 */
  border-bottom: 0.1vh solid rgba(255, 255, 255, 0.1);
  border-top: 0.1vh solid rgba(255, 255, 255, 0.1);
  border-radius: 15%; /* 圆角 */
  padding: 1vh;
  letter-spacing: 0.1vw; /* 文字间距 */
  text-decoration: none;
  overflow: hidden;
  color: #fff; /* 文字颜色 */
  font-weight: 400;
  z-index: 1;
  transition: 0.5s;
  backdrop-filter: blur(1vw); /* 背景模糊 */
}

/* 悬停时，增大字母间距 */
.container .btn:hover a {
  letter-spacing: 0.3vw;
}

/* 按钮光泽效果 */
.container .btn a::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
  transform: skewX(45deg) translate(0);
  transition: 0.5s;
  filter: blur(0);
}

/* 悬停时，光泽滑动 */
.container .btn:hover a::before {
  transform: skewX(45deg) translate(20vw);
}

/* 按钮上下两侧的发光条 */
.container .btn::before,
.container .btn::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3%;
  height: 2vh;
  border-radius: 50%;
  transition: 0.5s;
}

/* 按钮底部初始状态 */
.container .btn::before {
  bottom: -0.5vh;
  background: #f00;
}

/* 悬停时，底部亮光扩展 */
.container .btn:hover::before {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}

/* 按钮顶部初始状态 */
.container .btn::after {
  top: -0.5vh;
  background: #f00;
}

/* 悬停时，顶部亮光扩展 */
.container .btn:hover::after {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}

/* 不同按钮的颜色变化 */
.container .btn:nth-child(1)::before,
.container .btn:nth-child(1)::after {
  background: #ff1f71;
  box-shadow: 0 0 0.5vw #ff1f71, 0 0 1.5vw #ff1f71, 0 0 3vw #ff1f71, 0 0 6vw #ff1f71;
}

.container .btn:nth-child(2)::before,
.container .btn:nth-child(2)::after {
  background: #2db2ff;
  box-shadow: 0 0 0.5vw #2db2ff, 0 0 1.5vw #2db2ff, 0 0 3vw #2db2ff, 0 0 6vw #2db2ff;
}

.container .btn:nth-child(3)::before,
.container .btn:nth-child(3)::after {
  background: #1eff45;
  box-shadow: 0 0 0.5vw #1eff45, 0 0 1.5vw #1eff45, 0 0 3vw #1eff45, 0 0 6vw #1eff45;
}
</style>
