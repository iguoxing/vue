<template>
  <div class="index-section">
    <section class="container">
        <!--ASO服务-->
        <article class="asou-service index-col-12">
            <img class="asou-banner" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/aso.png">
            <div class="asou-section">
                <h5 class="asou-title">ASO 服务</h5>
                <div class="asou-explain">
                  <label>专业的优化方案 <img class="asou-notice-1" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/notive_1.png"></label>+
                  <label>高效的优化工具 <img class="asou-notice-2" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/notive_2.png"></label>，
                  提升 App 在商店的搜索权重，让获客更精准！
                </div>
                <div class="asou-line"></div>
                <h6 class="asou-sub-title">ASO 原因</h6>
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
                <div class="asou-handle">
                  <a class="index-btn">了解更多</a>
                </div>
            </div>
            <img class="asou-section-bg" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/printing.svg">
        </article>
        
        <!-- 优惠券 -->
        <article class="coupon-service">
          <img class="coupon-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/coupon.png">
          <div class="coupon-section">
            <h5 class="coupon-title">优惠券</h5>
            <div class="coupon-info">注册立享 “56 折优惠券” + “1 小时免费专家优化辅导” ！</div>
          </div>
          <div>
            <a class="index-btn">立即领券</a>
          </div>
        </article>

        <!-- 了解多点推客\激励营销 -->
        <article class="tweeter-pay">
          <div class="know-item know-tweeter">
            <img class="know-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/tweeter.png">
            <a class="know-section">
              <div class="know-title">了解多点推客</div>
              <div class="know-info">推荐好友体验ASO，就能获得最高10%返利 !</div>
            </a>
          </div>
          <div class="know-item know-pay">
            <img class="know-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/market.png">
            <a class="know-section">
              <div class="know-title">了解激励营销</div>
              <div class="know-info">小程序获客、游戏CPL，任务高度定制，我有用户，你有需求吗？</div>
            </a>
          </div>
        </article>

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
.index-section{
  padding: .3rem;
  width: 12rem;
  font-size: .12rem;
  .asou-service{
    position: relative;
    display: flex;
    margin-bottom: .2rem;
    width: 11.8rem;
    text-align: left;
    padding-top: .6rem;
    border-radius: .06rem;
    background-image: linear-gradient(116deg, #6348e9, #6089ff);
    font-weight: 500;
    color: #fff;
    .asou-banner{
      margin-left: .48rem;
      width: 2.27rem;
      height: 2.89rem;
      margin-top: -.26rem;
      z-index: 1;
    }
    .asou-section{
      margin-left: -.1rem;
      .asou-title{
        margin: 0 0 .1rem;
        font-size: .26rem;
      }
      .asou-explain{
        margin-bottom: .6rem;
        color: rgba(255, 255, 255, 0.8);
        font-size: .16rem;
        line-height: 1.63;
        label{
          position: relative;
          border-bottom: dotted .02rem #ffe053;
          padding-bottom: .04rem;
          .asou-notice-1,.asou-notice-2{
            position: absolute;
            width: .89rem;
            height: .26rem;
            left: 40%;
            top: .3rem;
          }
        }
      }
      .asou-line{
        width: 8.2rem;
        opacity: 0.2;
        border: solid .005rem #ffffff;
      }
      .asou-sub-title{margin: .3rem 0 .2rem;font-size: .16rem;}
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
        font-size: .10rem;
        font-weight: 400;
        color: #fff;
        .feature-item{
          margin-right: .28rem;
          text-align: center;
          .feature-img{
            height: .28rem;
            margin-bottom: .12rem;
          }
        }
        .feature-item.active{
          .feature-title{width:1.28rem;color: #ffe053;}
        }
      }
      .index-btn{
        box-shadow: 0 .08rem .13rem 0 rgba(23, 83, 255, 0.73);
        background-image: linear-gradient(to bottom, #ffffff, #f5f7f9);
        border: solid .01rem #0085f3;
        color: #2293ff;
      }
      .asou-handle{
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: .4rem;
      }
    }
    .asou-section-bg{
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  .coupon-service{
    display: flex;
    align-items: center;
    margin-bottom: .2rem;
    width: 11.8rem;
    height: 1.85rem;
    box-sizing: border-box;
    padding-left: 0.5rem;
    padding-right: .9rem;
    background-image: url(https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/index/coupon_bg.png);
    background-size: cover;
    .coupon-img{
      margin-right: .3rem;
      width: 1.8rem;
      height: 1.44rem;
    }
    .coupon-section{
      margin-right: 2.42rem;
      text-align: left;
      font-weight: 500;
      color: #fff;
      .coupon-title{
        margin-top: 0;
        margin-bottom: .08rem;
        font-size: .26rem;
      }
      .coupon-info{
        font-size: .16rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .index-btn{
      box-shadow: 0 .08rem .1rem 0 rgba(208, 2, 27, 0.36);
      background-image: linear-gradient(to bottom, #ffffff, #f5f7f9);
      border: solid .01rem #e4e4e4;
      color: #f76460;
    }

  }
  .tweeter-pay{
    display: flex;
    .know-item{
      display: flex;
      width: 5.8rem;
      height: 1.2rem;
      border-radius: .06rem;
      margin-right: .2rem;
      box-sizing: border-box;
      padding:0 .3rem;
      .know-section{
        margin-top: .3rem;
        text-align: left;
        font-weight: 500;
        color: #fff;
        .know-title{
          font-size:.2rem;
        }
        .know-info{
          line-height: 2;
          font-size: .12rem;
          opacity: .8;
        }
      }
    }
    .know-item.know-tweeter{
      background-image: linear-gradient(165deg, #42a0ff, #2075ff);
      .know-img{
        margin-top: .22rem;
        margin-right: .2rem;
        width: 2.2rem;
        height: .98rem;
      }
    }
    .know-item.know-pay{
      background-image: linear-gradient(164deg, #c4c6ca, #7b7f99);
      .know-img{
        margin-top: .04rem;
        margin-right: .6rem;
        width: 1.81rem;
        height: 1.16rem;
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

</style>



