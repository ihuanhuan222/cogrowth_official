<template>
  <div id="app">

    <router-view name="header" id="index_high"></router-view>
    <router-view id="index_low"/>
    <router-view name="footer"></router-view>

  </div>
</template>

<script>

</script>

<style>
  @import "../static/css/main.css";
  @import "../static/css/front.css";

  #app {
    font-family: SourceHanSans-Light,'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #index_high {
    position: relative;
    z-index: 1;
  }

  #index_low {
    position: relative;
    z-index: 0;
  }

  * {
    padding: 0;
    margin: 0;
  }
</style>
