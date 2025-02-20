<template>
  <div class="wrapper">
    <!-- 包裹整个卡片的容器 -->
    <div class="card">
      <!-- 卡片主体 -->
      <h1 id="fire">教育 指数 education</h1>
    </div>
  </div>
</template>

<style scoped>
/* 设置页面背景颜色为黑色 */
body {
  background: transparent;
}

/* 火焰文字效果 */
#fire {
  text-align: center; /* 文字居中 */
  margin: 1% auto; /* 适配不同屏幕高度，使用 vh 代替固定 px */
  font-family: "Comic Sans MS", cursive, sans-serif; /* 设置字体 */
  font-size: 30px; /* 使用相对单位适配不同屏幕宽度 */
  color: white; /* 文字颜色 */
  text-shadow: 
    0 0 2vw #63a9da, /* 外层柔和发光 */
    0.5vw -0.5vw 3vw #53a3dd,
    -1vw -1vw 4vw #4a9ed9,
    1vw -2vw 5vw #208edc,
    -1vw -3vw 6vw #0878c8,
    0 -4vw 7vw #0b4f80,
    0.5vw -4.5vw 8vw #032843; /* 深层阴影增强立体感 */
}

/* 主容器，确保居中显示 */
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* 卡片样式 */
.card {
  padding: 2vw;
  background: transparent; /* 透明背景，避免干扰文字效果 */
}
</style>
