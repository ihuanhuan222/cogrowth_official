<template>
  <div class="main_layout">
    <div class="top_pic">
      <div class="w1200_center">
        <div class="big_title">Cogrowth B+</div>
      </div>
    </div>
    <div class="main">

      <div v-for="item in datas">
        <div class="soft_box">
          <img :src="item.img" class="soft_pic"/>
          <div class="soft_content">
            <div class="sub_title">{{item.title}}</div>
            <p>{{item.state?item.sel:item.normal}}</p>
            <img :src="item.state?'../../../static/res/software/up_arrow.png':'../../../static/res/software/down_arrow.png'"
              @click="check(item)">
          </div>
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
        name1: '1',
        datas: [
          {
            title: "脑电数据采集与数据处理系统",
            img: "../../../static/res/software/soft1.png",
            state: false,
            normal: "Cogrowth B+ 脑电数据采集与数据处理系统是一款专业的脑电数据分析软件，基于脑电原始数据，通过核心的算法得出使用者的各...",
            sel: "Cogrowth B+ 脑电数据采集与数据处理系统是一款专业的脑电数据分析软件，基于脑电原始数据，通过核心的算法得出使用者的各项大脑状态指标。可以实时的显示大脑的原始脑电波以及使用者的各项大脑状态数据，让使用者可以很清晰的了解自己目前的状态。其最大的特点是实时性，使用者可以实时的了解自己目前的大脑状态，例如：专注度、疲劳度、警惕性等，从而合理的调整自己的工作、学习时间，提高工作、学习的效率。"
          },
          {
            title: "大脑发育测评",
            img: "../../../static/res/software/soft2.png",
            state: false,
            normal: "大脑分析通过测定脑发育状态、活动状态、平衡状态、注意⼒、集中⼒、休息⼒、学习能⼒等脑电波，与定量标准进⾏⽐...",
            sel: "大脑分析通过测定脑发育状态、活动状态、平衡状态、注意⼒、集中⼒、休息⼒、学习能⼒等脑电波，与定量标准进⾏⽐较分析。其测定结果具有客观性和科学性。特别是神经协调脑控能分析区别于单纯视觉、听觉的脑分析。"
          }, {
            title: "大脑训练系统",
            img: "../../../static/res/software/soft3.png",
            state: false,
            normal: "对各种活动所需的休息⼒、注意⼒和集中⼒这三种状态进⾏神经反馈实验，科学分析⾃主神经系统的⾃我调节能⼒，正确...",
            sel: "对各种活动所需的休息⼒、注意⼒和集中⼒这三种状态进⾏神经反馈实验，科学分析⾃主神经系统的⾃我调节能⼒，正确了解脑功能。通过睁闭眼状态时的脑电数据分析，正确的分析视觉信息的脑反应，从⽽判断脑功能，并判断⽣理、⼼理的健康状态。"
          },
          {
            title: "脑控智能应用系统",
            img: "../../../static/res/software/soft4.png",
            state: false,
            normal: "Cogrowth B+ 脑控智能应用系统是一款多终端蓝牙控制的APP。软件的核心是通过蓝牙接收脑电下位机的原始数据，并通过...",
            sel: "Cogrowth B+ 脑控智能应用系统是一款多终端蓝牙控制的APP。软件的核心是通过蓝牙接收脑电下位机的原始数据，并通过独有的算法，实时的解析出用户大脑状态中的专注度数值，可将此数值转换为对智能玩具的控制指令并通过蓝牙传输于智能硬件，此脑电数据“专注度”同时可应用于APP中的数据中心、应用中心，在体验脑控过程中记录用户的专注度，可在数据中心看见历史的脑电数据图形，直观解析用户脑电活动情况。"
          },
          {
            title: "脑电VR体验系统",
            img: "../../../static/res/software/soft5.png",
            state: false,
            normal: "以沉浸式脑控VR游戏的形式去认识大脑，训练、培养大脑能力，挑战大脑能力，主要应用于大脑...",
            sel: "以沉浸式脑控VR游戏的形式去认识大脑，训练、培养大脑能力，挑战大脑能力，主要应用于大脑知识普及和大脑能力训练。"
          },
          {
            title: "脑电游戏VR系统",
            img: "../../../static/res/software/soft6.png",
            state: false,
            normal: "主要应用于孩子的专注力训练，随着软件的升级，也会逐步增加放松度、冥想度训练项目。游戏形式有...",
            sel: "主要应用于孩子的专注力训练，随着软件的升级，也会逐步增加放松度、冥想度训练项目。游戏形式有“弯曲勺子”、“点燃火柴”、“悬空咖啡杯”，让孩子在兴趣体验中得到大脑的改善与改变。"
          }
        ]
      }
    }, methods: {
      check(item) {
        item.state = !item.state;
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
    padding-bottom: 80px;
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
    background-image: url("http://official-html.qiniu.kuchengzhang.com/soft_service_top_pic2.png");
  }

  .big_title {
    text-align: left;
    font-size: 36px;
    color: #EFF3F9;
    margin: 150px 0 0px 50px;
  }

  .soft_box {
    margin-top: 77px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }

  .soft_pic {
    width: 450px;
    height: 100%;
    margin-left: 36px;
    position: relative;
    z-index: 1;
  }

  .soft_content {
    width: 759px;
    z-index: 0;
    height: 100%;
    top: 52px;
    border: 2px solid #3a478f;
    left: -81px;
    padding-left: 98px;
    position: relative;
  }

  .sub_title {
    font-weight: bold;
    margin-top: 62px;
    margin-bottom: 36px;
    color: #3A478F;
    font-size: 26px;
  }

  .soft_content p {
    margin-right: 62px;
    color: #627792;
    line-height: 29px;
    font-size: 16px;

  }

  .soft_content img {
    cursor: pointer;
    position: relative;
    left: 560px;
    margin-top: 9px;
    margin-bottom: 52px;
  }

</style>
