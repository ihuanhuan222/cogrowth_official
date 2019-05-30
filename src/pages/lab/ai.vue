<template>
  <div class="main_layout">
    <div class="top_pic">
      <div class="w1200_center">
        <div class="big_title">Cogrowth B+</div>
      </div>

    </div>
    <div class="main">

      <div class="title">
        {{datas[currentIndex].title}}
      </div>
      <p class="content"> {{datas[currentIndex].content}}</p>
      <img class="pic" :src="datas[currentIndex].img"/>

      <div class="control">
        <img src="../../../static/res/ai_hard/left_arrow.png" class="control_button"  @click="moves(0)">
        <div v-for="(item ,index) in datas">
          <img
            :src="index==currentIndex?'../../../static/res/ai_hard/sel_sport.png':'../../../static/res/ai_hard/spot.png'">
        </div>
        <img src="../../../static/res/ai_hard/right_arrow.png" class="control_button" @click="moves(1)">
      </div>
    </div>
  </div>
</template>
<script>


  export default {
    name: 'indexA',
    data() {
      return {
        currentIndex: 0,
        datas: [
          {
            title: "脑控无人机",
            content: "通过“经验模态分解算法”转化为控制指令，可直接实现对无人机起飞、降落、旋转、翻转的功能控制。",
            img: "../../../static/res/ai_hard/air.png"
          }, {
            title: "脑控月球灯",
            content: "通过“经验模态分解算法”转化为控制指令，月球灯颜色会根据专注度的高低而发生相应的改变，实现大脑与设备的交互。",
            img: "../../../static/res/ai_hard/ball.png"
          }, {
            title: "脑控轨道赛车",
            content: "通过兴趣度、放松度、专注度等八个维度进行系统性监测分析，还可有效锻炼与提升注意力的高度与强度，培养与塑造良好的脑习惯。",
            img: "../../../static/res/ai_hard/subway.png"
          }, {
            title: "脑控履带机器人",
            content: "具有前进、后退、左右原地转圈等基本功能，拥有方向自动感应系统及强劲马达动力。重装造型、动力强劲，适合360度翻转、越野攀爬。",
            img: "../../../static/res/ai_hard/car_robot1.png"
          }, {
            title: "Cogrowth全地形环境球型机器人",
            content: "Cogrowth全地形环境球型机器人，支持滚动运动和足式行走。开展无边轮机构在空间斜面地形中的自然运动建模与分析研究，提出以节能和稳定为目标的机构优化设计策略。机器人运动控制与测试软件，能够高速实时地生成机器人动作控制指令，并在线同步检测、分析测试数据。",
            img: "../../../static/res/ai_hard/ball_robot.png"
          }, {
            title: "Cogrowth四足仿生机器人-02",
            content: "直接驱动式四足机器人构型。行走时，实现上下、左右、前后的运动控制，匍匐、行走、小跑、跳跃等多种运动形态。",
            img: "../../../static/res/ai_hard/four_foot_robot.png"
          }, {
            title: "Cogrowth仿人机器人-100",
            content: "机器人高一米，其设计结构与理想人体的比例相当。由于机器人的骨架结构模仿人的骨架结构，因此可以产生类似人的运动模式。它可以通过很多不同的方式进行控制。还具有预先编程的手势和嘴部表情，具有同步声音（预先录制）。",
            img: "../../../static/res/ai_hard/person_robot.png"
          }, {
            title: "Cogrowth运动机器人-95",
            content: "运动机器人高0.95米，可以行走、跳跃和踢球，当其被撞倒在地时，无论其面部朝下还是朝上，它都可以站立，头部有全角摄像。",
            img: "../../../static/res/ai_hard/sport_robot.png"
          }

        ]
      }
    },methods:{
      moves(type)
      {
        if(type==0)
        {
          //向左
          if(this.currentIndex>0)
          {
            this.currentIndex=(this.currentIndex-1);
          }
        }else {
          //向右
          if(this.currentIndex<this.datas.length-1)
          {
            this.currentIndex=(this.currentIndex+1);
          }
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
    background-image: url("http://official-html.qiniu.kuchengzhang.com/ai_hard_top_pic.png");
  }

  .big_title {
    text-align: left;
    font-size: 36px;
    color: #EFF3F9;
    margin: 150px 0 0px 50px;
  }

  .title {
    font-size: 30px;
    font-weight: bold;
    color: #3A478F;
    margin: 49px 0 36px 169px;
  }

  .content {
    font-size: 16px;
    color: #627792;
    height: 86px;
    text-indent: 2rem;
    margin: 0px 169px 10px 169px;
  }

  .pic {
    margin: 0 auto;
    width: 679px;
    height: 354px;
  }

  .control {
    width: 350px;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: -30px auto 90px;
  }

  .control img {
    margin: 0 7px;
  }

  .control_button{
    cursor: pointer;
  }

</style>
