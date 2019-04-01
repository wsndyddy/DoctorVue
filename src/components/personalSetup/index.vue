<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="uc_top">
          <dl class="uc_head">
            <dt><img src="../../assets/img/headin.png" alt="背景图像" /></dt>
            <dd>{{$t('personalCenter.modifyPhoto')}}</dd>
          </dl>
          <div class="uc_info">
            <div class="uc_name">{{$t('personalCenter.welcome')}}张晓华</div>
            <div class="uc_tips">
              <i>{{$t('personalCenter.tipLogin')}}38{{$t('units.frequency')}}，{{$t('personalCenter.tipTime')}} 2019-1-19 12:23:21</i>
              <u>{{$t('personalCenter.logout')}}</u>
            </div>
          </div>
        </div>
        <div class="clearfix">
          <div class="uc_sider">
            <ul>
              <li class="on">{{$t('personalCenter.accountSettings')}}</li>
              <li><router-link to="/PersonalManage">{{$t('personalCenter.accountManagement')}}</router-link></li>
            </ul>
          </div>
          <div class="uc_main">
            <div class="uc_form">
              <dl><dt>{{$t('personalCenter.organization')}}</dt><dd><i>北京长安医院</i></dd></dl>
              <dl><dt>{{$t('personalCenter.department')}}</dt><dd><i>乳腺科</i></dd></dl>
              <dl><dt>{{$t('personalCenter.address')}}</dt><dd><i>背景是朝阳区大望路88号长安医院</i></dd></dl>
              <dl><dt>{{$t('personalCenter.tel')}}</dt><dd><i>010-12345678</i></dd></dl>
              <dl><dt>{{$t('personalCenter.name')}}</dt><dd><input class="uc_input" type="text" value="张晓华" /></dd></dl>
              <dl>
                <dt>{{$t('personalCenter.sex')}}</dt>
                <dd>
                  <ul class="uc_diyselect">
                    <li>男</li>
                    <li class="selected">女</li>
                  </ul>
                </dd>
              </dl>
              <dl><dt>{{$t('personalCenter.birthday')}}</dt><dd><input class="uc_input" type="text" value="0000/00/00" /></dd></dl>
              <dl><dt>{{$t('personalCenter.phone')}}</dt><dd><input class="uc_input" type="text" placeholder="请输入手机号码" /></dd></dl>
              <dl><dt>{{$t('personalCenter.mail')}}</dt><dd><input class="uc_input" type="text" placeholder="请输入邮箱" /></dd></dl>
              <dl><dt>{{$t('personalCenter.wechat')}}</dt><dd><input class="uc_input" type="text" value="23423423442" /></dd></dl>
              <dl><dt>{{$t('personalCenter.account')}}</dt><dd><input class="uc_input" type="text" value="xiaohua01" /></dd></dl>
              <dl><dt>{{$t('personalCenter.password')}}</dt><dd><input class="uc_input" type="password" placeholder="请输入新密码" /></dd></dl>
              <dl><dt>{{$t('personalCenter.confirm')}}</dt><dd><input class="uc_input" type="password" placeholder="请再次输入新密码" /></dd></dl>
            </div>
            <div class="ucbtn_box">
              <i-button class="ybtn ybtn_dark">{{$t('btnBar.btn_modify')}}</i-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'PersonalSetup',
  data () {
    return {

    }
  },
  components: {
    leftMenu
  }
}
</script>

<style scoped>

</style>
