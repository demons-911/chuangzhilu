<template>
  <div id="app">
    <headers></headers>
    <router-view/>
    <foot></foot>
  </div>
  
</template>
<script lang="ts">
import headers from './components/header/header.vue'
import foot from './components/foot.vue'
export default {
  components: { headers,foot },
}
</script>
<style lang="less">

#app{
  font-family: '微软雅黑';
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
