<template>
  <div class="hello-world">


    <div class="side_nav_fixed">
      <div class="side_nav_top">Cogrowth B+</div>
      <div :class="item.sel?'side_nav_sub_clickz':'side_nav_sub'" @click="checks(index)"
           v-for="(item,index) in nav_list">{{item.title}}
      </div>
    </div>

    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">

      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <headers id="head_layout"></headers>
          <div class="top_pic"></div>
          <div class="main_content" id="first_screen">
            <p class="title">公司简介</p>
            <p class="content">
              Cogrowth公司是一家面向基础教育的“脑机接口”公司。以脑科学为基础，通过信息、通信、物联感知（IOTA）等技术，利用脑电与生理信号推动对大脑的理解与应用。Cogrowth聚焦青少年、幼儿教育领域。一是面向B端的脑科学AI实验室，将算法、软件、教材、硬件（玩具、电子产品、机器人）、游戏等融合至脑科学实验室，将兴趣教育与脑科学教育创造性地联动起来，通过多场景、多学科的科学实验与体验式教育，致力于基础教育领域学生的兴趣培养。二是面向C端的家庭教育与健康应用产品。将Cogrowth脑机接口软硬件产品与APP、智能电视有效融合，将算法、亲子产品、健康产品应用于家庭教育场景。有效解决游戏沉迷、亲子教育形式缺乏、脑习惯训练、兴趣分析、学习有效性分析等领域。三是面向C端的科学消费体验的系列产品。</p>
            <p class="content">
              Cogrowth公司还是一家基于“脑机接口”的健康公司。Cogrowth系列脑机接口产品能有效改善学生的专注、记忆、放松、睡眠以及辅助治疗儿童多动症、抽动障碍等问题，同时该产品还可以广泛应用于成年人与老年群体。</p>
            <p class="content">Cogrowth公司是一家新技术公司。已申请5个专利，十余个软件著作权、文字著作权，待申请专利50余个。</p>
            <p class="content">Cogrowth公司为国家高新技术企业、中关村高新技术企业，荣获“信息化影响中国•2017年行业最佳产品奖”。</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div class="main_content" id="sencond_screen">
            <div class="sencond_screen_top_pic">
              <img src="http://official-html.qiniu.kuchengzhang.com/about_second_screen_pic.png">
            </div>
            <p class="title">企业文化</p>
            <p class="content">理 念：以大脑为中心改变生活，兴趣让你与众不同</p>
            <p class="content">核心价值观：开放致远，尊重兴趣，融合创新。</p>
            <p class="content">愿 景：最有价值的科学智慧服务机构。</p>
            <p class="content">使 命：尊重兴趣，成就价值。</p>

          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div class="main_content" id="third_screen">
            <div class="thidr_screen_pic"></div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div class="main_content" id="forth_screen">
            <p class="title">发展简史</p>
            <div class="history_layout">
              <div class="year_layout">
                <div :class="currentYear==2019?'year_title_sel':'year_title'" @click="checkYear(2019)">2019</div>
                <div :class="currentYear==2018?'year_title_sel':'year_title'" @click="checkYear(2018)">2018</div>
                <div :class="currentYear==2017?'year_title_sel':'year_title'" @click="checkYear(2017)">2017</div>
              </div>
              <div>
                <div v-for="(item,index) in year_compony_info[currentYearIndex].info">
                  <div class="history_content_layout" v-if="(index<(currentPage+1)*onePageShowSize)&&(index>=(currentPage)*onePageShowSize)">
                    <div class="history_time">{{item.time}}</div>
                    <div class="history_content">{{item.content}}</div>
                  </div>
                </div>
                <div class="page_control">
                  <img @click="change_page(0)"
                       :src="currentPage==0?'../../../static/res/common/cant_left.png':'../../../static/res/common/can_left.png'">
                  {{currentPage+1}}
                  <img @click="change_page(1)"
                       :src="currentPage+1<year_compony_info[currentYearIndex].info.length/onePageShowSize?'../../../static/res/common/can_right.png':'../../../static/res/common/cant_right.png'">
                </div>

              </div>

            </div>

          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div class="main_content" id="fivth_screen">
            <img src="http://official-html.qiniu.kuchengzhang.com/about_group_backgrond.png">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div class="main_content" id="sixth_screen">

            <ul>
              <li v-for="item in company_info">
                <div :style="{backgroundImage:'url('+item.icon+')'}" class="title">{{item.title}}</div>
                <p class="content">{{item.des}}</p>
              </li>
            </ul>

          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="page swiper-no-swiping">
          <div class="main_content" id="seventh_screen">

            <div class="seventh_screen_pic"></div>

          </div>
          <footers></footers>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

    import headers from '../../components/default-header-bar.vue';
  import footers from '../../components/default-footer-bar.vue';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default {
    name: 'About',
    data() {
      return {
        currentYear: 2019,
        currentYearIndex: 0,
        currentPage: 0,
        onePageShowSize: 4,
        year_compony_info: [
          {
            year: 2019,
            info: [
              {
                content: "Cogrowth双通道脑电采集仪获得第三方检测报告",
                time: "2019年04月"
              }, {
                content: "公司与山东唐口煤业的“生物电智能安全头盔”在京完成专家论证",
                time: "2019年03月"
              }, {
                content: "中科院微电子所教授、博士生导师刘昱先生来访",
                time: "2019年03月"
              }, {
                content: "北京大学信息科学技术学院副院长、教授、博士生导师吴玺宏先生来访",
                time: "2019年03月"
              }, {
                content: "浙江大学神经管理学教授、博士生导师、国际欧亚科学院院士马庆国先生来访",
                time: "2019年03月"
              }, {
                content: "公司申请的Cogrowth、酷成长等商标获批",
                time: "2019年03月"
              }
            ]
          }, {
            year: 2018,
            info: [
              {
                content: "Cogrowth成为上海建平脑科学与类脑智能实验室的供应商",
                time: "2018年12月"
              }, {
                content: "公司被评为国家级高新技术企业",
                time: "2018年11月"
              }, {
                content: "闽南师范学院附属小学成为首个Cogrowth大脑发育报告系统使用单位",
                time: "2018年11月"
              }, {
                content: "公司与河北5A景区娲皇宫签订“脑科学AI体验项目”战略合作协议",
                time: "2018年10月"
              }, {
                content: "北京国易坊培训机构成为脑机接口与智能控制产品应用至培训的专业机构",
                time: "2018年10月"
              }, {
                content: "首个脑科学实验室落户重庆人民小学",
                time: "2018年08月"
              }, {
                content: "公司多项实用新型专利、外观专利提交;同月获得软件著作权、美术著作权、文字著作权等知识产权计20余项",
                time: "2018年06月"
              }, {
                content: "Cogrowth脑电数据采集与分析软件、大脑习惯训练软件完成实测",
                time: "2018年04月"
              }, {
                content: "Cogrowth大脑发育报告系统完成实测",
                time: "2018年03月"
              }, {
                content: "Cogrowth大脑习惯课程标准撰写完成，Cogrowth大脑习惯系列教材编撰完成，教具测试完成",
                time: "2018年02月"
              }
            ]
          }, {
            year: 2017,
            info: [
              {
                content: "公司组织首届脑机接口与智能控制研讨会暨首届脑科学研讨会",
                time: "2017年12月"
              }, {
                content: "与哈尔滨理工大学联合成立生物信号与嵌入式开发联合实验室",
                time: "2017年11月"
              }, {
                content: "公司与山东顺骋汽车在林肯、福特4S店联合组织脑机接口与智能控制VIP客户体验活动",
                time: "2017年10月"
              }, {
                content: "脑机接口与玩具控制进入实测阶段",
                time: "2017年10月"
              }, {
                content: "加拿大多伦多大学博士后曾科加入公司，成为联合创始人",
                time: "2017年09月"
              }, {
                content: "公司被评为“中关村高新技术企业”",
                time: "2017年09月"
              }, {
                content: "脑机接口与VR控制产品进入实测阶段",
                time: "2017年09月"
              }, {
                content: "进入脑机接口与智能控制研发阶段",
                time: "2017年06月"
              }
            ]
          }
        ],
        company_info: [
          {
            title: "公司名称",
            icon: "../../../static/res/about/about_company_icon.png",
            des: "北京酷成长科技有限公司"
          }, {
            title: "公司地址",
            icon: "../../../static/res/about/about_company_address_icon.png",
            des: "北京市海淀区苏州街18号院长远天地大厦B1座四层3A04室"
          }, {
            title: "邮政编码",
            icon: "../../../static/res/about/about_company_main_icon.png",
            des: "100080"
          }, {
            title: "公司邮箱",
            icon: "../../../static/res/about/about_company_emain_icon.png",
            des: "services@cogrowth.net.cn"
          }, {
            title: "联系电话",
            icon: "../../../static/res/about/about_company_phone_icon.png",
            des: "400-835-0006"
          }, {
            title: "传真",
            icon: "../../../static/res/about/about_company_fax_icon.png",
            des: "010-56200755"
          }
        ],
        nav_list: [
          {title: "公司简介", sel: true},
          {title: "企业文化", sel: false},
          {title: "荣誉资质", sel: false},
          {title: "发展简史", sel: false},
          {title: "团队背景", sel: false},
          {title: "联系我们", sel: false},
          {title: "合作伙伴", sel: false}
        ],
        list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], //轮换列表
        swiperOption: {
          notNextTick: true,          direction: 'vertical',          grabCursor: false,          setWrapperSize: true,          autoHeight: true,          slidesPerView: 1,          mousewheel: true,          mousewheelControl: true,          height: window.innerHeight,           resistanceRatio: 0,          observeParents: true,
                    on: {
                        slideChange: () => {
              let swiper = this.$refs.mySwiper.swiper;
              console.log(swiper.activeIndex);
                            this.fresh(swiper.activeIndex);

              if (swiper.activeIndex === this.list.length - 1) {                 let newList = [];
                let listLength = this.list.length;
                for (let i = 0; i < 10; i++) {
                  newList.push(listLength + i);
                }
                this.list = this.list.concat(newList);
              }
            }
          }
        }
      }
    }, methods: {
      checks(index) {
        this.$refs.mySwiper.swiper.slideTo(index, 1000, false);
        this.fresh(index)

      }, fresh(index) {
        for (var i = 0; i < this.nav_list.length; i++) {
          this.nav_list[i].sel = (index == i);
        }
      }, checkYear(year) {
        this.currentYear = year;
        this.currentPage = 0;
        if (year == 2019) {
          this.currentYearIndex = 0;
        } else if (year == 2018) {
          this.currentYearIndex = 1;
        } else if (year == 2017) {
          this.currentYearIndex = 2;
        }
      }, change_page(type) {
        if (type == 0) {
          if (this.currentPage > 0) {
            this.currentPage--;
          }
        } else if (type == 1) {
          if (this.currentPage + 1 < this.year_compony_info[this.currentYearIndex].info.length / this.onePageShowSize) {
            this.currentPage++;
          }
        }
      }
    },
    created() {
                },
        computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
          },
    components: {
      swiper,
      swiperSlide,
      headers,
      footers
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


  #head_layout {
    position: relative;
    z-index: 1;
  }

  .swiper-slide {
    font-size: 24px;
    text-align: center;

  }

  .swiper-slide:nth-child(2n) {

  }

  .swiper-slide:nth-child(2n-1) {

  }


  .page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: left;
  }

  .side_nav_fixed {
    left: 150px;
    top: 150px;
  }

  .side_nav_sub_clickz {
    cursor: pointer;
    line-height: 60px;
    width: 180px;
    height: 60px;
    background-color: #203260;
    background-image: url("../../../static/res/common/side_nav_right_arrow.png");
    background-repeat: no-repeat;
    background-position: 10% center;
    color: #608AD8;
  }

  .main_content {
    width: 1200px;
    height: 100%;
    overflow: hidden;
  }

  .title {
    margin: 0 0 0 370px;
    width: 100%;
    line-height: 70px;
    color: #3A478F;
    font-size: 22px;
    font-weight: bold;
  }

  .content {
    margin: 0 0 0 370px;
    width: 60%;
    text-indent: 2rem;
    line-height: 2rem;
    color: #627792;
    font-size: 16px;
  }

  #first_screen {
    background-position: right top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_first_screen_bg.png");
    flex: 1;
    width: 100%;
    height: 100%;
  }

  .top_pic {
    width: 100%;
    height: 230px;
    background-color: #212F5B;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_top_pic_bg.png");
  }

  #sencond_screen {
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_second_screen_bg.png");
    flex: 1;
    width: 100%;
    height: 100%;
  }

  .sencond_screen_top_pic {
    margin-top: 70px;
    text-align: right;
    width: 100%;
  }

  #sencond_screen img {
    height: 250px;
  }

  #sencond_screen .title {
    line-height: 100px;
  }

  #sencond_screen p {
    text-indent: 0;
  }

  #third_screen {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_third_screen_bg.png");
  }

  .thidr_screen_pic {
    margin: 30px 0 0 370px;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left center;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_qualification.png");
  }

  #forth_screen {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_fourth_bg.png");
  }

  #forth_screen .title {
    text-align: left;
    margin: 50px 0 20px 370px;
  }

  .year_layout {
    margin: 0 auto;
    display: flex;
    width: 500px;
    flex-direction: row;
    margin-bottom: 30px;
  }

  .year_title {
    cursor: pointer;
    margin-right: 30px;
    width: 120px;
    height: 46px;
    line-height: 50px;
    font-size: 18px;
    text-align: center;
    color: #608AD8;
    background-color: white;
    border-radius: 25px;
    border: 2px solid #608AD8;
  }

  .year_title_sel {
    margin-right: 30px;
    width: 120px;
    font-size: 18px;
    height: 46px;
    line-height: 50px;
    text-align: center;
    color: white;
    background-color: #608AD8;
    border-radius: 25px;
    border: 2px solid #608AD8;
  }

  .history_content_layout {
    margin-left: 370px;
    display: flex;
    flex-direction: row;
  }

  .history_time, .history_content {
    padding-top: 10px;
    font-size: 16px;
    color: #627792;
  }
  .history_content{
    margin-left: 30px;
    background-image: url("../../../static/res/about/history_slice.png");
    background-repeat: no-repeat;
    background-position: top left;
    padding-left: 70px;
    height: 110px;
  }

  .page_control{
    font-size:16px ;
    color: #6489D4;
    margin:0 0 10px 900px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .page_control img{
    margin: 0 10px;
  }

  #fivth_screen {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    text-align: center;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_fifth_bg.png");
  }

  #fivth_screen img {
    margin-top: 8rem;
  }


  #sixth_screen {
    margin: 30px 0;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    background-repeat: no-repeat;
    background-position: center right;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_map.png");
  }

  #sixth_screen ul {
    margin-left: 370px;
    width: 500px;
  }

  #sixth_screen .title {
    background-position: center left;
    background-repeat: no-repeat;
    padding-left: 50px;
    margin: 0;
    line-height: 50px;
  }

  #sixth_screen .content {
    width: 500px;
    text-indent: 0rem;
    margin: 0;
    padding-left: 50px;
  }

  #seventh_screen {
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    height: 100%;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_seventh_bg.png");
  }

  .seventh_screen_pic {
    margin: 30px auto 0;
    width: 763px;
    height: 513px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left center;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/about_commany_friend.png");
  }

</style>
