
<template>
  <div class="login-bg">
  <div class="login" :style ="bg_site">
    <div class="info">
         <div class="title">
           <img :src="titlebg" />
           {{$t('login.sysName')}}
         </div>
      <div class="wx_code" v-if="isOpenWx">
        <img :src="imgUrl" />
        <i-button type="primary" size="small" class="login_btn border-none" @click="goBack">
          {{$t('login.btn_back')}}
        </i-button>
      </div>
      <div v-else>
           <div class="inputInfo">
                <Row>
                  <i-col class="bottom-line">
                     <span class="tip" :style="tipIcon1"></span>
                     <input class="border-none" type="text" v-model="userName" size="large" :placeholder="$t('login.inputName')" />

                  </i-col>
                </Row>
               <Row>
                 <i-col>
                   <span class="tip" :style="tipIcon2"></span>
                   <input class="border-none" v-model="userPsw" size="large" :placeholder="$t('login.inputPws')"/>
                 </i-col>
               </Row>

             </div>
             <div class="checkbox_user_sel">
             <CheckboxGroup v-model="checkDefault">
               <Checkbox :label="$t('login.tipMsgcheckbox')"></Checkbox>
               <Checkbox :label="$t('login.tipMsgautologin')"></Checkbox>
               <div class="d-i-b ivu-checkbox-group-item" @click="openWx">
                 <span class="wxIcon d-i-b" :style="wxIcon"></span>
                 <label>{{$t('login.tipWexin')}}</label>
               </div>
             </CheckboxGroup>
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
import {getReport} from '@/api/report'

export default {
  name: 'Login',
  data () {
    return {
      isOpenWx: false,
      imgUrl: require('../../assets/wxCode.jpg'),
      titlebg: require('../../assets/titlebg.png'),
      bg_site: {
        backgroundImage: 'url(' + require('../../assets/loginbg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      userName: '',
      userPsw: '',
      tipIcon1: {
        backgroundImage: 'url(' + require('../../assets/icon.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0'
      },
      tipIcon2: {
        backgroundImage: 'url(' + require('../../assets/icon.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 -48px'
      },
      wxIcon: {
        backgroundImage: 'url(' + require('../../assets/wx.jpg') + ')'
      },
      checkDefault: ['自动登录']
    }
  },
  methods: {
    openWx () {
      this.isOpenWx = true
    },
    goBack () {
      this.isOpenWx = false
    },
    gotoLogin () {
      if (this.userName !== '' && this.userPsw !== '') {
        sessionStorage.isLogin = true
        alert('登录成功！')
        this.$router.push({path: '/report'})
      } else {
        alert('请输入登录信息！')
      }
    },
    getReportData () {
      getReport({
        cmd: 'query_data',
        uuid: 'current'
      })
        .then((response) => {
          this.report = response.data
          console.log(this.report)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getReportData()
    })
  }
}
</script>

