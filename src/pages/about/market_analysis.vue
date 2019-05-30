<template>
  <div class="main_layout">
    <div class="side_nav_fixed">
      <div class="side_nav_top">Cogrowth B+</div>
      <div :class="item.sel?'side_nav_sub_clickz':'side_nav_sub'" @click="checks(index)"
           v-for="(item,index) in nav_list">{{item.title}}
      </div>
    </div>
    <div class="top_pic"></div>

    <div class="bg_box bg1">
      <div class="main" id="shi_chang_fen_xi">
        <p class="title margin_top_63">市场分析</p>
        <p class="content margin_top_20">1989年，美国第101届国会通过“脑的十年”议案，已经取得社会各方面精神物质上的有利支持，推进基础和临床神经科学的发展。</p>
        <p class="content">1994年，欧洲成立神经科学协会，并采取许多措施改善欧洲各国间脑科学研究的交流，提高神经科学的显示度和增加对脑研究的支持。</p>
        <p class="content">1996年，美国成立国际脑研究联盟（Dana Alliance for Brain Initiatives）。</p>
        <p class="content">1996年，日本推出为期20年的“脑科学时代”（The Age of Brain Science）的计划纲要。</p>
        <p class="content">2001年，日本政府启动了“脑科学与教育”研究项目，进行教育理论与实践的应用研究。</p>
        <p class="content">2003年，“国际心智、脑与教育协会（IMBES）”成立，该协会《脑科学与教育》于2007年开始发行。</p>
        <p class="content">2014年，中科院成立脑科学卓越创新中心，2015年卓越中心扩容为“脑科学与智能技术卓越创新中心”，同时先导专项更名为“脑功能联结图谱与类脑智能研究”。</p>
        <p class="content">2016年，中国将“脑科学与类脑研究”列为“十三五”规划纲要重大科技创新项目和工程之一，中国脑计划正式启动。</p>
        <p class="content">2017年，中科院启动“脑科学与类脑研究”作为“科技创新2030重大项目”已启动的4个试点之一，进入编制项目实施方案阶段。</p>
        <p class="content">2017年，酷成长自主研发的CoGrowth B+生物电控系列产品与“B+”脑习惯课程使之成为中国首家“心理、脑、科学与教育”的专业研究与服务机构。</p>
      </div>
    </div>

    <div class="bg_box bg2">
      <div class="main margin_top_200 " id="xiang_mu_you_shi">
        <p class="title">市场潜力巨大竞争惨烈的市场</p>
        <p class="content">酷成长·脑科学中心是全国首个以普及脑科学知识、运营脑科学解决青少年及成年人用脑、训练脑综合服务机构。</p>
        <p class="title">新兴项目 传统项目</p>
        <p class="content">酷成长·脑科学中心是国内心理·脑·科学与教育领域的倡导者、践行者与领导者。</p>
        <p class="title">蓝海市场 红海项目</p>
        <p class="content">红海市场催生蓝海市场，心理·脑·科学与教育是一个新兴的细分市场，根据初步统计全国同类门店数量不超过200余个，未来五年市场需求将超过1万个经营门店，目前整体市场容量远未饱和。</p>
        <p class="title">过高的风险率 优质的收益率</p>
        <p class="content">酷成长·脑科学中心通过全方位多层次推广、客户资源互补、多元化的运营模式，实现低投资高回报。</p>
        <p class="title">短线操作 长线经营</p>
        <p class="content">酷成长·脑科学中心采用多元化经营模式，实现客户资源有效互补及深度开发，实现长线经营与持续盈利。</p>
        <p class="title">无核心竞争力 行业壁垒高</p>
        <p class="content">酷成长“MBSE”教育理念、CoGrowth B+课程体系、特定时期的感统补偿训练方式与科学体验式教学模式，形成酷成长的技术壁垒与核心竞争力。</p>
      </div>
    </div>
    <div class="bg_box bg3">

      <div class="main margin_top_200 ">

        <p class="title">项目投资优势</p>

        <div class="list_type1_layout">
          <div class="list_type1_left">投资风险小</div>
          <div class="list_type1_right">
            <p class="list_type1_content">强资产项目，一次性投入资金规模相对较少，有效降低投资风险。</p>
          </div>
        </div>
        <div class="list_type1_layout">
          <div class="list_type1_left">资金回笼快</div>
          <div class="list_type1_right">
            <p class="list_type1_content">预收费项目，投入资金可快速回收，降低现金流压力。</p>
          </div>
        </div>
        <div class="list_type1_layout">
          <div class="list_type1_left">盈利能力强</div>
          <div class="list_type1_right">
            <p class="list_type1_content">口碑型行业且单店具有多元化经营模式，盈利能力强，随着经营时间的推移，盈利能力呈几倍增值趋势。</p>
          </div>
        </div>
        <div class="list_type1_layout">
          <div class="list_type1_left">投资收益高</div>
          <div class="list_type1_right">
            <p class="list_type1_content">独特运营模式具有极强的盈利能力，平均收益率远远高于教育行业平均水平。</p>
          </div>
        </div>


        <img style="margin-top: 102px;margin-bottom: 120px"
             src="http://official-html.qiniu.kuchengzhang.com/market_analysis_pic1.png">


        <div class="des1_box">
          <p>·与当地教育部门及校区合作，在校内推广课程，大幅提高当地知名度，带来更多生源；</p>
          <p>·定期举办夏令营、冬令营、科学部落、科学旅游、科学训练营活动；</p>
          <p>·酷成长生物电控产品系列，世界领先、全国唯一、高技术壁垒，为体验店的产品销售与体验服务提供高附加价值。</p>
          <p>·与培训机构合作，植入酷成长B+课程体系与技术服务。</p>
        </div>

        <p class="title">品牌优势</p>
        <div class="list_type1_layout">
          <div class="list_type1_left">品牌效应</div>
          <div class="list_type1_right">
            <p class="list_type1_title">延伸性强</p>
            <p class="list_type1_content">脑科学、科学秀、技术研发战略协同，形成延展性极强品牌效应</p>
          </div>
        </div>

        <div class="list_type1_layout">
          <div class="list_type1_left">品牌推广</div>
          <div class="list_type1_right">
            <p class="list_type1_title">全方位、立体化</p>
            <p class="list_type1_content">整合营销策略定向推广，360°全方位、立体化品牌传播渠道</p>
          </div>
        </div>

        <div class="list_type1_layout">
          <div class="list_type1_left">营运模式</div>
          <div class="list_type1_right">
            <p class="list_type1_title">盈利性强</p>
            <p class="list_type1_content">最先进的营运管理模式，投资小回报大，盈利能力强</p>
          </div>
        </div>

        <div class="list_type1_layout">
          <div class="list_type1_left">课程体系</div>
          <div class="list_type1_right">
            <p class="list_type1_title">系统性强</p>
            <p class="list_type1_content">B+课程体系与科学体验有效结合，满足不同年龄段的学习需求</p>
          </div>
        </div>

        <div class="list_type1_layout">
          <div class="list_type1_left">产品系列</div>
          <div class="list_type1_right">
            <p class="list_type1_title">核心价值</p>
            <p class="list_type1_content">国内首发生物电控产品系列，最具价值核心技术壁垒</p>
          </div>
        </div>

        <div class="list_type1_layout">
          <div class="list_type1_left">服务支持</div>
          <div class="list_type1_right">
            <p class="list_type1_title">健全、完善</p>
            <p class="list_type1_content">12大运营服务支持体系，360°全方位支持，一站式标准化服务</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg_box bg4">
      <img style="margin-top: 150px;margin-bottom: 120px"
           src="http://official-html.qiniu.kuchengzhang.com/market_analysis_pic2.png">
    </div>



    <div class="bg_box bg5" style="height: 1081px;">
      <div class="main" id="he_zuo_mo_shi">
        <p class="title" style="margin-top: 277px">合作加盟</p>
        <p class="content">酷成长脑科学中心专为中小型机构及个人，量身定制合作加盟套餐，结合自身办学经营条件，选择不同的加盟类型</p>
        <p class="title" style="margin-top: 70px">区域代理</p>
        <p class="content">酷成长脑科学中心独家授权区域代理，代理商享受永久利润分成</p>
        <p class="title" style="margin-top: 70px">项目合作</p>
        <p class="content">酷成长脑科学项目与教育机构展开项目合作，增强双方的核心竞争力，优势互补实现双赢</p>
        <p class="title" style="margin-top: 70px">企业合作</p>
        <p class="content">酷成长脑科学中心为企业HR、心理机构、学校等企业/机构，量身定制脑科学训练技术服务</p>
      </div>

    </div>

    <div class="bg_box">
      <div class="main" id="fu_wu_zhi_chi">

        <div class="list_type2_layout">
          <div class="list_type2_left">
            <div class="list_type2_box">
              <p class="title">运营管理培训</p>
              <p class="content">脑科学中心项目筹建及开业； </p>
              <p class="content">公司日常运营管理培训； </p>
              <p class="content">市场推广及活动指导培训； </p>
              <p class="content">部门标准化运营管理体系培训。 </p>
            </div>
            <div class="list_type2_box">
              <p class="title">课程体系培训</p>
              <p class="content">酷成长·脑科学课程培训系统；</p>
              <p class="content">酷成长·脑习惯课程培训系统；</p>
              <p class="content">酷成长·脑能力课程培训系统；</p>
              <p class="content">酷成长·科学兴趣课程培训系统。</p>
            </div>
            <div class="list_type2_box">
              <p class="title">传统招生模式</p>
              <p class="content">地推活动、MD宣传推广；</p>
              <p class="content">客户转介绍及学员推荐；</p>
              <p class="content">学校免费课程推广等；</p>
            </div>
            <div class="list_type2_box">
              <p class="title">特色招生模式</p>
              <p class="content">夏令营活动组织；</p>
              <p class="content">科学风暴及科学部落活动；</p>
              <p class="content">校企联动活动；</p>
            </div>
          </div>
          <div class="list_type2_right">
            <div class="list_type2_box">
              <p class="title">市场销售培训</p>
              <p class="content">线上线下全方位高效招生指导培训；</p>
              <p class="content">数百套招生案例、共享总部最新招生方案；</p>
              <p class="content">赛事及夏令营活动组织及策划培训；</p>
              <p class="content">家长讲座、公开课讲座指导招生培训。</p>
            </div>
            <div class="list_type2_box">
              <p class="title">技术操作培训</p>
              <p class="content">酷成长脑测评报告系统；</p>
              <p class="content">酷成长脑能力测评报告系统；</p>
              <p class="content">酷成长脑习惯测评报告系统；</p>
              <p class="content">酷成长兴趣发展测评报告系统。</p>
            </div>
            <div class="list_type2_box">
              <p class="title">亮点招生模式</p>
              <p class="content">社区活动及公益活动；</p>
              <p class="content">教育讲座、家庭教育培训；</p>
              <p class="content">互动式营销推广；</p>
              <p class="content">新媒体招生；</p>
            </div>
            <div class="list_type2_box">
              <p class="title">核心招生模式</p>
              <p class="content">生物电控产品体验式活动；</p>
              <p class="content">平台及网络推广，生源就近分配；</p>
              <p class="content">电视栏目营销推广；</p>
              <p class="content">线上线下全方位招生方案；</p>
            </div>

          </div>
        </div>
      </div>


      <div class="bg_box bg6" style="height: 800px;margin-top: 200px;margin-bottom: 200px">
        <div class="main">
          <p class="content">专家级教育研究团队，最前沿教学产品，通过完善的教师培养体系、教学产品及教学方法的研发升级，协助体验店打造五星级师资队伍。</p>

          <div class="list_type3_layout">
            <div class="list_type3_left">
              <div class="list_type3_box">
                <p class="title">酷成长B+课程体系</p></div>
            </div>
            <div class="list_type3_right">
              <div class="list_type3_box">
                <p class="content">酷成长·脑科学培训课程</p>
                <p class="content">酷成长·脑习惯培训课程</p>
                <p class="content">酷成长·脑能力培训课程</p>
                <p class="content">酷成长·科学兴趣培训课程</p>
              </div>
            </div>
          </div>

          <div class="list_type3_layout">
            <div class="list_type3_left">
              <div class="list_type3_box">
                <p class="title">酷成长教具体系</p>
              </div>
            </div>
            <div class="list_type3_right">
              <div class="list_type3_box">
                <p class="content">酷成长·脑习惯课程教具</p>
                <p class="content">酷成长·脑能力课程教具</p>
                <p class="content">酷成长·科学兴趣培训教具</p>
              </div>
            </div>
          </div>

          <div class="list_type3_layout">
            <div class="list_type3_left">
              <div class="list_type3_box">
                <p class="title">酷成长评测系统</p>
              </div>
            </div>
            <div class="list_type3_right">
              <div class="list_type3_box">
                <p class="content">酷成长·脑测评报告系统</p>
                <p class="content">酷成长·脑能力测评报告系统</p>
                <p class="content">酷成长·脑习惯测评报告系统</p>
                <p class="content">酷成长·兴趣发展测评报告系统</p>
              </div>
            </div>
          </div>

          <div class="list_type3_layout">
            <div class="list_type3_left">
              <div class="list_type3_box">
                <p class="title">酷成长教学管理系统</p>
              </div>
            </div>
            <div class="list_type3_right">
              <div class="list_type3_box">
                <p class="content">酷成长教学管理系统</p>
                <p class="content">酷成长教师培训系统</p>
                <p class="content">酷成长家长服务系统</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg_box bg4" style="height: 800px;margin-bottom: 200px">
        <div class="main">

          <div class="list_type4_layout">
            <div class="list_type4_left">
              <div class="list_type4_box">
                <p class="title">开业前期</p></div>
            </div>
            <div class="list_type4_right">
              <div class="list_type4_box">
                <p class="content">提供加盟酷成长品牌各项咨询服务； </p>
                <p class="content">专业选址团队进行系统化的商圈评估； </p>
                <p class="content">资深设计团队根据店面设计定制设计方案； </p>
                <p class="content">专业装修团队协助合作伙伴进行实体店装修； </p>
                <p class="content">协助合作伙伴进行产品定制及配送服务； </p>
                <p class="content">协助合作伙伴进行人员招聘并提供专业指导。 </p>
              </div>
            </div>
          </div>

          <div class="list_type4_layout">
            <div class="list_type4_left">
              <div class="list_type4_box">
                <p class="title">开业初期</p></div>
            </div>
            <div class="list_type4_right">
              <div class="list_type4_box">
                <p class="content">酷成长总部为加盟商提供多套精选开业启动方案；</p>
                <p class="content">总部运营团队专人专派驻店启动支持，量身定制开业策划，保证顺利开业；</p>
                <p class="content">酷成长总部提供专业化+标准化+模块化+实践化培训，开业前期针对销售、咨询、教学、管理全岗位进行专业培训；</p>
                <p class="content">酷成长提供B+课程体系与全方位教学服务支持。</p>
              </div>
            </div>
          </div>


          <div class="list_type4_layout">
            <div class="list_type4_left">
              <div class="list_type4_box">
                <p class="title">开业后期</p></div>
            </div>
            <div class="list_type4_right">
              <div class="list_type4_box">
                <p class="content">酷成长总部360度品牌传播，持续进行品牌营销投入，针对加盟商进行品牌定向投放支持；</p>
                <p class="content">酷成长总部提供课程体系、教学用品、生物电控产品升级；</p>
                <p class="content">定期组织“脑科学大讲堂”等科学权威活动，夏令营活动、公益活动；</p>
                <p class="content">总部给予连续跟踪服务，通过视频会议、网络监控、12小时应急电话服务给予支持。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg_box" >
        <div class="main">
          <img src="http://official-html.qiniu.kuchengzhang.com/market_analysis_pic3.png">
          <img src="http://official-html.qiniu.kuchengzhang.com/market_analysis_pic4.png" style="margin-top: 100px;margin-bottom: 100px">
        </div>
      </div>
      <div class="bg_box bg8" style="height: 540px">
        <div class="main" style="margin-top: 60px">
          <p class="title">酷成长·产品升级</p>
          <p class="content">酷成长总部技术研发团队，持续进行生物电控新品研发，每年提供20款——30款生物电控新品支持，合作伙伴优先独享产品销售权。</p>
          <p class="content">酷成长生物电控系列产品，运用世界领先生物电控技术，产品类型丰富、多元，满足不同用户需求；产品更新速度快，持续盈利能力强。</p>
          <p class="title">酷成长·课程升级</p>
          <p class="content">酷成长总部最专业的教学研发团队，每年不断升级与优化CoGrowth B+课程体系，实现全年龄段、多维度、立体化课程体系，为合作伙伴提供强有力的后续支持及升级服务。</p>
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
        currentPage: 0,
        nav_list: [
          {title: "市场分析", idz: "shi_chang_fen_xi", sel: true},
          {title: "项目优势", idz: "xiang_mu_you_shi", sel: false},
          {title: "合作模式", idz: "he_zuo_mo_shi", sel: false},
          {title: "服务支持", idz: "fu_wu_zhi_chi", sel: false},
        ],
      }
    }, methods: {
      checks(index) {
        // this.$refs.mySwiper.swiper.slideTo(index, 1000, false);
        document.getElementById(this.nav_list[index].idz).scrollIntoView();
        this.fresh(index)

      }, fresh(index) {

        if (this.currentPage == index) {
          return;
        } else {
          this.currentPage = index;
        }
        for (var i = 0; i < this.nav_list.length; i++) {
          this.nav_list[i].sel = (index == i);
        }
      },
      handleScroll() {
        //根据高度切换侧边栏导航
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

        if (scrollTop > 5700) {
          this.fresh(3)
        } else if (scrollTop > 4700) {
          this.fresh(2)
        } else if (scrollTop > 900) {
          this.fresh(1)
        } else if (scrollTop > 0) {
          this.fresh(0)
        }
        console.log(scrollTop)
      }
    }, mounted() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

</script>


<style scoped>

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
  }

  #head_layout {
    position: relative;
    z-index: 1;
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

  .swiper-slide {
    font-size: 24px;
    text-align: center;

  }

  .main_layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .main {
    flex-direction: column;
    display: flex;
    margin: 0 auto;
    padding-left: 100px;
    width: 770px;
    height: auto;
    overflow: hidden;
  }

  .top_pic {
    width: 100%;
    height: 230px;
    background-color: #1c274d;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/market_analysis_toppic.png");
  }

  .title {
    text-align: left;
    color: #3A478F;
    font-size: 22px;
    line-height: 50px;
    font-weight: bold;
  }

  .content {
    line-height: 30px;
    text-align: left;
    color: #627792;
    font-size: 16px;
    text-indent: 2em;
  }

  .margin_top_63 {
    margin-top: 63px;
  }

  .margin_top_300 {
    margin-top: 300px;
  }

  .margin_top_200 {
    margin-top: 200px;
  }

  .margin_top_270 {
    margin-top: 270px;
  }

  .margin_top_20 {
    margin-top: 20px;
  }

  .bg1 {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/market_analysis_bg1.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center 86px;
  }

  .bg2 {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/market_analysis_bg2.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left top;
  }

  .bg3 {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/market_analysis_bg3.png");
    background-repeat: no-repeat;
    background-position: right top;
  }

  .bg4 {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/market_analysis_bg4.png");
    background-repeat: no-repeat;
    background-position: center center;
  }

  .bg5 {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/market_analysis_bg7.png");
    background-repeat: no-repeat;
    background-position: center center;
  }

  .bg6 {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/market_analysis_bg6.png");
    background-repeat: no-repeat;
    background-position: center center;
  }

  .bg8 {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/market_analysis_bg8.png");
    background-repeat: no-repeat;
    background-position: center bottom;
  }

  .list_type1_layout {
    text-align: left;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
  }

  .list_type1_left {
    color: white;
    background: #608AD8;
    width: 170px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 150px;
    font-size: 18px;
  }

  .list_type1_right {
    display: flex;
    flex-direction: column;
    width: 450px;
  }

  .list_type1_title {
    color: #3A478F;
    line-height: 36px;
    font-size: 18px;
  }

  .list_type1_content {
    color: #627792;
    font-size: 16px;
  }

  .des1_box {
    width: 633px;
    margin: 0 auto 70px;
    text-align: left;
    font-size: 16px;
    line-height: 30px;
    color: #627792;
  }


  .list_type2_layout {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 740px;

  }

  .list_type2_box {
    height: 200px;
  }

  .list_type2_box .title {
    margin-bottom: 20px;
  }

  .list_type2_layout .content {
    text-indent: 0;
  }

  .list_type2_left {
    width: 320px;
    margin-right: 100px;
  }

  .list_type2_right {
    width: 320px;
  }

  .list_type3_layout {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 740px;
  }

  .list_type3_left {
    width: 320px;
    background-image: url("../../../static/res/market_analysis/arrow1.png");
    background-repeat: no-repeat;
    background-position: center right;
    padding-right: 60px;
    margin-right: 40px;
  }

  .list_type3_box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 150px;
  }

  .list_type3_box .title {
    align-self: flex-end;
  }

  .list_type3_right {
    width: 320px;
  }

  .list_type4_layout {
    display: flex;
    flex-direction: row;
    margin: 0 auto 20px;
    width: 740px;
  }

  .list_type4_box {
    height: 230px;
  }

  .list_type4_left {
    width: 150px;
    margin-right: 80px;
    background-image: url("../../../static/res/market_analysis/slice1.png");
    background-repeat: no-repeat;
    background-position: center right;
    padding-right: 100px;
    text-align: left;

  }

  .list_type4_right {
    width: 510px;
  }

  .list_type4_right .content {
    text-indent: 0;
  }
  .bg8 .title{
    margin-top: 40px;
    margin-bottom: 40px;
  }


</style>
