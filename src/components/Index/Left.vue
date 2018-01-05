<template>
  <!-- <div class="ad-base-frame"></div> -->
  <div class="frame">
        <div class="left-side ad-flex sidebar-shrink">
        <div class="first-level">
            <div class="left-case-1 side-shadow">
              <a href="http://work.duodian.com/main"><img class="head" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/common/icon_main.png"></a>
            </div>
            <div class="left-case-1 sidebar-fold side-shadow">
              <img class="icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/common/icon_display.png">
              <!-- <img class="icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/common/icon_shrink.png"> -->
            </div>
            <div class="left-case side-shadow">
                <img class="head" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/common/default.jpg">
            </div>
            <div class="left-case side-shadow active">
                <img class="icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/common/icon_itry.png">
            </div>
            <div class="left-case side-shadow">
              <img class="icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/common/icon_bao.png">
            </div>
            <div class="left-case-1 sidebar-bottom">
              <a class="ad-flex" href="http://work.duodian.com/layout"><img class="icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/common/icon_exit.png"></a>
            </div>
        </div>
        <div class="second-level">
            <div class="currunt-title side-shadow"><span>应用试客</span></div>
            <div class="heigth-10"></div>
            <div class="first-title">
              <i class="glyphicon glyphicon-th-large"></i>
              <span>概览</span>
            </div>
            <div class="first-title">
              <i class="glyphicon glyphicon-file"></i>
              <span>业务查询</span>
            </div>
            <div class="first-title active">
              <i class="glyphicon glyphicon-file"></i>
              <span>财务数据</span>
            </div>
            <div class="second-list">
              <div class="second-title">
                <i class="dot"></i>
                <span>发票流量</span>
              </div>
              <div class="second-title active">
                <i class="dot"></i>
                <span>财务流水</span>
              </div>
              <div class="second-title">
                <i class="dot"></i>
                <span>汇款底单</span>
              </div>
              <div class="second-title">
                <i class="dot"></i>
                <span>结算单</span>
              </div>
            </div>
            <div class="first-title">
              <i class="glyphicon glyphicon-user"></i>
              <span>客户管理</span>
            </div>
        </div>
    </div>
    <div class="frame-setting flex-col-center">
      <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/common/settings_icon.png">
      <span class="bottom-title">个人设置</span>
      <div class="bottom-dialog">
        <div class="class-a">
          <div class="menu-title">个人信息</div>
          <div class="menu-title">密码修改</div>
          <div class="menu-title">绑定微信</div>
          <div class="menu-title">帮助文档</div>
        </div>
        <div class="class-b">注销登录</div>
      </div>
    </div>


    <!-- <h1>{{ msg }}</h1>
    <h2>AdMore</h2> -->

</div>

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
.left-side{
    width: 240px;
    height: 100%;
    background: #42485B;
    padding-top: 0;
    z-index: auto;
    .side-shadow{box-shadow: inset 0 -0.5px 0 0 rgba(255, 255, 255, 0.11);}
    .sidebar-fold {
      background: #42485B;
      width: 240px;
      height: 40px;
      text-align: center;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      .icon {
        width: 24px;
        height: 24px;
        margin: 8px auto;
        }
    }
    .left-bottom {height: 100%;}
    .first-level{
        width: 60px;
        height: 100%;
        background-color: #283242;
        .left-case,.left-case-1{
            width: 60px;
            height: 60px;
            cursor: pointer;
            .head{
                width: 34px;
                height: 34px;
                border-radius: 34px;
                margin: 13px;
            }
            .icon{width: 32px;height: 32px;margin: 14px;}
        }
        .left-case.active{background-color:rgba(0, 0, 0, 0.5);cursor: auto;}
        .left-case-1.sidebar-fold{
            background: #42485B;
            .icon{
                width: 24px;
                height: 24px;
                margin: 19px;
            }
        }
        .left-case-1.sidebar-bottom{
            position: fixed;
            bottom: 0px;
            height: 60px;
            font-size: 14px;
            font-weight: 500;
            text-align: left;
            // box-shadow: inset 0px 0px 0 30px rgba(255, 255, 255, 0.11);
            .icon{
                width: 24px;
                height: 24px;
                margin: 19px;
            }
        }
    }
    .second-level{
        width: 180px;
        height: 100%;
        background-color: #323d4e;
        // overflow-y: auto;
        .currunt-title{
            width: 180px;
            height: 60px;
            text-align: left;
            padding-top:17px;
            padding-left: 20px;
            span{
                font-size: 18px;
                font-weight: 600;
                color: #ffffff;
            }
        }
        .first-title{
            width: 140px;
            height: 34px;
            margin-top: 12px;
            margin-left: 20px;
            text-align: left;
            font-weight: 500;
            color:#999eae;
            font-size: 14px;
            display: inline-block;
            cursor: pointer;
            .glyphicon{margin: 9px 12px 9px 16px;}
        }
        .first-title.active{
            border-radius: 100px;
            background-color: #0081ff;
            color: #fff;
            cursor: auto;
            display: flex;
            justify-content: baseline;
            align-items: center;
        }
        .second-list{
            padding-top: 10px;
            .second-title{
                height: 17px;
                font-size: 12px;
                font-weight: 500;
                text-align: left;
                color: #757e8d;
                margin-top: 14px;
                margin-left: 32px;
                display: inline-block;
                width: 100%;
                cursor: pointer;
                .dot{
                    display: inline-block;
                    margin: 2px;
                    border-radius: 6px;
                    width: 6px;
                    height: 6px;
                    background-color: #4d5667;
                }
                span{margin-left: 10px;}
            }
            .second-title.active{
                color:#fff;
                cursor: auto;
                .dot{background-color: #0081ff;}
            }
            .second-title:last-child{margin-bottom: 18px;}
        }

    }
}
.left-side.sidebar-shrink{
    width: 60px;
}
</style>
