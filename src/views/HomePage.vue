<script setup>
import charts1 from "../components/component1/charts1.vue";
import charts2 from "../components/component1/charts2.vue";
import charts3 from "../components/component1/charts3.vue";
import charts4 from "../components/component1/charts4.vue";
import charts5 from "../components/component1/charts5.vue";
import charts6 from "../components/component1/charts6.vue";
import education_chart1 from "../components/component2/education_chart1.vue";
import education_chart2 from "../components/component2/education_chart2.vue";
import education_chart3 from "../components/component2/education_chart3.vue";
import education_chart4 from "../components/component2/education_chart4.vue";
import education_chart5 from "../components/component2/education_chart5.vue";
import education_chart6 from "../components/component2/education_chart6.vue";
import education_logo from "../components/component2/education_logo.vue";
import education_updescription from "../components/component2/education_updescription.vue";
import education_downdescription from "../components/component2/education_downdescription.vue";
import people_chart1 from "../components/component3/people_chart1.vue";
import people_chart2 from "../components/component3/people_chart2.vue";
import people_chart3 from "../components/component3/people_chart3.vue";
import people_chart4 from "../components/component3/people_chart4.vue";
import people_chart5 from "../components/component3/people_chart5.vue";
import people_chart6 from "../components/component3/people_chart6.vue";
import people_chart7 from "../components/component3/people_chart7.vue";
import people_logo from "../components/component3/people_logo.vue";
import people_description from "../components/component3/people_description.vue";
import people_logo_right from "../components/component3/people_logo_right.vue";
import people_img from "../components/component3/people_img.vue";
import tech_chart1 from "../components/component4/tech_chart1.vue";
import tech_chart2 from "../components/component4/tech_chart2.vue";
import tech_chart3 from "../components/component4/tech_chart3.vue";
import tech_chart4 from "../components/component4/tech_chart4.vue";
import tech_chart5 from "../components/component4/tech_chart5.vue";
import tech_chart7 from "../components/component4/tech_chart7.vue";
import tech_description from "../components/component4/tech_description.vue";
import tech_logo from "../components/component4/tech_logo.vue";
import tech_type from "../components/component4/tech_type.vue";
import inva_chart1 from "../components/component5/inva_chart1.vue";
import inva_chart2 from "../components/component5/inva_chart2.vue";
import inva_chart3 from "../components/component5/inva_chart3.vue";
import inva_chart4 from "../components/component5/inva_chart4.vue";
import inva_description from "../components/component5/inva_description.vue";
import inva_type from "../components/component5/inva_type.vue";
import inva_logo from "../components/component5/inva_logo.vue";
import modle1 from "../components/component6/modle1.vue";
import modle2 from "../components/component6/modle2.vue";
import modle3 from "../components/component6/modle3.vue";
import modle4 from "../components/component6/modle4.vue";
import modle5 from "../components/component6/modle5.vue";
import des1 from "../components/component6/des1.vue";
import des2 from "../components/component6/des2.vue";
</script>

<template>
  <section class="component">
    <!-- 第一个主体部分 -->
    <section class="component1">
      <div class="education1">
        <div class="box1"><charts1></charts1></div>
        <div class="midium1"></div>
        <div class="box2"><charts2></charts2></div>
      </div>
      <div class="education2">
        <div class="box3"><charts3></charts3></div>
        <div class="midium2"></div>
        <div class="box4"><charts4></charts4></div>
      </div>
      <div class="education3">
        <div class="box5"><charts5></charts5></div>
        <div class="midium3"></div>
        <div class="box6"><charts6></charts6></div>
      </div>
    </section>
    <!-- 教育指标主体 -->
    <section class="component2">
      <div class="education_charts">
        <div class="education_upcharts">
          <div class="education_logo"><education_logo></education_logo></div>
          <div class="education_chart1">
            <education_chart1></education_chart1>
          </div>
          <div class="education_chart2">
            <education_chart2></education_chart2>
          </div>
          <div class="education_chart3">
            <education_chart3></education_chart3>
          </div>
        </div>
        <div class="education_downcharts">
          <div class="education_chart4">
            <education_chart4></education_chart4>
          </div>
          <div class="education_chart5">
            <education_chart5></education_chart5>
          </div>
          <div class="education_chart6">
            <education_chart6></education_chart6>
          </div>
        </div>
      </div>
      <div class="education_description">
        <div class="education_updescription">
          <education_updescription></education_updescription>
        </div>
        <div class="education_downdescription">
          <education_downdescription></education_downdescription>
        </div>
      </div>
    </section>
    <!-- 人才指标 -->
    <section class="component3">
      <div class="people_left">
        <div class="people_logo">
          <div class="people_logo_left"><people_logo></people_logo></div>
          <div class="people_logo_midium"></div>
          <div class="people_logo_right">
            <people_logo_right></people_logo_right>
          </div>
        </div>
        <div class="people_chart1"><people_chart1></people_chart1></div>
      </div>
      <div class="people_right">
        <div class="people_right_up">
          <div class="people_right_up_left">
            <div class="people_chart2"><people_chart2></people_chart2></div>
            <div class="people_chart3_7">
              <div class="people_chart3"><people_chart3></people_chart3></div>
              <div class="people_chart7"><people_chart7></people_chart7></div>
            </div>
            <div class="people_chart4"><people_chart4></people_chart4></div>
          </div>
          <div class="people_right_up_right">
            <div class="people_description">
              <people_description></people_description>
            </div>
            <div class="people_img"><people_img></people_img></div>
          </div>
        </div>
        <div class="people_right_down">
          <div class="people_chart5"><people_chart5></people_chart5></div>
          <div class="people_chart6"><people_chart6></people_chart6></div>
        </div>
      </div>
    </section>
    <!-- 科技指标 -->
    <section class="component4">
      <div class="tech_left">
        <div class="tech_logo"><tech_logo></tech_logo></div>
        <div class="tech_img"><tech_type></tech_type></div>
        <div class="tech_chart4"><tech_chart4></tech_chart4></div>
      </div>
      <div class="tech_middle">
        <div class="tech_chart1_2_3">
          <div class="tech_chart1"><tech_chart1></tech_chart1></div>
          <div class="tech_chart2"><tech_chart2></tech_chart2></div>
          <div class="tech_chart3"><tech_chart3></tech_chart3></div>
        </div>
        <div class="tech_chart7"><tech_chart7></tech_chart7></div>
      </div>
      <div class="tech_right">
        <div class="tech_description">
          <tech_description></tech_description>
        </div>
        <div class="tech_type"></div>
        <div class="tech_chart5"><tech_chart5></tech_chart5></div>
      </div>
    </section>
    <!-- 创新指标 -->
    <section class="component5">
      <div class="inva_left">
        <div class="inva_left_up">
          <div class="inva_logo"><inva_logo></inva_logo></div>
          <div class="inva_chart1"><inva_chart1></inva_chart1></div>
          <div class="inva_chart2"><inva_chart2></inva_chart2></div>
        </div>
        <div class="inva_left_down">
          <div class="inva_chart3"><inva_chart3></inva_chart3></div>
          <div class="inva_chart4"><inva_chart4></inva_chart4></div>
        </div>
      </div>
      <div class="inva_right">
        <div class="inva_description">
          <inva_description></inva_description>
        </div>
        <div class="inva_type"><inva_type></inva_type></div>
      </div>
    </section>
    <!-- 底部导航栏 -->
    <section class="bottomNav">
      <div class="bottom_up">
        <div class="modle1"><modle1></modle1></div>
        <div class="modle2"><modle2></modle2></div>
        <div class="modle3"><modle3></modle3></div>
        <div class="modle4"><modle4></modle4></div>
        <div class="modle5"><modle5></modle5></div>
      </div>
      <div class="bottom_down">
        <div class="des1"><des1></des1></div>
        <div class="des2"><des2></des2></div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.component {
  display: flex;
  height: 3000px;
  max-width: 2000px;
  flex-direction: column;
  background-position: center; /* 图片居中 */
  background-repeat: no-repeat; /* 防止图片重复 */
}
.component1 {
  display: flex;
  height: 15%;
  width: 100%;
  margin: 0 auto;
  background-size: cover; /* 确保图片充满容器 */
  background-image: url("@/assets/img/背景.jpg");
  /* 上右下左 */
  padding: 3px 1px 10px 1px;
}
.education1 {
  display: flex;
  width: 30%;

  flex-direction: column;
  padding: 5px;
}
.education2 {
  display: flex;
  width: 40%;
  flex-direction: column;
  padding: 5px;
}
.education3 {
  display: flex;
  width: 30%;
  flex-direction: column;
  padding: 5px;
}
/* 第一部分 */
.box1 {
  height: 49%;
  background-color: #e5eaf3;
  padding: 5px;
  border-radius: 3%;
}
.box2 {
  height: 49%;
  background-color: #e5eaf3;
  border-radius: 3%;
}
/* 第二部分 */
.box3 {
  height: 69%;
  color: #a3a6ad;
  padding: 5px;
}
.box4 {
  height: 29%;
  background-color: #e5eaf3;
  border-radius: 3%;
}
/* 第三部分 */
.box5 {
  height: 49%;
  background-color: #e5eaf3;
  padding: 5px;
  border-radius: 3%;
}
.box6 {
  height: 49%;
  background-color: #e5eaf3;
  border-radius: 3%;
}

.midium1 {
  height: 2%;
}
.midium2 {
  height: 2%;
}
.midium3 {
  height: 2%;
}

.component2 {
  display: flex;
  height: 15%;
  width: 100%;
  margin: 0 auto;
  background-size: cover; /* 确保图片充满容器 */
  background-image: url("@/assets/img/component2.jpg");
  padding-top: 2px;
  padding-bottom: 20px;
}
.education_charts {
  height: 100%;
  width: 80%;
  background-color: transparent;
}
.education_description {
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
}
.education_upcharts {
  height: 50%;
  width: 100%;
  display: flex;
}
.education_logo {
  width: 15%;
  background-color: transparent;
}
.education_chart1 {
  width: 33%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);

  margin-left: 1px;
  margin-right: 1px;
  border-radius: 3%;
}
.education_chart2 {
  width: 33.4%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 3%;
}
.education_chart3 {
  width: 33%;
  margin-left: 1px;
  margin-right: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.education_downcharts {
  height: 49.5%;
  width: 100%;
  display: flex;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 3%;
}
.education_chart4 {
  width: 30%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 3%;
}
.education_chart5 {
  width: 30%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 3%;
}
.education_chart6 {
  width: 40%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 3%;
}
.education_updescription {
  height: 80%;
  width: 100%;
  background-color: transparent;
}
.education_downdescription {
  height: 20%;
  width: 100%;
  background-color: transparent;
}
/* 第三部分：人才指数 */

.component3 {
  display: flex;
  height: 25%;
  width: 100%;
  margin: 0 auto;
  background-size: cover; /* 确保图片充满容器 */
  background-image: url("@/assets/img/component2.jpg");
  /* 上右下左 */
  padding: 3px 1px 20px 1px;
}
.people_left {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-size: cover; /* 确保图片充满容器 */
  background-image: url("@/assets/img/背景.jpg");
}
.people_right {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
}
.people_logo {
  display: flex;
  flex-direction: row; /* 保持横向排列 */
  height: 30%; /* 容器高度 */
  width: 100%;
  background-color: transparent;
  margin-top: 1px;
}

.people_logo_left,
.people_logo_midium,
.people_logo_right {
  height: 100%; /* 确保子元素填充父容器的高度 */
}

.people_logo_left {
  width: 40%; /* 占父容器的 40% */
}

.people_logo_midium {
  width: 1%; /* 占父容器的 1% */
}

.people_logo_right {
  width: 59%; /* 占父容器的 59% */
}

.people_chart1 {
  height: 70%;
  width: 100%;
  background: radial-gradient(circle, #d7d8db, #d2d9ee, #cfd9e8);
  border-radius: 3%;
  margin-top: 1px;
  margin-bottom: 1px;
}
.people_right_up {
  display: flex;
  height: 70%;
  width: 100%;
  background-color: transparent;
}
.people_right_down {
  display: flex;
  height: 30%;
  width: 100%;
}
.people_chart5 {
  width: 40%;
  height: 100%;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
  margin-bottom: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.people_chart6 {
  width: 60%;
  height: 100%;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
  margin-bottom: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.people_right_up_left {
  display: flex;
  flex-direction: column;
  width: 71.5%;
  height: 100%;
  margin-right: 1px;
}

.people_right_up_right {
  display: flex;
  width: 28.5%;
  flex-direction: column;
  height: 100%;
}
.people_description {
  height: 80%;
  width: 100%;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
  background-color: transparent;
}
.people_img {
  height: 20%;
  width: 100%;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
}
.people_chart2 {
  height: 33%;
  width: 100%;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.people_chart3_7 {
  display: flex;
  height: 34%;
  width: 100%;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
  margin-bottom: 2px;
}

.people_chart3 {
  height: 100%;
  width: 60%;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.people_chart7 {
  height: 100%;
  width: 40%;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.people_chart4 {
  height: 33%;
  width: 100%;
  margin-top: 1px;
  margin-left: 1px;
  margin-right: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
/* component4 */
.component4 {
  display: flex;
  height: 15%;
  width: 100%;
  background-size: cover; /* 确保图片充满容器 */
  background-image: url("@/assets/img/component2.jpg");
  margin-top: 1px;
  padding-bottom: 10px;
}
.tech_left {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  margin-right: 1px;
}
.tech_middle {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  margin-right: 1px;
}
.tech_right {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
}
.tech_logo {
  height: 20%;
  width: 100%;
  background-color: transparent;
  margin-bottom: 1px;
}
.tech_img {
  height: 30%;
  width: 100%;
  background-color: #375386;
  margin-bottom: 1px;
}
.tech_chart4 {
  height: 50%;
  width: 100%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
  margin-bottom: 1px;
}
.tech_chart1_2_3 {
  display: flex;
  height: 30%;
  width: 100%;
}
.tech_chart1 {
  width: 33.3%;
  height: 100%;
  margin-right: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.tech_chart2 {
  width: 33.3%;
  height: 100%;
  margin-right: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.tech_chart3 {
  width: 33.3%;
  height: 100%;
  margin-right: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.tech_chart7 {
  height: 70%;
  width: 100%;
  margin: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}
.tech_description {
  height: 50%;
  width: 100%;
  margin-top: 1px;
  background-color: transparent;
}
.tech_type {
  height: 0;
  width: 100%;
  margin: 1px;
  background-color: transparent;
}
.tech_chart5 {
  height: 50%;
  width: 100%;
  margin: 1px;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
}

/* component5 */
.component5 {
  display: flex;
  height: 15%;
  width: 100%;
  background-size: cover; /* 确保图片充满容器 */
  background-image: url("@/assets/img/component2.jpg");
}
.inva_left {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 1px;
}
.inva_right {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.inva_left_up {
  display: flex;
  height: 50%;
  width: 100%;
  margin-top: 1px;
}
.inva_left_down {
  display: flex;
  height: 50%;
  width: 100%;
  margin-bottom: 1px;
  margin-top: 1px;
}

.inva_logo {
  width: 20%;
  height: 100%;
  background-color: transparent;
  margin-right: 1px;
}
.inva_chart1 {
  width: 40%;
  height: 100%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
  margin-right: 1px;
}
.inva_chart2 {
  width: 40%;
  height: 100%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
  margin-right: 1px;
}
.inva_chart3 {
  width: 20%;
  height: 100%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
  margin-right: 1px;
  margin-bottom: 1px;
}
.inva_chart4 {
  width: 80%;
  height: 100%;
  background: radial-gradient(circle, #e5eaf3, #d2d9ee, #cfd9e8);
  border-radius: 3%;
  margin-right: 1px;
  margin-bottom: 1px;
}
.inva_description {
  height: 80%;
  width: 100%;
  background-color: transparent;
  margin-left: 1px;
  margin-top: 1px;
  margin-bottom: 1px;
}
.inva_type {
  height: 20%;
  width: 100%;
  background-color: transparent;
  margin-left: 1px;
  margin-bottom: 1px;
}
/* component6 */
.bottomNav {
  height: 15%;
  width: 100%;
  background-color: rgb(36, 30, 30);
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
.bottom_up {
  height: 90%;
  width: 100%;
  display: flex;
}
.bottom_down {
  height: 10%;
  width: 100%;
  background-color: transparent;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
}
.modle1 {
  width: 30%;
  height: 100%;
  background-color: black;
  margin-right: 1px;
}
.modle2 {
  width: 15%;
  height: 100%;
  margin-right: 1px;
  background-color: black;
  padding-left: 13px;
}
.modle3 {
  width: 15%;
  height: 100%;
  margin-right: 1px;
  background-color: black;
  padding-left: 13px;
}
.modle4 {
  width: 15%;
  height: 100%;
  margin-right: 1px;
  background-color: black;
  padding-left: 13px;
}
.modle5 {
  width: 25%;
  height: 100%;
  margin-right: 1px;
  background-color: black;
  padding-left: 13px;
}
</style>
