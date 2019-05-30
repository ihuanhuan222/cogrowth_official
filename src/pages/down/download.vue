<template>
  <div class="main_layout">
    <div class="main">
      <ul class="ul_layout">
        <li v-for="(img,index) in image_list">
          <img class="down_img" :src="img.hover?img.selectz:img.default" @mouseenter="enters(img)" @mouseleave="leaves(img)"
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
            default: "../../../static/res/download/tab1.png",
            selectz: "../../../static/res/download/tab1_sel.png"
          },
          {
            hover: false,
            default: "../../../static/res/download/tab2.png",
            selectz: "../../../static/res/download/tab2_sel.png"
          },
          {
            hover: false,
            default: "../../../static/res/download/tab3.png",
            selectz: "../../../static/res/download/tab3_sel.png"
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
                                                window.open("http://official-html.qiniu.kuchengzhang.com/cogrowth0501_101.apk")
            break;

          case 1:
                        alert("程序即将上线，敬请期待！")
            break;
          case 2:
            alert("程序即将上线，敬请期待！")
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
    margin: 0 100px;
    display: inline-block;
  }

  .main_layout {
    width: 100%;
    height: 100%;
    background-position: center top;
    background-repeat: no-repeat;
    background-color: #202F5E;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/download_bg.png");
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

  .down_img{
    cursor: pointer;
  }
</style>
