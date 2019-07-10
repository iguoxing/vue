<template>
  <div class="mobile-xcx">
   {{msg}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome'
    }
  },
  created () {}
}
</script>
<style lang="less">
.phone-banner{
  position: fixed;
  top: 0;
  z-index: 10;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: .18rem .3rem;
  background: #fff;
  border-bottom: solid .02rem #eaeaea;
  .banner-logo{
    width: .63rem;
    height: .17rem;
  }
  .banner-group{
    width: .17rem;
    height: .15rem;
  }
}

.flex-center-center{
  display: flex;
  justify-content: center;
  align-items: center;
}

// 小程序推广
.mobile-xcx{

}

.phone-footer{
  text-align: left;
  padding: 0 .3rem;
  font-weight: 500;
  .footer-title{
    margin-bottom: .04rem;
    opacity: 0.5;
    font-size: .12rem;
    color: #3d3f48;
  }
  .footer-number{
    display: flex;
    align-items: center;
    margin-bottom: .46rem;
    height: .17rem;
    font-size: .12rem;
    font-weight: 500;
    color: #b3b9c1;
    .phone-img{
      margin-right: .08rem;
      width: .12rem;
      height: .13rem;
    }
  }
  .footer-right{
    position: relative;
    margin-bottom: .55rem;
    margin-left: -.36rem;
    width: 3.8rem;
    opacity: 0.5;
    transform: scale(0.8);
    font-size: .1rem;
    color: #687484;
  }
}
</style>



