<template>
  <div class="main_layout">
    <div class="side_nav_fixed">
      <div class="side_nav_top">Cogrowth B+</div>
      <div :class="item.sel?'side_nav_sub_clickz':'side_nav_sub'" @click="checks(index)"
           v-for="(item,index) in nav_list">{{item.title}}
      </div>
    </div>
    <div class="top_pic"></div>
    <div class="main">
      <div class="news_layout">
        <div v-for="item in news_list" class="news_row">
          <div class="time">{{item.create_time}}</div>
          <div class="title">
            <p class="title_des">{{item.title}}</p>
            <p class="more" @click="jump_page(item.id)">了解更多></p>
          </div>
        </div>
      </div>
      <div class="page_control">


        <img @click="change_page(0)"
             :src="currentPage==1?'../../../static/res/common/cant_left.png':'../../../static/res/common/can_left.png'">
        {{currentPage}}
        <img @click="change_page(1)"
             :src="currentPage<datas.pages?'../../../static/res/common/can_right.png':'../../../static/res/common/cant_right.png'">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'indexA',
    data() {
      return {
        currentPage: 1,
        currentTab: 0,
        nav_list: [
          {title: "公司新闻", sel: true},
          {title: "行业资讯", sel: false},
        ]
        , news_list: [],
        datas: {}
      }
    }, methods: {
      checks(index) {

        this.fresh(index)

      }, fresh(index) {
        if (this.currentTab == index) {
          return;
        } else {
          this.currentPage = 1;
          this.currentTab = index;
          this.getDatas(1);

        }
        for (var i = 0; i < this.nav_list.length; i++) {
          this.nav_list[i].sel = (index == i);
        }
      }, getDatas(pageNo) {

        var news_type =( this.currentTab == 0 ? 1001 : 1002);
        var that = this;

        let param = new URLSearchParams()
        param.append('news_type', news_type)
        param.append('pageNo', pageNo)
        param.append('pageSize', '4')

        this.$axios.post('/queryContentByPage', param)
          .then(function (response) {
            that.datas = response.data;
            that.news_list = response.data.list;

            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

      }, jump_page(id) {
                this.$router.push({path: '/newsdetail/' + '2/' + id})
                      }, change_page(type) {
        if (type == 0) {
          if (this.currentPage > 1) {
            this.currentPage--;
            this.getDatas(this.currentPage);
          }
        } else if (type == 1) {
          if (this.currentPage < this.datas.pages) {
            this.currentPage++;
            this.getDatas(this.currentPage);
          }
        }
      }
    }, mounted() {
      this.getDatas(1);
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


  .top_pic {
    width: 100%;
    height: 230px;
    background-color: #1c274d;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/join_us_top_pic.png");
  }

  .main {
    flex-direction: column;
    display: flex;
    margin: 0 auto;
    padding-left: 250px;
    width: 897px;
    height: auto;
    overflow: hidden;
    text-align: left;
    font-size: 16px;
  }

  .news_layout {
    min-height: 500px;
    display: flex;
    flex-direction: column;
  }

  .news_row {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .time {
    margin-right: 29px;
    color: #627792;
    line-height: 50px;
  }

  .title {
    color: #627792;
    width: 607px;
    line-height: 40px;
    padding-left: 100px;
    word-break: break-all;
    height: 120px;
    background-position: top left;
    background-repeat: no-repeat;
    background-image: url("../../../static/res/news/slice.png");
  }

  .title_des {
    overflow: hidden;
    text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .more {
    text-align: right;
    color: #8DA0CD;
    cursor: pointer;
  }


  .page_control {
    font-size: 16px;
    color: #6489D4;
    margin: 0 0 10px 750px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .page_control img {
    margin: 0 10px;
  }

</style>
