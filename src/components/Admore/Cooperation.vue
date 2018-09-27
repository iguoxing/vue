<template>
  <div class="frame">
    <h1>{{ msg }}</h1> 
    <h2>AdMore</h2> 

  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome'
    }
  },
  created () {
    // $('.ad-base-frame').initAdFrame({
    //     name:'后台正式测试',
    //     account:'test@test.com'
    // });
  }
}
</script>
<style lang="less">

</style>
