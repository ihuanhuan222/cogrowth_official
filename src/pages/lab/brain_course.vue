<template>
  <div class="main_layout">

    <div class="top_pic">
      <img class="mouse" src="../../../static/res/common/mouse.png">
    </div>

    <div class="main">
      <div class="content">酷成长倡导“尊重兴趣、发现兴趣、发展兴趣、培养兴趣”的思想，遵从“以大脑为中心改变生活，兴趣让你与众不同”的基本理念，构建“心理、脑、科学与教育”教育理念，以“兴趣、习惯、能力”为教学思想，以“年龄感统缺失补偿”等方式进行大脑习惯培养的科学教育体系，从而带动幼儿、青少年、成年人以及老年人自身的本体感、专注力、思维、记忆、书写、情感、语言、运动能力的“改善”与“改变”。</div>
      <div class="pic"></div>

    </div>


  </div>
</template>

<script>

  export default {
    name: 'indexA',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App33334433333333333',
        name1: '223333'
      }
    }
  }

</script>


<style scoped>

  .main_layout {
    width: 100%;
    height: 100%;
  }

  .main {
    flex-direction: column;
    display: flex;
    margin: 0 auto;
    width: 1200px;
    height: auto;
    overflow: hidden;
  }

  .top_pic {
    width: 100%;
    height: 1010px;
    background-color: #203260;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("../../../static/res/brain_course/course_top_pic.png");
  }


  .content {
    text-align: left;
    font-size: 16px;
    color: #627792;
    line-height: 30px;
    text-indent: 2em;
    width: 857px;
    margin: 89px auto 43px;

  }

  .pic {
    width: 940px;
    margin: 0 auto;
    height: 566px;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("../../../static/res/brain_course/course_des_pic.png");
  }

  .mouse{
    margin: 939px auto 0;
  }
</style>
