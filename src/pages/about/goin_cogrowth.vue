<template>
  <div class="main_layout">
    <div class="main">

      <ul class="ul_layout">
        <li v-for="(img,index) in image_list">
          <img :src="img.hover?img.selectz:img.default" @mouseenter="enters(img)" @mouseleave="leaves(img)"
               @click="selectTab(index)">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'index',
    data() {
      return {
        image_list: [
          {
            hover: false,
            default: "../../../static/res/goin_cogrwoth/tab1.png",
            selectz: "../../../static/res/goin_cogrwoth/tab1_sel.png"
          },
          {
            hover: false,
            default: "../../../static/res/goin_cogrwoth/tab2.png",
            selectz: "../../../static/res/goin_cogrwoth/tab2_sel.png"
          },
          {
            hover: false,
            default: "../../../static/res/goin_cogrwoth/tab3.png",
            selectz: "../../../static/res/goin_cogrwoth/tab3_sel.png"
          },
          {
            hover: false,
            default: "../../../static/res/goin_cogrwoth/tab4.png",
            selectz: "../../../static/res/goin_cogrwoth/tab4_sel.png"
          }
        ]
      }
    }, methods: {
      enters(item) {
        item.hover = true;
      }, leaves(item) {
        item.hover = false;
      }, selectTab(index) {
        switch (index) {
          case 0:
                        this.$router.push({name: '关于我们'})
            break;
          case 1:
            this.$router.push({name: '新闻资讯'})
            break;
          case 2:
            this.$router.push({name: '市场分析'})
            break;
          case 3:
            this.$router.push({name: '加入我们'})
            break;
        }
      }
    },
  }

</script>


<style scoped>

  ul {
    list-style-type: none;
  }

  li {
    margin: 0 66px;
    display: inline-block;
  }

  .main_layout {
    width: 100%;
    height: 100%;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/goin_cogrowth_bg.png");
    background-color: #16295A;
  }

  .main {
    display: flex;
    margin: 0 auto;
    width: 1200px;
    height: 1010px;
    overflow: hidden;
  }

  .ul_layout {
    margin: 635px auto 0;
  }
</style>
