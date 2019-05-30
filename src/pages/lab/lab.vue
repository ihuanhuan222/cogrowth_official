<template>
  <div class="main_layout">
    <div class="top_pic">
      <div class="w1200_center">
        <div class="big_title">Cogrowth B+</div>
      </div>

    </div>
    <div class="main">

      <div class="title">脑科学AI实验室</div>
      <div class="content">
        <p>
          立足“未来科学教育”，以“脑科学”交叉学科为基础，用“人工智能”赋能教育，普及脑科学、人工智能等前沿学科知识，引导青少年思考、实践和创新，提高青少年科学素养，培养青少年创新能力和科学精神。为学校开展人工智能教育、脑科学教育等提供系统解决方案。</p>
        <p>以“脑科学”这一交叉学科的探究式教育聚焦K18领域，以生命科学为基础，以人工智能技术为载体，聚焦脑与人工智能的探索与发现，兴趣与特长的发现与发展。</p>
        <p>
          以“兴趣”为中心，基于交叉学科“主动体验式探究”，提高学生对脑科学、人工智能、算法、机器学习等知识认识和理解。通过真实、快乐的探究式场景搭建、简单有效的一键式主动操作，彻底解决学生学习由被动向主动转变，提升了学生参与的主动性，有效解决了专业教师不足的问题。</p>
        <p>
          Cogrowth脑控产品体验、脑科学探究与实时训练提升的科学方法，实现兴趣培养、脑力开发、探索创新、训练提升的综合目标，并且学生通过亲身经历脑科学探索过程，达到获得科学知识、掌握科学方法、培育科学素养的目的。“以大脑为中心改变生活，兴趣让你与众不同”的基本理念，
          以“兴趣”为中心的脑科学知识普及、体验式教育、探究式教学等形式，激发学生“了解脑”的兴趣，“保护脑”的意识，“创造脑”、“培养脑”的驾驭能力，以带动受教育者的自我“改善”与“改变”。</p>
      </div>
      <div class="product_layout">

        <div class="product_box">

          <img src="../../../static/res/brain_lab/pic1.png" class="product_pic"/>


          <div class="product_right">
            <div class="sub_title">脑控产品</div>

            <p>Cogrowth B+单、双通道脑电信号采集仪</p>
            <p>是融合了脑机接口技术的科技智能型产品</p>
            <div class="more" @click="jump(1)">了解更多 ></div>
          </div>
        </div>

        <div class="product_box">

          <img src="../../../static/res/brain_lab/pic2.png" class="product_pic"/>

          <div class="product_right">
            <div class="sub_title">软件系统</div>
            <p>生理信号采集</p>
            <p>大脑发育测评</p>
            <p>大脑训练</p>
            <p>脑控智能应用</p>
            <div class="more" @click="jump(2)">了解更多 ></div>
          </div>
        </div>

        <div class="product_box">

          <img src="../../../static/res/brain_lab/pic3.png" class="product_pic"/>

          <div class="product_right">
            <div class="sub_title">硬件展示</div>
            <p>独特脑电控制</p>
            <p>实现大脑与设备的交互</p>
            <div class="more" @click="jump(3)">了解更多 ></div>
          </div>
        </div>

        <div class="product_box">

          <img src="../../../static/res/brain_lab/pic4.png" class="product_pic"/>

          <div class="product_right">
            <div class="sub_title">大脑训练教程</div>
            <p> Cogrowth大脑教育与训练教材、教具</p>
            <p> 涵盖了幼儿、小学等阶段</p>
            <div class="more" @click="jump(4)">了解更多 ></div>
          </div>
        </div>
      </div>

    </div>
    <div class="big_screen">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexA',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App33334433333333333',
      }
    },
    methods: {
      jump(index) {
        switch (index) {
          case 1:
            this.$router.push({name: '脑控产品'});
            break;
          case 2:
            this.$router.push({name: '软件系统'});
            break;
          case 3:
            this.$router.push({name: '硬件展示'});
            break;
          case 4:
            this.$router.push({name: '训练教程'});
            break;
        }
      }
    }
  }

</script>


<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
  }


  .main_layout {
    width: 100%;
    height: 100%;
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
    height: 230px;
    display: flex;
    background-color: #1c274d;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/brain_lab_top_pic.png");
  }

  .big_title {
    text-align: left;
    font-size: 36px;
    color: #EFF3F9;
    margin: 150px 0 0px 50px;
  }

  .title {
    margin-top: 110px;
    margin-left: 171px;
    color: #3A478F;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 36px;
  }

  .content {
    margin-left: 169px;
    margin-right: 169px;
    margin-bottom: 140px;
  }

  .content p {
    color: #627792;
    font-size: 16px;
    line-height: 30px;
    text-indent: 2rem;
  }

  .mouse {
    margin: 939px auto 0;
  }

  .big_screen {
    background-color: #2E3A62;
    height: 546px;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/brain_product_large_screen2.png");
  }

  .product_box {
    margin-bottom: 72px;
    display: flex;
    flex-direction: row;
  }

  .product_pic {
    margin-left: 177px;
    margin-right: 136px;
  }


  .product_right p {
    color: #627792;
    font-size: 16px;
    line-height: 30px;
  }

  .sub_title {
    color: #3A478F;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .more {
    margin-top: 40px;
    text-align: center;
    width: 120px;
    height: 55px;
    line-height: 55px;
    background-color: #223160;
    color: white;
    cursor: pointer;
  }


</style>
