<template>
<div class="center-content">
  <div class="base-list">
    <div class="title">待我审批的</div>
    <div class="search flex-wrap">
      <input type="search" class="condition margin-top-2 margin-right-2" placeholder="请输入">
      <button class="btn-primary margin-top-2 margin-right-2">搜索</button>
      <p class="multi-select margin-top-2">审批类型
        <i class="arrow arrow-down"><span></span></i>
      </p>
    </div>
    <table class="table margin-top-3">
      <thead>
        <tr>
          <th>审核标题</th>
          <th>审批摘要</th>
          <th>发起时间</th>
          <th>完成时间</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>范薇的发票申请</td>
          <td>
            发票类型：预开发票<br>
            申请客户：北京西天取经科技有限公司<br>
            预开金额：¥ 123,1422.00
          </td>
          <td>2018-03-21</td>
          <td>2018-03-21</td>
          <td>宋娟审批中</td>
        </tr>
        <tr>
          <td>范薇的发票申请</td>
          <td>
            发票类型：预开发票<br>
            申请客户：北京西天取经科技有限公司<br>
            预开金额：¥ 123,1422.00
          </td>
          <td>2018-03-21</td>
          <td>2018-03-21</td>
          <td>宋娟审批中</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<style scoped>
 @import "../../assets/css/css.css";
</style>
