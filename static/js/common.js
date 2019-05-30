const my_router = function () {
  return {
    router_to_software: function() {
      this.$router.push({name: '软件系统'})
    }, router_to_down: function() {
      this.$router.push({name: '客户端下载'})
    }, router_to_lab: function() {
      this.$router.push({name: '脑科学实验室'})
    }, router_to_ai: function() {
      this.$router.push({name: '硬件展示'})
    }, router_to_barin: function() {
      this.$router.push({name: '训练教程'})
    }, router_to_product: function() {
      this.$router.push({name: '脑控产品'})
    }, router_to_goincogrowth: function() {
      this.$router.push({name: '走进酷成长'})
    }, router_to_aboutus: function() {
      this.$router.push({name: '关于我们'})
    }, router_to_news: function() {
      this.$router.push({name: '新闻资讯'})
    }, router_to_market: function() {
      this.$router.push({name: '市场分析'})
    }, router_to_jionus: function() {
      this.$router.push({name: '加入我们'})
    }, router_to_home: function() {
      this.$router.push({name: '首页'})
    }
  }
}

export {my_router}

