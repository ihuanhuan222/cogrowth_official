<template>

  <div class="main_layout bg2">

    <div class="top_pic">
      <div class="w1200_center">
        <div class="big_title">Cogrowth B+</div>
      </div>
    </div>
    <div class="main">
      <div class="title">{{datas.title}}</div>
      <div class="des"><span>责任编辑：{{datas.author}}</span><span class="time">{{datas.create_time}}</span></div>
      <div class="content" v-html="datas.content">
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'indexA',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        datas:{}
      }
    }, methods: {
      getDatas(id) {
        var that = this;

        this.$axios.get('/queryContent?id='+id)
          .then(function (response) {
            that.datas = response.data.data;

            console.log(response.data.data);
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    },mounted() {
      this.getDatas(this.$route.params.id);
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

  .top_pic {
    width: 100%;
    height: 230px;
    display: flex;
    background-color: #1c274d;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("http://official-html.qiniu.kuchengzhang.com/nes_detail_top_pic.png");
  }

  .main {
    flex-direction: column;
    display: flex;
    margin: 87px auto 0;
    padding-bottom: 87px;
    width: 1000px;
    height: auto;
    overflow: hidden;
    min-height: 300px;
    text-align: left;
    font-size: 16px;
    color: #627792;
  }


  .big_title {
    text-align: left;
    font-size: 36px;
    color: #EFF3F9;
    margin: 150px 0 0px 50px;
  }

  .title {
    color: #3A478F;
    font-size: 22px;
    line-height: 44px;
    font-weight: bold;
  }

  .des {
    display: flex;
    line-height: 60px;
    flex-direction: row;
    justify-content: space-between;
  }


  .bg2 {
    background-image: url("http://official-html.qiniu.kuchengzhang.com/market_analysis_bg2.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left 220px;
  }
</style>
