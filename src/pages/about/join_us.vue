<template>
  <div class="main_layout">
    <div class="side_nav_fixed">
      <div class="side_nav_top">Cogrowth B+</div>
      <div class="side_nav_sub" @click="python">Python开发工程师</div>
      <div class="side_nav_sub" @click="java">Java研发工程师</div>
    </div>
    <div class="top_pic"></div>
    <div class="main">
      <div class="content">




        <p class="title" id="python">Python开发工程师</p>
        <p class="txt">岗位职责： </p>
        <p class="txt">1.与后端开发人员合作，完成公司B端前端业务系统的研发；</p>
        <p class="txt">2.负责相关技术实现文档的撰写；</p>
        <p class="txt">3.分析并解决软件开发过程中的问题；</p>
        <p class="txt">4.配合项目经理完成相关任务目标； </p>
        <p class="txt">5.与项目组的其他成员合作，能承受短期交付的压力；</p>
        <p class="txt">岗位要求：</p>
        <p class="txt">1.计算机及相关专业，5年以上python开发经验，有完整项目开发经验或企业级产品开发经验优先，熟悉开发工作流程；</p>
        <p class="txt">2.丰富的PyQt开发经验；</p>
        <p class="txt">3.有Python读写USB串口的项目经验;</p>
        <p class="txt">4.有Python绘制动态曲线的经验，熟练使用matplotlib或其他类库绘制动态曲线。</p>
        <p class="txt">5.有Python调用后端Restful API的项目经验</p>

        <p class="title" id="java">Java研发工程师</p>
        <p class="txt">岗位职责：</p>
        <p class="txt">1.参与建设通用、灵活、智能的业务支撑平台的开发与设计，支撑上层多场景的复杂业务。</p>
        <p class="txt">2.与产品经理和前端工程师合作，设计和实现平台的新功能及对旧功能进行升级改造。</p>
        <p class="txt">3.实现高内聚、低耦合的高质量代码，保证系统的稳定性和可扩展性。</p>
        <p class="txt">岗位要求：</p>
        <p class="txt">1. 本科以上学历，计算机相关专业，具备扎实的计算机基础，熟练掌握数据结构和算法设计。</p>
        <p class="txt">2. 熟悉Java体系架构，熟悉基于Spring Boot、MyBatis、MySQL、Redis和MongoDB的互联网应用研发并有实际项目经验。</p>
        <p class="txt">3. 熟悉分布式系统理论，有Nginx反向代理和负载均衡的项目经验。</p>
        <p class="txt">4. Java基础扎实，熟悉Restful API并有实际的项目经验。</p>
        <p class="txt">5. 积极与团队中的其他成员合作，按时高质量地完成任务。</p>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'indexA',
    data() {
      return {}
    }, methods: {
      python() {
        document.getElementById("python").scrollIntoView();
      }, java() {
        document.getElementById("java").scrollIntoView();
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
    margin: 0 10px;
  }


  .main_layout {
    width: 100%;
    height: 100%;
  }

  .main {
    background-color: white;
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
    background-color: #1c274d;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/join_us_top_pic.png");
  }

  .content {
    margin-left: 290px;
    text-align: left;
    width: 1200px;
    height: auto;
    margin-bottom: 100px;
  }

  .title {
    margin-top: 100px;
    color: #3A478F;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .txt {
    line-height: 36px;
    font-size: 16px;
    color: #627792;
  }

</style>
