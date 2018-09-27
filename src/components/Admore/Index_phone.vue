<template>
  <div class="index-page">
    <section class="phone-banner">
      <img class="banner-logo" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/assets/img/home/frontend/logo_b.png">
      <img class="banner-group" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home%2Fv3%2Fimg%2Fcommon%2Fgroup_btn.png">
    </section>

    <section class="index-section">
      <!-- 优惠券 -->
      <article class="coupon-service">
        <h5>优惠券</h5>
        <div class="coupon-sub-title">注册立享 “56 折优惠券” + “1 小时免费专家优化辅导” ！</div>
        <div class="flex-center-center">
          <a href="/businesss" class="index-btn">立即领券</a>
        </div>
      </article>

      <!-- ASOU 服务 -->
      <article class="asou-service">
        <h5 class="asou-title">ASO 服务</h5>
        <div class="asou-explain">
          <label>
            专业的优化方案 + 高效的优化工具，
            <img class="asou-notice-1" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/notive_1.png">
            <img class="asou-notice-2" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/notive_2.png">
          </label>
          <div class="asou-explain-info">提升 App 在商店的搜索权重，让获客更精准！</div>
        </div>
        <div class="asou-line"></div>
        <div class="asou-sub-title">ASO 原因</div>
        <div class="asou-sub-explain">
          <div>1. 与传统广告相比，ASO 操作简便，成本更低！</div>
          <div>2. App Store 作为 iOS 应用唯一下载入口，展示位仅有 3 种。 </div>
        </div>
        <div class="asou-feature">
          <div class="feature-item">
            <img class="feature-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/rank.svg">
            <div class="feature-title">官方排行榜</div>
          </div>
          <div class="feature-item active">
            <img class="feature-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/search.svg">
            <div class="feature-title">65% 的流量源自搜索</div>
          </div>
          <div class="feature-item">
            <img class="feature-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/advise.svg">
            <div class="feature-title">官方编辑推荐</div>
          </div>
        </div>
      </article>

      <!-- 了解多点推客、了解激励政策 -->
      <article class="tweeter-pay">
        <div class="know-item know-tweeter">
            <a class="know-section">
              <div class="know-title">了解多点推客</div>
              <div class="know-info">推荐好友体验ASO，就能获得最高10%返利 !</div>
            </a>
          </div>
          <div class="know-item know-pay">
            <a class="know-section">
              <div class="know-title">了解激励营销</div>
              <div class="know-info">小程序获客、游戏CPL，任务高度定制，我有用户，你有需求吗？</div>
            </a>
          </div>
      </article>
    </section>

    <!-- 底部 -->
    <section class="phone-footer">
      <h5 class="footer-title">北京市朝阳区朝阳路85号院5号楼C座</h5>
      <div class="footer-number">
        <img class="phone-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home%2Fv3%2Fimg%2Findex%2Fphone.svg">
        010-57239005
      </div>
      <div class="footer-right">
        Copyright © 2016.多点科技 All rights reserved. ICP证：京12011038号-8
      </div>
    </section>

    

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

.index-section{
  margin-top: .55rem;
  margin-bottom: .17rem;
  padding: .24rem 0.2rem 0;
  border-bottom: solid .02rem #f6f6f6;
  font-size: .12rem;
  .asou-service{
    position: relative;
    margin-bottom: .2rem;
    text-align: left;
    padding: .3rem .18rem .4rem .3rem;
    border-radius: .04rem;
    background-image: linear-gradient(116deg, #6348e9, #6089ff);
    font-weight: 500;
    color: #fff;
    .asou-title{
      margin: 0 0 .12rem;
      font-size: .26rem;
    }
    .asou-explain{
      color: rgba(255, 255, 255, 0.8);
      font-size: .14rem;
      line-height: 1.86;
      label{
        position: relative;
        padding-bottom: .02rem;
        background-image: url(https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home%2Fv3%2Fimg%2Findex%2Fasou_title_bg.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position-y: center;  
        .asou-notice-1{
          position: absolute;
          width: .89rem;
          height: .26rem;
          left: 16%;
          top: .21rem;
        }
        .asou-notice-2{
          position: absolute;
          width: .89rem;
          height: .26rem;
          left: 68%;
          top: .21rem;
        }
      }
    }
    .asou-explain-info{
      margin-top: .33rem;
      margin-bottom: .18rem;
    }
    .asou-line{
      margin-bottom: .23rem;
      width: 2.75rem;
      opacity: 0.2;
      border: solid .005rem #ffffff;
    }
    .asou-sub-title{
      margin: 0 0 .12rem;
      font-size: .16rem;
    }
    .asou-sub-explain{
      margin-bottom: .4rem;
      line-height: 1.54;
      color: rgba(255, 255, 255, 0.85);
      font-size: .13rem;
      font-weight: 400;
    }
    .asou-feature{
      display: flex;
      margin-bottom: .09rem;
      margin-left: -.1rem;
      font-size: .10rem;
      font-weight: 400;
      color: #fff;
      .feature-item{
        margin-right: .21rem;
        text-align: center;
        .feature-img{
          height: .28rem;
          margin-bottom: .12rem;
        }
        .feature-title{transform: scale(.8);width: .6rem;}
      }
      .feature-item.active{
        .feature-title{width:1.16rem;color: #ffe053;}
      }
      .feature-item:last-child{
        margin-right: 0;
        .feature-title{width: .76rem;}
      }
    }
  }
  .coupon-service{
    margin-bottom: .2rem;
    width: 3.34rem;
    height: 3.52rem;
    text-align: left;
    box-sizing: border-box;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
    padding-right: .25rem;
    background-image: url(https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/coupon_mini.png);
    background-size: cover;
    background-repeat: no-repeat;
    font-weight: 500;
    h5{
      margin-top: 0;
      margin-bottom: .12rem;
      font-size: .26rem;
      color: #ffffff;
    }
    .coupon-sub-title{
      margin-bottom: 1.47rem;
      line-height: 1.57;
      font-size: .14rem;
      color: rgba(255, 255, 255, 0.8);
    }
    .index-btn{
      // position: relative;
      // bottom: -.3rem;
      // margin-bottom: .8rem;
      border-radius: .04rem;
      box-shadow: 0 .08rem .1rem 0 rgba(208, 2, 27, 0.36);
      background-image: linear-gradient(to bottom, #ffffff, #f5f7f9);
      border: solid .01rem #e4e4e4;
      text-decoration: none;
      color: #f76460;
      font-size: .16rem;
      font-weight: 500;
    }

  }
  .tweeter-pay{
    .know-item{
      display: flex;
      height: 1.2rem;
      border-radius: .06rem;
      margin-bottom: .2rem;
      box-sizing: border-box;
      padding:0 .3rem;
      .know-section{
        margin-top: .3rem;
        text-align: left;
        font-weight: 500;
        color: #fff;
        .know-title{
          margin-bottom: .06rem;
          font-size:.2rem;
        }
        .know-info{
          line-height: 2;
          font-size: .12rem;
          color: rgba(255, 255, 255, 0.8)
        }
      }
    }
    .know-item.know-tweeter{
      background-image: linear-gradient(165deg, #42a0ff, #2075ff);
    }
    .know-item.know-pay{
      background-image: linear-gradient(164deg, #c4c6ca, #7b7f99);
      .know-section{
        margin-top: .23rem;
      }
    }
    .know-item:last-child{margin-right: 0;}
  }
  .index-btn{
    z-index: 1;
    cursor: pointer;
    padding: .1rem .58rem;
    border-radius: .04rem;
    font-size: .16rem;
  }
  .index-btn:hover{opacity: 0.8;}
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



