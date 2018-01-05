<template lang="html">
<div>
  <!-- <h1 @click="InitData">Test</h1> -->
  <left></left>
  <div class="toolbar ad-flex exam">
      <a class="first-btn" :class="[nowTab=='applyCheck' ? 'active' : '']" @click="changeTab('applyCheck')">发起审批</a>
      <span class="division"></span>
      <a class="first-tab" :class="[nowTab=='waitApply' ? 'active' : '']" @click="changeTab('waitApply')">待我审批的</a>
      <a class="first-tab" :class="[nowTab=='finishExam' ? 'active' : '']" @click="changeTab('finishExam')" >我已审批的</a>
      <a class="first-tab" :class="[nowTab=='IStart' ? 'active' : '']" @click="changeTab('IStart')">我发起的</a>
      <a class="first-tab" :class="[nowTab=='sendMe' ? 'active' : '']" @click="changeTab('sendMe')">抄送我的<span class="prompt">1</span></a>
      <!-- <a>抄送我的<span class="prompt">1</span></a> -->
  </div>

  <transition name="fade" mode="out-in">
    <keep-alive>
      <component :is="nowTab"></component>
    </keep-alive>
  </transition>

  <!-- <router-view></router-view> -->
</div>
</template>
<script>
import Left from '@/components/Index/Left'
import applyCheck from '@/components/Exam/Application' // 申请页
import waitApply from '@/components/Exam/Wait' // 待审核
import finishExam from '@/components/Exam/Finish' // 待审核
import IStart from '@/components/Exam/Start' // 待审核
import sendMe from '@/components/Exam/Send' // 待审核

export default {
  data () {
    return {
      nowTab: 'applyCheck',
      counter: 0
    }
  },
  computed: {},
  created () {},
  methods: {
    changeTab (tab) {
      this.nowTab = tab
    },
    InitData () {
      let user = 'test@test.com'
      $.ajax({
        url: 'http://101.201.122.124:9001/public/menu.jsonp',
        dataType: 'jsonp',
        async: false,
        data: {account: user},
        success: function (result) {
          console.log(result)
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
  },
  components: {
    Left, applyCheck, waitApply, finishExam, IStart, sendMe
  }
}
</script>

<style lang="less">
 .toolbar{
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    border-bottom: solid 0.5px #dfdfdf;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    position: absolute;
    top: 0px;
    margin-left: 240px;
    // left: 240px;
    // padding-left: 240px;
    .first-btn{
        margin:12px 30px 12px 50px;
        border-radius: 100px;
        padding: 8px 28px 8px 29px;
        border: solid 2px #0081ff;
        color: #0081ff;
        height: 20px;
        cursor: pointer;
    }
    .first-btn.active{
        color: #ffffff;
        background-color: #0081ff;
    }

    .division{
        width: 2px;
        height: 20px;
        border: solid 1px #e6eaee;
        margin: 20px 0;
        margin-right: -20px;
    }
    .first-tab{
        margin-left:50px;
        padding:20px 0;
        color: #999eae;
        cursor: pointer;
        font-size: 14px;
        // position: absolute;
        text-decoration: none;
        .prompt{
            position: relative;
            top:-8px;
            left: -8px;
            width: 15px;
            height: 15px;
            background-color: #ff4343;
            font-size: 10px;
            font-weight: 600;
            text-align: center;
            color: #ffffff;
            border-radius: 15px;
            display: inline-block;
            // padding-top: 1px;
        }
    }
    .first-tab.active{
        font-weight: 600;
        color: #363636;
        border-bottom: solid 3px #0081ff;
    }
}
.toolbar.exam{
    .first-tab.active{
        color: #0081ff;
    }
}
</style>
