<template>
  <div>
    <section class="hero" v-for="(hero, index) in heroes" :key="index">
      <div class="hero-inner" :id="'section-' + index">
        <figure></figure>
        <h2 class="hero__title">{{ hero.title }}</h2>
      </div>
    </section>
    
    <section class="content">
      <article class="content__inner">
        <h1 class="content__title">Some Happy Little Text</h1>
        <h3 class="content__author">By Bob Ross</h3>
        <p v-for="(paragraph, index) in contentParagraphs" :key="index">{{ paragraph }}</p>
        <blockquote>When you do it your way you can go anywhere you choose.</blockquote>
        <p>Let's get wild today. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. This is probably the greatest thing to happen in my life - to be able to share this with you.</p>
        <p>I'm a water fanatic. I love water. This is gonna be a happy little seascape. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Let's put a touch more of the magic here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue.</p>
        <p>And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. Let all these things just sort of happen. Don't fight it, use what happens. Let's put some happy little bushes on the other side now.</p>
        <blockquote>Don't fight it, use what happens.</blockquote>
        <p>If we're going to have animals around we all have to be concerned about them and take care of them. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. Anytime you learn something your time and energy are not wasted. This is your world. We want to use a lot pressure while using no pressure at all. Just let go - and fall like a little waterfall.</p>
        <p>Let's build some happy little clouds up here. Everyone is going to see things differently - and that's the way it should be. Let's do that again. A tree needs to be your friend if you're going to paint him. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it.</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroes: [
        { title: 'Explore our world' },
        { title: 'View all its beauty' },
        { title: 'Take lots of photos' },
        { title: 'Each one of them pretty' }
      ],
      contentParagraphs: [
        "A thin paint will stick to a thick paint. The shadows are just like the highlights, but we're going in the opposite direction. When you do it your way you can go anywhere you choose.",
        "You have to make almighty decisions when you're the creator. When you buy that first tube of paint it gives you an artist license. There we go. The little tiny Tim easels will let you down. Let's just drop a little Evergreen right here.",
        "Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. Just pretend you are a whisper floating across a mountain. This is your world, whatever makes you happy you can put in it. Go crazy.",
        "The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. We'll play with clouds today. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. Don't kill all your dark areas - you need them to show the light. We don't want to set these clouds on fire. Every day I learn."
      ]
    };
  }
};
</script>

<style scoped>
/* 引入 Google 字体 */
@import url("https://fonts.googleapis.com/css?family=Courgette|Roboto");

* {
  box-sizing: border-box; /* 设置所有元素的盒子模型为 border-box，即包含 padding 和 border 在内的宽高计算方式 */
}

/* 段落样式 */
p {
  font-family: "Roboto", sans-serif; /* 设置段落文字的字体为 Roboto */
  font-size: 1.25rem; /* 设置字体大小为 1.25rem (相对于根元素的字体大小) */
  line-height: 1.5; /* 设置行高为字体大小的 1.5 倍 */
}

/* 引用块样式 */
blockquote {
  position: relative; /* 设置相对定位，为了定位伪元素 */
  padding-left: 1.5rem; /* 设置左边距 */
  font-family: "Courgette", serif; /* 设置字体为 Courgette，或默认的 serif 字体 */
  font-size: 2rem; /* 设置字体大小为 2rem */
  line-height: 1.25; /* 设置行高为字体大小的 1.25 倍 */
  letter-spacing: -0.05rem; /* 设置字母间距 */
}

/* 引用块的伪元素（用于装饰） */
blockquote:before {
  content: ""; /* 插入一个空内容，作为装饰元素 */
  position: absolute; /* 绝对定位相对于 blockquote */
  top: 0; /* 顶部对齐 */
  left: 0; /* 左边对齐 */
  width: 6px; /* 设置宽度为 6px */
  height: 100%; /* 高度占满整个父元素的高度 */
  background-color: #A9DFBF; /* 背景色为淡绿色 */
  border-radius: 60px; /* 设置圆角边缘 */
}

/* 图片元素的样式 */
figure {
  display: flex; /* 设置为 Flex 布局 */
  position: fixed; /* 固定定位，相对于视口固定 */
  top: 0; /* 顶部对齐视口顶部 */
  left: 0; /* 左边对齐视口左边 */
  width: 100%; /* 宽度占满整个视口宽度 */
  height: 100%; /* 高度占满整个视口高度 */
  background-size: cover; /* 背景图片尺寸覆盖整个元素区域 */
}

/* hero 类的样式 */
.hero {
  position: relative; /* 相对定位，为了定位子元素 */
  width: 100%; /* 宽度占满整个父容器 */
  height: 100%; /* 高度占满整个父容器 */
}

/* 根据 hero 子元素的不同，设置不同的背景图片 */
.hero:nth-child(1) figure {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1506260408121-e353d10b87c7.jpg");
}
.hero:nth-child(2) figure {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1506744038136-46273834b3fb.jpg");
}
.hero:nth-child(3) figure {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1523712999610-f77fbcfc3843.jpg");
}
.hero:nth-child(4) figure {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1501785888041-af3ef285b470.jpg");
}

/* hero 内部元素的样式 */
.hero-inner {
  position: absolute; /* 绝对定位相对于父容器 */
  overflow: hidden; /* 隐藏溢出的部分 */
  width: 100%; /* 宽度占满父容器 */
  height: 100%; /* 高度占满父容器 */
  clip: rect(0, auto, auto, 0); /* 使用 clip 属性来裁剪元素 */
}

/* 针对支持 touch 的浏览器，去除 clip 属性，使用 clip-path 进行裁剪 */
@supports (-webkit-overflow-scrolling: touch) {
  .hero-inner {
    clip: unset; /* 去除 clip */
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); /* 使用 clip-path 来裁剪 */
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); /* 兼容标准 */
  }
}

/* hero 标题样式 */
.hero__title {
  display: flex; /* 使用 Flex 布局使标题居中 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  position: fixed; /* 固定定位 */
  top: 0; /* 顶部对齐 */
  left: 0; /* 左边对齐 */
  padding: 0 1rem; /* 设置左右内边距 */
  width: 100%; /* 宽度占满父容器 */
  height: 100%; /* 高度占满父容器 */
  color: white; /* 设置字体颜色为白色 */
  font-family: "Courgette", serif; /* 设置字体 */
  font-size: 8vw; /* 字体大小为视口宽度的 8% */
  letter-spacing: -0.125rem; /* 设置字母间距 */
  text-align: center; /* 设置文本居中对齐 */
}

/* 响应式设计：在屏幕宽度大于等于 1200px 时，修改标题字体大小 */
@media (min-width: 1200px) {
  .hero__title {
    font-size: 6rem; /* 在大屏幕上设置标题字体大小为 6rem */
  }
}

/* 内容部分样式 */
.content {
  position: relative; /* 相对定位 */
  margin: 0 auto 8rem; /* 设置底部外边距 */
  padding: 2rem; /* 设置内边距 */
}

/* 内容部分上方斜角装饰 */
.content:before {
  content: ""; /* 插入一个空内容 */
  display: block; /* 显示为块级元素 */
  position: absolute; /* 绝对定位 */
  top: -100px; /* 设定上边距 */
  left: 0; /* 左对齐 */
  width: 100%; /* 宽度占满父容器 */
  height: 100px; /* 高度为 100px */
  background-color: white; /* 背景颜色为白色 */
  z-index: 99; /* 设置较高的层级 */
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%); /* 使用 clip-path 进行裁剪 */
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%); /* 设置裁剪路径 */
}

/* 内容内的文章样式 */
.content__inner {
  margin: 0 auto; /* 水平居中 */
  max-width: 700px; /* 设置最大宽度为 700px */
}

/* 各个段落之间的间距 */
.content__inner > * + * {
  margin-top: 1.5rem; /* 设置段落之间的间距 */
}

/* 引用块的 margin */
.content__inner > blockquote {
  margin: 3rem 0; /* 设置引用块上下的外边距 */
}

/* 内容标题样式 */
.content__title {
  font-family: "Courgette", serif; /* 设置标题字体 */
  font-size: 3rem; /* 设置字体大小 */
  line-height: 1.25; /* 设置行高 */
  letter-spacing: -0.125rem; /* 设置字母间距 */
  text-align: center; /* 设置文本居中 */
}

/* 响应式设计：在屏幕宽度大于等于 600px 时，修改内容标题字体大小 */
@media (min-width: 600px) {
  .content__title {
    font-size: 4rem; /* 修改内容标题的字体大小 */
  }
}

/* 作者信息样式 */
.content__author {
  display: flex; /* 使用 Flex 布局 */
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 左右分散对齐 */
  margin-bottom: 4rem; /* 底部外边距 */
  width: 100%; /* 宽度占满父容器 */
  font-family: "Courgette", serif; /* 设置字体 */
  font-size: 1.5rem; /* 字体大小 */
  letter-spacing: -0.125rem; /* 字母间距 */
  text-align: center; /* 文本居中 */
}

/* 作者信息的左侧分隔线样式 */
.content__author:before,
.content__author:after {
  content: ""; /* 空内容 */
  flex: 1; /* 占满可用空间 */
  height: 2px; /* 设置分隔线的高度 */
  background-color: #A9DFBF; /* 设置分隔线的颜色 */
}

/* 作者信息左侧分隔线的右侧间距 */
.content__author:before {
  margin-right: 1rem; /* 设置右边距 */
}

/* 作者信息右侧分隔线的左侧间距 */
.content__author:after {
  margin-left: 1rem; /* 设置左边距 */
}
</style>
