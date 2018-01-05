<template>
<div class="center-content">
  <div class="application-form">
    <div class="form-frame">
      <div class="form-title flex-wrap">
            <div class="second-tab active" toggle-sid="apply_bill">发票申请</div>
            <div class="second-tab" toggle-sid="special_exam">特批申请</div>
            <div class="second-tab" toggle-sid="apply_coupon">代金券申请</div>
            <div class="second-tab" toggle-sid="remit_sheet">汇款底单申请</div>
            <div class="second-tab" toggle-sid="contract_exam">合同审批</div>
            <div class="second-tab" toggle-sid="customer_input">添加客户拜访</div>
      </div>
      <div class="second-btn-tab display-block" id="apply_bill">
          <div class="form-notice margin-top-3 flex-col-center">
            <div class="notice-des margin-left-3">这是本月第 5 次发票申请</div>
            <div class="notice-record margin-right-3">查看记录</div>
          </div>
          <div class="form-list">
            <div class="form-item flex-col-center">
            <div class="item-title">发票类型</div>
            <div class="item-des">预开发票</div>
          </div>
          <div class="form-divider"></div>
          <div class="form-item flex-col-center">
            <div class="item-title">申请客户</div>
            <input type="text" class="item-select" placeholder="请填写客户姓名">
            <!--<div class="item-select flex-col-center">
              <div>选填</div>
              <div><img class="item-arrow" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/admin/img/common/icon_arrow_down.png"/></div>
            </div>-->
          </div>
          <div class="form-divider"></div>
          <div class="form-item flex-col-center">
            <div class="item-title">审批人</div>
            <input type="text" class="item-select" placeholder="请填写审批人">
          </div>
          <div class="form-divider"></div>
          <div class="form-item form-remark">
            <div class="item-title">备注</div>
            <div class="item-remark">
              <textarea class="textarea-remark" onfocus="if(value=='200字以内'){value=''}" onblur="if (value ==''){value='200字以内'}">200字以内</textarea>
            </div>
          </div>
          <div class="form-divider"></div>
          <div class="form-item flex-col-center">
            <div class="item-title">抄送人</div>
            <input type="text" class="item-select" placeholder="请填写抄送人姓名">
          </div>
          <div class="form-item flex-col-center">
            <div class="item-title"></div>
            <div class="form-button">
              <button class="btn-primary">创建</button>
              <button class="btn-primary disabled margin-left-3">取消</button>
            </div>
          </div>
        </div>
      </div>
      <div class="second-btn-tab display-none" id="special_exam">
            <h1>12</h1>
      </div>
      <div class="second-btn-tab display-none" id="apply_coupon">
            <h1>13</h1>
      </div>
      <div class="second-btn-tab display-none" id="remit_sheet">
          <div class="form-list">
              <div class="form-item flex-col-center">
                  <div class="item-title">申请客户</div>
                  <input type="text" class="item-select" placeholder="请填写客户姓名">
              </div>
              <div class="form-divider"></div>
              <div class="form-item flex-col-center">
                  <div class="item-title">客户邮箱</div>
                  <div class="item-des">jiuskehu@kehu.com</div>
              </div>
              <div class="form-divider"></div>
              <div class="form-item flex-col-center">
                  <div class="item-title">选择提交方式</div>
                  <div class="item-radio ad-flex">
                      <div class="radio-info">
                        <input id="radio_item1" type="radio" class="input-radio" name="choose_way">
                        <label for="radio_item1"></label>
                        <span>提交汇款底单扫描件</span>
                      </div>
                      <div class="radio-info checked">
                        <input id="radio_item2" type="radio" name="choose_way" checked="checked">
                        <label for="radio_item2"></label>
                        <span>填写汇款底单信息</span>
                      </div>
                  </div>
              </div>
              <div class="form-divider"></div>
              <div class="form-item flex-col-center">
                  <div class="item-title">上传扫描件</div>
                  <div class="flex-col-center">
                    <div class="item-upload">
                      上传图标
                      <input type="file" class="upload-file">
                    </div>
                    <div class="upload-des">仅支持 JPG/PNG 图片文件<br>上传图片需<4M</div>
                  </div>
              </div>
              <div class="form-divider"></div>
              <div class="form-item flex-col-center">
                  <div class="item-title">联系人手机</div>
                  <input type="text" class="item-select" placeholder="请填写手机号">
              </div>
              <div class="form-divider"></div>
              <div class="form-item flex-col-center">
                  <div class="item-title">选择多点账户</div>
                  <div class="item-radio ad-flex">
                      <div class="radio-info">
                        <input id="radio_item3" type="radio" class="input-radio" name="account_way">
                        <label for="radio_item3"></label>
                        <span>北京多点账户</span>
                      </div>
                      <div class="radio-info checked">
                        <input id="radio_item4" type="radio" name="account_way" checked="checked">
                        <label for="radio_item4"></label>
                        <span>西藏多点账户</span>
                      </div>
                  </div>
              </div>
              <div class="form-divider"></div>
              <div class="form-item form-remark">
                    <div class="item-title">申请备注</div>
                    <div class="item-remark">
                      <textarea class="textarea-remark" onfocus="if(value=='200字以内'){value=''}" onblur="if (value ==''){value='200字以内'}">200字以内</textarea>
                    </div>
               </div>
               <div class="form-item flex-col-center">
                  <div class="item-title"></div>
                  <div class="form-button">
                      <button class="btn-primary">提交</button>
                      <button class="btn-primary disabled margin-left-3">取消</button>
                  </div>
                </div>
             </div>
          </div>
                <div class="second-btn-tab display-none" id="contract_exam">
                    <h1>15</h1>
                </div>
                <div class="second-btn-tab display-none" id="customer_input">
                    <h1>16</h1>
                </div>

    </div>

  </div>
</div>
</template>
<style scoped>
 @import "../../assets/css/css.css";
</style>
<script>
$(document).ready(function () {
  $("input[type='radio']").on('click', function () {
    $(this).parent('.radio-info').siblings('.radio-info').removeClass('checked')
    $(this).parent('.radio-info').addClass('checked')
  })

  $('.form-title .second-tab').on('click', function () {
    $('.second-tab').removeClass('active')
    $(this).addClass('active')
    $('.second-btn-tab').removeClass('display-block').addClass('display-none')
    $('#' + $(this).attr('toggle-sid') + '').removeClass('display-none').addClass('display-block')
  })
})
</script>

