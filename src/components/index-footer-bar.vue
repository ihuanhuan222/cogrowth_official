<template>
  <div class="footer_layout">
    <div class="footer">
      <div class="logo">
        <img src="../../static/res/index/logo.png">
      </div>
      <div class="qcode">
        <img src="../../static/res/index/qcode.png">
      </div>
      <div class="nav">
        <div class="nav_top">

          <div class="nav_top_first">
            <p class="title" @click="router_to_lab">脑科学实验室</p>
            <p @click="router_to_product">脑控产品</p>
            <p @click="router_to_software">软件系统</p>
            <p @click="router_to_ai">硬件展示</p>
            <p @click="router_to_barin">训练教程</p>
          </div>
          <div class="nav_top_second">
            <p @click="router_to_goincogrowth" class="title">走进酷成长</p>
            <p @click="router_to_aboutus">关于我们</p>
            <p @click="router_to_news">新闻资讯</p>
            <p @click="router_to_market">市场分析</p>
            <p @click="router_to_jionus">加入我们</p>
          </div>
          <div class="nav_top_third">
            <p class="title" @click="router_to_down">客户端下载</p>
          </div>

        </div>
        <div class="nav_bottom">
          <p>公司地址：北京市海淀区苏州街18号院长远天地大厦B1座四层3A04室</p>
          <p>公司邮箱：services@cogrowth.net.cn</p>
          <p>联系电话：400-835-0006</p>
          <p style="margin-top: 10px"><span style="margin-right: 20px">北京酷成长科技有限公司</span><span>京ICP备16029003号-4</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {my_router} from '../../static/js/common'

  export default {
    name: 'indexB',
    data() {
      return {}
    }, methods: my_router()
  }


</script>


<style scoped>


  .footer_layout {
    width: 100%;
    background: #1C274D;
  }

  .footer {
    margin: 0 auto;
    display: flex;
    height: 260px;
    width: 1200px;
    color: #F2F5FA;
    flex-direction: row;
    font-size: 12px;
    font-family: SourceHanSans-Light, serif;
    background: #1C274D;
  }

  .logo {
    margin: 93px 87px 0px 128px;
  }

  .qcode {
    margin: 55px 124px 0 0;
  }

  .nav {
    margin-top: 31px;
    display: flex;
    flex-direction: column;
  }

  .nav_top_first, .nav_top_second {
    margin-right: 108px;
  }

  .nav_top {
    font-size: 14px;
    text-align: left;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  .nav_top p {
    cursor: pointer;
    line-height: 20px;
  }

  .title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 15px;
  }


  .nav_bottom {
    text-align: left;
  }


</style>
