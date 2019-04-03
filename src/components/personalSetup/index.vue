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
            <div class="uc_name">{{$t('personalCenter.welcome')}}{{ accArr.name }}</div>
            <div class="uc_tips">
              <i>{{$t('personalCenter.tipLogin')}}{{ accArr.frequency }}{{$t('units.frequency')}}，{{$t('personalCenter.tipTime')}}{{ accArr.logintime }}</i>
              <u @click="logout()">{{$t('personalCenter.logout')}}</u>
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
              <dl><dt>{{$t('personalCenter.organization')}}</dt><dd><i>{{ accArr.organization }}</i></dd></dl>
              <dl><dt>{{$t('personalCenter.department')}}</dt><dd><i>{{ accArr.department }}</i></dd></dl>
              <dl><dt>{{$t('personalCenter.address')}}</dt><dd><i>{{ accArr.address }}</i></dd></dl>
              <dl><dt>{{$t('personalCenter.tel')}}</dt><dd><i>{{ accArr.tel }}</i></dd></dl>
              <dl><dt>{{$t('personalCenter.name')}}</dt><dd><input class="uc_input" type="text" v-model="accArr.name" /></dd></dl>
              <dl>
                <dt>{{$t('personalCenter.sex')}}</dt>
                <dd>
                  <ul class="uc_diyselect">
                    <li @click="selSex(sexArr[0].name)" v-bind:class="{'selected': sexArr[0].default}">{{$t('personalCenter.man')}}</li>
                    <li @click="selSex(sexArr[1].name)" v-bind:class="{'selected': sexArr[1].default}">{{$t('personalCenter.woman')}}</li>
                  </ul>
                </dd>
              </dl>
              <dl><dt>{{$t('personalCenter.birthday')}}</dt><dd><input class="uc_input" type="text" v-model="accArr.birthday" /></dd></dl>
              <dl><dt>{{$t('personalCenter.phone')}}</dt><dd><input class="uc_input" type="text" :placeholder="$t('personalCenter.phoneTip')" v-model="accArr.phone" /></dd></dl>
              <dl><dt>{{$t('personalCenter.mail')}}</dt><dd><input class="uc_input" type="text" :placeholder="$t('personalCenter.mailTip')" v-model="accArr.mail" /></dd></dl>
              <dl><dt>{{$t('personalCenter.wechat')}}</dt><dd><input class="uc_input" type="text" :placeholder="$t('personalCenter.wechatTip')" v-model="accArr.wechat" /></dd></dl>
              <dl><dt>{{$t('personalCenter.account')}}</dt><dd><input class="uc_input" type="text" :placeholder="$t('personalCenter.accountTip')" v-model="accArr.account" /></dd></dl>
              <dl><dt>{{$t('personalCenter.password')}}</dt><dd><input class="uc_input" type="password" :placeholder="$t('personalCenter.passwordTip')" v-model="accArr.password" /></dd></dl>
              <dl><dt>{{$t('personalCenter.confirm')}}</dt><dd><input class="uc_input" type="password" :placeholder="$t('personalCenter.confirmTip')" v-model="accArr.confirm" /></dd></dl>
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
      accArr: {
        name: '张晓华',
        frequency: '21',
        logintime: '2019-3-19 12:23:21',
        organization: '北京长安医院',
        department: '乳腺科',
        address: '朝阳区大望路88号长安医院',
        tel: '010-12345678',
        sex: '女',
        birthday: '1980/08/08',
        phone: '13919800808',
        mail: 'zxh@163.com',
        wechat: '13919800808',
        account: 'zhangxiaohua',
        password: '123456',
        confirm: '123456'
      },
      sexArr: [{
        name: '男',
        default: false
      }, {
        name: '女',
        default: false
      }]
    }
  },
  components: {
    leftMenu
  },
  methods: {
    selSex (s) {
      this.sexArr.forEach((e) => {
        if (e.name === s) {
          e.default = true
        } else { e.default = false }
      })
    },
    logout () {
      // 退出登录过程
    }
  },
  created() {
    this.selSex(this.accArr.sex)
  }
}
</script>

<style scoped>

</style>
