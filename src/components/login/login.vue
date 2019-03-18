<template>
  <div class="login-bg">
    <div class="login" :style="bg_site">
      <div class="info">
        <div class="title">
          <img :src="titlebg"/>
          {{$t('login.sysName')}}
        </div>
        <div class="wx_code" v-if="isOpenWx">
          <img :src="imgUrl"/>
          <i-button type="primary" size="small" class="login_btn border-none" @click="goBack">
            {{$t('login.btn_back')}}
          </i-button>
        </div>
        <div v-else>
          <form class="inputInfo">
            <Row>
              <i-col class="bottom-line">
                <span class="tip" :style="iconUsername"></span>
                <input class="border-none"
                       type="text"
                       v-model="userName"
                       size="large"
                       @keyup.enter="gotoLogin"
                       :autofocus="focusToUsername"
                       :placeholder="$t('login.inputName')"/>
              </i-col>
            </Row>
            <Row>
              <i-col>
                <span class="tip" :style="iconPwd"></span>
                <input class="border-none"
                       type="password"
                       v-model="userPwd"
                       size="large"
                       autocomplete="false"
                       @keyup.enter="gotoLogin"
                       :autofocus="focusToPassword"
                       :placeholder="$t('login.inputPwd')"/>
              </i-col>
            </Row>
          </form>
          <div class="checkbox_user_sel">
            <Checkbox class="ivu-checkbox" v-model="rememberUser">{{$t('login.rememberUser')}}</Checkbox>
            <Checkbox class="ivu-checkbox f-r" v-model="autoLogin">{{$t('login.autoLogin')}}</Checkbox>
            <!-- TODO 微信登录功能暂未实现
            <div class="d-i-b ivu-checkbox-group-item" @click="openWx">
              <span class="wxIcon d-i-b" :style="wxIcon"></span>
              <label>{{$t('login.tipWexin')}}</label>
            </div>
            -->
          </div>
          <div type="flex" justify="center" align="middle" class="m-t-20">
            <i-button type="primary" size="small" class="login_btn border-none" @click="gotoLogin">
              {{$t('login.btn_login')}}
            </i-button>
          </div>
        </div>
      </div>
      <div class="copyright">
        &copy;{{$t('copyright.year')}}&nbsp;&nbsp;{{$t('copyright.name')}}&nbsp;&nbsp;{{$t('copyright.icp')}}&nbsp;&nbsp;{{$t('copyright.ver')}}
      </div>
    </div>
  </div>
</template>
<script>
import {login} from '@/api/user'
import {sendCmd} from '@/api/cmd'

export default {
  name: 'Login',
  data () {
    return {
      isOpenWx: false,
      imgUrl: require('../../assets/wxCode.jpg'),
      titlebg: require('../../assets/titlebg.png'),
      bg_site: {
        backgroundImage: 'url(' + require('../../assets/loginbg.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      userName: '',
      userPwd: '',
      rememberUser: false,
      autoLogin: false,
      focusToUsername: true,
      focusToPassword: false,
      iconUsername: {
        backgroundImage: 'url(' + require('../../assets/icon.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0'
      },
      iconPwd: {
        backgroundImage: 'url(' + require('../../assets/icon.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 -48px'
      },
      wxIcon: {
        backgroundImage: 'url(' + require('../../assets/wx.jpg') + ')'
      }
    }
  },
  methods: {
    openWx () {
      this.isOpenWx = true
    },
    goBack () {
      this.isOpenWx = false
    },
    toCheck () {
      sendCmd({
        cmd: 'to_check'
      })
        .then((response) => {
        })
        .catch((error) => {
          console.log(error)
        })
    },
    gotoLogin () {
      login({
        username: this.userName,
        password: this.userPwd
      })
        .then((response) => {
          let loginResult = response.data
          console.log(loginResult)

          if (loginResult.status === true) {
            sessionStorage.isLogin = true
            // 设置 cookie，保存7天
            this.setCookie(7)

            // 登录成功后，切换到待检界面
            this.$router.push({path: '/check'})
            this.toCheck()
          } else {
            sessionStorage.isLogin = true
            if (loginResult.error_code === 1)
              alert(this.$t('login.err_username_is_empty'))
            else if (loginResult.error_code === 2)
              alert(this.$t('login.err_username_not_exist'))
            else if (loginResult.error_code === 3)
              alert(this.$t('login.err_username_pwd_error'))
            else
              alert(loginResult.msg)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //设置cookie
    setCookie(exdays) {
      var exdate = new Date()
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) //保存的天数
      document.cookie = "userName=" + this.userName + ";path=/;expires=" + exdate.toLocaleString()
      document.cookie = "userPwd=" + this.userPwd + ";path=/;expires=" + exdate.toLocaleString()
      document.cookie = "rememberUser=" + this.rememberUser + ";path=/;expires=" + exdate.toLocaleString()
      document.cookie = "autoLogin=" + this.autoLogin + ";path=/;expires=" + exdate.toLocaleString()
    },
    //获取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; ') //这里显示的格式需要切割一下自己可输出看下
        var username = ''
        var password = ''
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=') //再次切割

          //判断查找相对应的值
          if (arr2[0] == 'userName') {
            username = arr2[1] //保存到保存数据的地方
          } else if (arr2[0] == 'userPwd') {
            password = arr2[1]
          } else if (arr2[0] == 'rememberUser') {
            this.rememberUser = arr2[1] === 'true'
          } else if (arr2[0] == 'autoLogin') {
            this.autoLogin = arr2[1] === 'true'
          }
        }

        if (this.autoLogin === true) {
          this.userName = username
          this.userPwd = password
          this.gotoLogin()
        } else if (this.rememberUser) {
          this.userName = username
          this.focusToUsername = false
          this.focusToPassword = true
        } else {
          this.focusToUsername = true
          this.focusToPassword = false
        }
      }
    }
  },
  mounted () {
    this.getCookie()
  }
}
</script>

