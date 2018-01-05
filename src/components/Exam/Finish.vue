<template>
  <div class="center-content">
    <div>
      <div class="base-list">
        <div class="title">我已审批的</div>
        <div class="search flex-wrap">
          <input type="search" class="condition margin-top-2 margin-right-2" placeholder="请输入">
          <button class="btn-primary btn-search margin-top-2 margin-right-2">搜索</button>
          <!-- <p class="multi-select margin-top-2">审批类型
            <i class="arrow arrow-down"><span></span></i>
          </p> -->
          <el-select class="margin-top-2" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <table class="table margin-top-3">
          <thead>
            <tr>
              <th>审核标题</th>
              <th>审批摘要</th>
              <th>发起时间</th>
              <th>完成时间</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>范薇的发票申请</td>
              <td>
                发票类型：预开发票<br> 申请客户：北京西天取经科技有限公司
                <br> 预开金额：¥ 123,1422.00
              </td>
              <td>2018-03-21</td>
              <td>2018-03-21</td>
              <td>待审批</td>
              <td>
                <a @click="check">审批</a>
              </td>
            </tr>
            <tr>
              <td>范薇的发票申请</td>
              <td>
                发票类型：预开发票<br> 申请客户：北京西天取经科技有限公司
                <br> 预开金额：¥ 123,1422.00
              </td>
              <td>2018-03-21</td>
              <td>2018-03-21</td>
              <td>宋娟审批中</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        <div class="block pull-right">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- <div v-bind:class="{ active: isActive }"></div> -->
    <aside class="control-sidebar" v-bind:class="{ 'control-sidebar-open': isActive }">
      <div class="title">发票详情</div>
      <div class="list">
        <p class="info">
          <label>发票抬头</label>
          <span class="des">北京广联互动传媒有限公司</span>
        </p>
        <p class="info">
          <label>税务登记证</label>
          <span class="des">912948885731687</span>
        </p>
        <p class="info">
          <label>发票抬头</label>
          <span class="des">华夏银行股份有限公司北京车支行</span>
        </p>
        <p class="info">
          <label>开户行账号</label>
          <span class="des">1952509104991882351</span>
        </p>
        <p class="info">
          <label>注册地址</label>
          <span class="des">北京市丰台区西马场北里25号501</span>
        </p>
        <p class="info">
          <label>固定电话</label>
          <span class="des">010-9275112</span>
        </p>
        <p class="info">
          <label>三证合一</label>
          <span class="des">是</span>
        </p>
      </div>
      <div class="title">当前合同</div>
      <div class="down">
        <label class="link">海南尤达科技有限公司合同.pdf</label>
        <a class="load">下载查看</a>
      </div>
      <div class="man">
        <p class="apply">
          <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/sidebar/head.png">
          <span class="name">豫宛如</span>
          <span class="state">发起申请</span>
          <span class="date pull-right">
            2017-04-21   0:40:21
          </span>
        </p>
        <img class="connect" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/sidebar/connect.png" />
        <p class="apply active">
          <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/sidebar/head.png">
          <span class="name">介恨荷（我）</span>
          <span class="state">等待审批</span>
          <span class="green-dot pull-right"></span>
        </p>
        <p class="send-title">抄送人<span class="des">（审核通过后，通知抄送人）</span></p>
        <div class="send-list">
          <p class="send-info">
            <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/sidebar/head.png">
            <span class="name">琴清馨</span>
          </p>
          <p class="send-info">
            <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/sidebar/head.png">
            <span class="name">琴清馨</span>
          </p>
          <p class="send-info">
            <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/sidebar/head.png">
            <span class="name">琴清馨</span>
          </p>
          <p class="send-info">
            <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/sidebar/head.png">
            <span class="name">琴清馨</span>
          </p>
          <p class="send-info">
            <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/sidebar/head.png">
            <span class="name">琴清馨</span>
          </p>
        </div>
      </div>
      <div class="btn-check">
        <a class="handle pass" @click="closeRight">审核通过</a>
        <a class="handle refuse" @click="closeRight">审核拒绝</a>
      </div>
    </aside>
  </div>
</template>

<script>
  export default {
    // props: ['isActive'],
    data () {
      return {
        isActive: false,
        isA: true,
        isB: true,
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '待审核'
        }, {
          value: '选项3',
          label: '已通过'
        }, {
          value: '选项4',
          label: '已拒绝'
        }, {
          value: '选项5',
          label: '已删除'
        }],
        value: '选项3',
        currentPage4: 4
      }
    },
    methods: {
      check () {
        this.isActive = true
      },
      closeRight () {
        this.isActive = false
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/css.css";
</style>

<style lang="less">

.el-input__inner{width: 120px;height: 40px;}

.control-sidebar {
    top: 0;
    right: -455px;
    width: 450px;
    -webkit-transition: right 0.3s ease-in-out;
    -o-transition: right 0.3s ease-in-out;
    transition: right 0.3s ease-in-out;
    position: absolute;
    // padding-top: 50px;
    z-index: 1010;
    background: #fff;
    box-shadow: 0 0 21px 0 rgba(0, 0, 0, 0.2);
    color: #363636;
    // margin-top: 60px;
    // bottom: 0;
    font-weight: 500;
    text-align: left;
    .title{
      font-size: 18px;
      color: #363636;
      padding-left: 26px;
      margin-top: 25px;
      border-left: 4px solid #0081ff;
    }
    .list{
      margin-top:20px;
      .info{
        margin:0 20px 10px;
        background-color: #fdfdfd;
        border: solid 1px #f1f5f8;
        label{
          border-right: solid 1px #f1f5f8;
          color: #999eae;
          margin: 0;
          padding: 12px 0;
          width: 108px;
          text-align: center;
        }
        .des{
          color: #363636;
          padding: 12px 0 12px 20px;
        }
      }
    }
    .down{
      border-radius: 4px;
      border: solid 1px #f1f5f8;
      margin: 15px 30px;
      font-size: 13px;
      .link{
        color: #0081ff;
        padding: 10px 0 10px 20px;
        width: 290px;
        border-right: solid 1px #f1f5f8;
        margin: 0px;
      }
      .load{
        color: #363636;
        padding-left: 20px;
      }
    }
    .man{
      margin-top: 33px;
      border-top: solid 0.5px #dfdfdf;
      color: #363636;
      font-size: 13px;
      padding-top: 25px;
      .apply{
        margin:0 15px;
        padding:6px 15px;
        img{margin-right: 12px;}
        .name{padding-right: 15px;}
        .date{padding-top: 13px;}
        .state,.date{color: #999eae;}
      }
      .connect{margin-left: 50px;}
      .apply.active{
        font-weight: 600;
        .name{color: #0081ff;}
        .state{font-weight: 500;}
        .green-dot{
          width: 8px;
          height: 8px;
          background-color: #20ea25;
          box-shadow: 0 0 8px 0 #2bda30;
          border-radius: 8px;
          margin-top: 18px;
        }
      }
      .send-title{
        margin-left: 30px;
        margin-top: 30px;
        font-size: 14px;
        .des{color: #a1a6b5;;}
      }
      .send-list{
        margin-left: 30px;
        display: flex;
        flex-wrap:wrap;
        .send-info{
          margin: 12px 12px 0 0;
          border-radius: 4px;
          background-color: #fdfdfd;
          border: solid 1px #f1f5f8;
          width: 104px;
          padding: 8px 0 8px 12px;
          img{width: 32px;}
          .name{padding-left: 6px;}
        }
      }
    }
    .btn-check{
      margin-top:45px;
      display: flex;
      .handle{
        width: 50%;
        font-size: 14px;
        color: #fdfdfd;
        padding: 11px 83px;
      }
      .handle.pass{background-color: #0081ff;}
      .handle.refuse{background-color: #999eae;}
    }
}
.control-sidebar.control-sidebar-open{
    right: 0;
}
</style>
