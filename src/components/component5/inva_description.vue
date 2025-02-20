<template>
  <div class="father_div">
    <a href="https://codepen.io/uiswarup/pen/XWGeJdy" target="_blank">
      <div class="container">
        <div class="background-img">
          <div class="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h2>My animated Border</h2>
              <p>
                <a
                  >All our modules are designed to play nicely with responsive
                  of course. At the end of the day it comes down to the theme
                  you use - our code doesn't get in your way.</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scope>
.father_div {
  height: 100%;
  width: 100%;
}
.container {
  height: 100%;
  width: 100%;
  padding-top: 1px;
  padding-bottom: 1px;
}
body {
  background-color: #111845;
}

.background-img {
  background-image: url("https://3.bp.blogspot.com/-piZWCW2uUbg/W2fPXxkWZgI/AAAAAAAAOu0/eydmMjTIqcwLMHEEr2H7imqoRTxMw4o9QCLcBGAs/s1600/among_trees_night_dribbble.png");
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #2a3cad;
  border-radius: 4px;
  box-shadow: 0px 0px 5px #2a3cad;
  position: relative;
}

.content h2 {
  font-size: 19px;
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111845a6;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 1 1px 1px rgb(23, 32, 90);
  border: 2px solid #2a3cad;
  color: white;
  padding: 20px;
}

.box:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.5s;
  pointer-events: none;
}

.box:hover:before {
  left: -50%;
  transform: skewX(-5deg);
}

.box .content {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border: 1px solid #f0a591;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5);
}

.box span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}

.box span:nth-child(1) {
  transform: rotate(0deg);
}

.box span:nth-child(2) {
  transform: rotate(90deg);
}

.box span:nth-child(3) {
  transform: rotate(180deg);
}

.box span:nth-child(4) {
  transform: rotate(270deg);
}

.box span:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #50dfdb;
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.1% {
    transform: scaleX(1);
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
