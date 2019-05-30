<template>
  <div class="head_box">
    <div class="head">

      <div class="logo">
      </div>

      <ul class="main_top_nav_bar1">
        <li :class="item.selectz?'selscter main_top_sub1_li':'defaultz main_top_sub1_li'"
            @mouseenter="enters(item)"
            @mouseleave="leaves(item)"
            @click="jump(item)" v-for="(item,index) in nav_list">
          <div class="main_top_nav1_li_top">
            {{item.title}}
          </div>
          <ul class="main_top_sub_nav2" v-if="(item.hoverz)&&(item.sub_nav.length>0)" >
            <li class="main_top_sub_nav2_li" v-for="it in item.sub_nav" @click.stop="jump(it)"><span>{{it.title}}</span></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'Head',
    data() {
      return {
        nav_list: [
          {
            selectz: false,
            title: "首页",
            hoverz: false,
            sub_nav: []
          }, {
            selectz: false,
            title: "脑科学实验室",
            hoverz: false,
            sub_nav: [
              {title: "软件系统"},
              {title: "硬件展示"},
              {title: "训练教程"}
            ]
          }, {
            selectz: false,
            title: "脑控产品",
            hoverz: false,
            sub_nav: []
          }, {
            selectz: false,
            title: "走进酷成长",
            hoverz: false,
            sub_nav: [
              {title: "关于我们"},
              {title: "新闻资讯"},
              {title: "市场分析"},
              {title: "加入我们"}
            ]
          }, {
            selectz: false,
            hoverz: false,
            title: "客户端下载",
            sub_nav: []
          }
        ]
      }
    }, methods: {
      enters(item) {
        item.hoverz = true;
      }, leaves(item) {
        item.hoverz = false;
      }, jump(item) {
        this.$router.push({name: item.title})
      }
    }, mounted: function () {
            var index = this.$router.currentRoute.meta.nav - 1;
      this.nav_list[index].selectz = true;
    }, watch: {
      $route(val) {
                var index = val.meta.nav - 1;
        for (var i = 0; i < 5; i++) {
          this.nav_list[i].selectz = (index == i);
        }
      }
    }
  }


</script>


<style scoped>

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }

  li {

    display: block;

  }

  .head_box {
    text-align: center;
    width: 100%;
    background-color: #203260;
    background-image: url("../../static/res/common/top_navbar_bg.png");
    background-repeat: repeat-y;
    background-position: center top;
  }

  .head {
    width: 1200px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }

  .head {
    font-family: SourceHanSans-Light, serif;
    font-size: 16px;
  }

  .selscter {
    background: #1D2D56;
  }

  .selscter .main_top_nav1_li_top {
    color: #fff;
  }

  .main_top_nav_bar1 {
    color: #687AA8;
    line-height: 70px;
  }



  .main_top_sub1_li {

  }



  .main_top_nav1_li_top {
    height: 70px;
    padding: 0 26px;
    cursor: pointer;

  }

  .main_top_nav1_li_top:hover {
    color: white;
    background: #1D2D56;
  }


  .main_top_sub_nav2{
    display: flex;
    flex-direction: column;
  }

  .main_top_sub_nav2_li {
    height: 70px;
    width: 100%;
    cursor: pointer;
    background: #1D2D56;
  }

  .main_top_sub_nav2_li:hover span {
    color: white;
    padding-bottom: 10px;
    border-bottom: solid 2px #fff;
  }


  .logo {
    background: url("../../static/res/index/logo.png");
    margin: 18px 360px 14px 50px;
    width: 120px;
    height: 38px;
  }
</style>
