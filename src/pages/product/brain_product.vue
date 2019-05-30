<template>

  <div class="main_layout">

    <div class="top_pic">
      <img class="mouse" src="../../../static/res/common/mouse.png">
    </div>

    <div class="main">
      <div class="first">
        <img src="../../../static/res/brain_product/product_1.png"/>
        <div>
          <p class="title">Cogrowth单、双通道脑电采集仪</p>
          <p>Cogrowth B+单、双通道脑电信号采集仪，</p>
          <p> 是一款融合了脑机接口技术的科技智能型产品</p>
        </div>
      </div>
      <div class="second">
        <div class="content">
          <p>通过佩戴Cogrowth B+单、双通道脑电信号采集仪，</p>
          <p>可实时采集佩戴者大脑电波数据及方向数据，</p>
          <p>配合专用的APP和玩具，</p>
          <p>简单实现对大脑专注度及放松能力的训练，</p>
          <p>亦可用于大脑评测与训练。</p>
        </div>
        <img src="../../../static/res/brain_product/product_2.png"/>
      </div>
      <div class="third">
        <img src="../../../static/res/brain_product/product_3.png"/>
        <div>
          <p class="title">产品应用功能</p>
          <p>智能硬件控制、大脑评测、大脑训练（专注力、集中力，冥想）、</p>
          <p>大脑行为感知（投入度，兴趣程度，兴奋度，亲密度，压力程度）、</p>
          <p>情绪感知（喜、怒、忧、思、悲、恐、惊等）、</p>
          <p>面部表情感知（眨眼，微笑，惊讶，咬牙）、EEG开发</p>
        </div>
      </div>



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
    background-image: url("http://official-html.qiniu.kuchengzhang.com/cogrowth_product_bg.png");
    background-position: center 1100px;
    background-repeat: no-repeat;
  }

  .main {
    text-align: left;
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
    background-color: #212F5B;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/cogrowth_product_top_bg.png");
  }

  .mouse {
    margin: 939px auto 0;
  }

  .first {
    display: flex;
    flex-direction: row;
    margin-top: 160px;
    margin-left: 148px;
    margin-bottom: 207px;
  }

  .first .title {
    margin-top: 48px;
    margin-bottom: 36px;
  }

  .first img {
    margin-right: 36px;
  }

  .second {
    margin-left: 84px;
    display: flex;
    flex-direction: row;
    margin-bottom: 276px;
  }

  .second .content {
    margin-top: 120px;
    margin-right: 137px;
  }

  .third {
    margin-bottom: 182px;
    display: flex;
    flex-direction: row;
    margin-left: 119px;

  }

  .third .title {
    font-weight: bold;
    margin-top: 75px;
    margin-bottom: 39px;
  }

  .third img {
    margin-left: 188px;
    margin-right: 175px;
  }


  .title {
    color: #3A478F;
    font-size: 24px;
  }

  p {
    color: #627792;
    font-size: 16px;
    line-height: 30px;
  }






















</style>
