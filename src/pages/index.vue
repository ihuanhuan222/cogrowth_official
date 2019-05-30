<template>
  <div class="main_layout">


    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">

      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <headers id="head_layout"></headers>

          <swiper id="swiperBox2" v-bind:options="swiperOption2" ref="mySwiper2">
            <swiper-slide class="swiper-slide banner" id="banner1">
              <img class="mouse" src="../../static/res/common/mouse.png">


            </swiper-slide>
            <swiper-slide class="swiper-slide banner" id="banner2">
              <img class="mouse" src="../../static/res/common/mouse.png">


            </swiper-slide>
            <swiper-slide class="swiper-slide banner" id="banner3">
              <div class="bottom_box">
                <img class="down" src="../../static/res/index/down.png" @click="jump(4)">
                <img class="mouse" src="../../static/res/common/mouse.png">
              </div>



            </swiper-slide>

            　　 　　

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>



        </div>
      </swiper-slide>

      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div id="two_layout">
            <div id="two_content" class="content">
              <p>Cogrowth B+</p>
              <div class="sub_title">脑科学AI实验室</div>
              <p>Cogrowth脑控产品体验、脑科学探究与实时训练提升的科学方法，</p>
              <p>实现兴趣培养、脑力开发、探索创新、训练提升的综合目标，</p>
              <p>并且学生通过亲身经历脑科学探索过程，达到获得科学知识、</p>
              <p>掌握科学方法、培育科学素养的目的。</p>
              <div class="mores" @click="jump(1)">了解更多 ></div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div id="three_layout">
            <div id="three_pic"></div>
            <div id="three_content" class="content">
              <p>Cogrowth B+</p>
              <div class="sub_title">双通道脑电信号采集仪</div>
              <p>实时采集脑电数据和方向数据</p>
              <p>用于智能硬件控制</p>
              <p>大脑评测与训练</p>
              <div class="mores" @click="jump(2)">了解更多 ></div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div id="four_layout">
            <div id="four_content" class="content">
              <p>Cogrowth B+</p>
              <div class="sub_title">软件系统</div>
              <p>生理信号采集</p>
              <p>大脑发育测评</p>
              <p>大脑训练</p>
              <p>脑控智能应用</p>
              <div class="mores" @click="jump(3)">了解更多 ></div>
            </div>
            <div id="four_pic"></div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div class="five_layout">
            <div class="content_layout"></div>
            <div class="five_pic"></div>
          </div>
          <footers></footers>
        </div>
      </swiper-slide>

    </swiper>

  </div>
</template>

<script>
    import headers from '../components/default-header-bar.vue';
  import footers from '../components/index-footer-bar.vue';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default {
    name: 'About',
    data() {
      return {
        swiperOption: {
          notNextTick: true,          direction: 'vertical',          grabCursor: false,          setWrapperSize: true,          autoHeight: true,          slidesPerView: 1,          mousewheel: true,          mousewheelControl: true,          height: window.innerHeight,           resistanceRatio: 0,          observeParents: true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

                                                                                                                                                                                  }, swiperOption2: {
          direction: 'horizontal',
          noSwiping: false,
          grabCursor: true,
          speed: 1000,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false           },
                                                                                          // }
        }
      }
    },     computed: {
      swiper2() {
        return this.$refs.mySwiper2.swiper
      }
                      }, components: {
      swiper,
      swiperSlide,
      headers,
      footers
    }, methods: {
      jump(index) {
        console.log("xxxx" + index)
        switch (index) {
          case 1:
            this.$router.push({name: '脑科学实验室'});
            break;
          case 2:
            this.$router.push({name: '脑控产品'});
            break;
          case 3:
            this.$router.push({name: '软件系统'});
            break;
          case 4:
            this.$router.push({name: '客户端下载'});
            break;
        }
      }
    }
  };


</script>


<style scoped>

  .main_layout {
    width: 100%;
    height: 100%;
  }

  .page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  #head_layout {
    position: relative;
    z-index: 1;
  }

  #swiperBox2 {

    height: 100%;
    width: 100%;
    position: relative;
    z-index: 0;
  }

  #swiperBox2 .page {
    background: red;

    height: 100%;
  }


  .swiper-slide {
    font-size: 24px;
    text-align: center;

  }

  .content {
    display: flex;
    flex-direction: column;

  }

  .banner {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    background-color: #212f5b;
  }

  #banner1 {
    height: 100%;
    background-size: 100% 100%;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/home_banner_1.png");
  }

  #banner2 {
    height: 100%;
    background-size: 100% 100%;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/cogrowth_product_top_bg.png");
  }

  #banner3 {
    height: 100%;
    background-size: 100% 100%;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/home_banner_3.png");
  }

  .mouse {
    margin-bottom: 20px;
    align-self: flex-end;
  }

  .bottom_box {
    align-self: flex-end;
    text-align: center;
    width: 280px;
  }


  .swiper-button-prev {
    left: 5%;
    width: 64px;
    height: 64px;
    background-image: url(../../static/res/index/home_banner_left.png);
    background-size: 100% 100%;
  }

  .swiper-button-next {
    right: 5%;
    width: 64px;
    height: 64px;
    background-image: url(../../static/res/index/home_banner_right.png);
    background-size: 100% 100%;
  }





  #two_layout {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/home_two_bg.png");
  }

  #two_content {
    width: 500px;
    padding-left: 120px;
    margin: 0 auto;
    text-align: left;
  }

  #two_content p {
    color: #fff;
  }

  #two_content .sub_title {
    color: #fff;
  }

  #two_content .mores {
    background: white;
    color: #223160;
  }



  #three_layout {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/home_three_bg.png");
  }

  #three_pic {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/home_three_pic.png");
    width: 61%;
    height: 70%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;

  }

  #three_content {
    padding-left: 80px;
    text-align: left;
    width: 39%;
    justify-content: flex-start;
  }


  #four_layout {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/home_four_bg.png");
  }

  #four_content {
    padding-right: 80px;
    text-align: right;
    width: 39%;
    justify-content: flex-end;
  }

  .content p {
    font-size: 16px;
    color: #223160;
  }

  #four_pic {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/home_for_pic.png");
    width: 61%;
    height: 70%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;

  }

  #four_content .mores {
    align-self: flex-end;
  }

  .sub_title {
    color: #3A478F;
    font-weight: bold;
    font-size: 26px;
    margin-top: 17px;
    margin-bottom: 36px;
  }

  .mores {
    font-size: 16px;
    margin-top: 40px;
    width: 120px;
    height: 55px;
    text-align: center;
    line-height: 55px;
    background-color: #223160;
    color: white;
    cursor: pointer;
  }




  .five_layout {
    background-size: 100% 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/home_five_bg.png");
  }










  .five_pic {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/home_five_pic.png");
    width: 50%;
    height: 70%;


    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

</style>
