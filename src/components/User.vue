<template>
<div>
  <div  class="user">
    <h2>
      User {{ $route.params }} {{ $route.query }}     
    </h2>    
    <router-view></router-view>   
  </div>  
</div>
</template>

<script>
  export default {
      watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(to,from)
      }
    }
  }
</script>

<style    scoped>
  .user {
    border: 1px solid  red;
    height: 300px;
    width: 100%;
    /* width: 100px; */
  }
</style>
