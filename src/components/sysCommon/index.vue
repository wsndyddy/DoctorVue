<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_setup.png" /><i>{{$t('sysCommon.title')}}</i>
          </div>
        </div>
        <ul class="ys_tab">
          <li class="on">{{$t('sysCommon.common')}}</li>
          <li><router-link to="/sysCheckImage">{{$t('sysCommon.checkImage')}}</router-link></li>
          <li><router-link to="/sysFocusDescribe">{{$t('sysCommon.focusDescribe')}}</router-link></li>
          <li><router-link to="/sysReport">{{$t('sysCommon.report')}}</router-link></li>
          <li><router-link to="/sysReportTemplate">{{$t('sysCommon.reportTemplate')}}</router-link></li>
        </ul>
        <div class="ys_form">
          <dl>
            <dt>{{$t('sysCommon.organization')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.organization" />
              <div class="ys_tips">{{$t('sysCommon.organizationTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.orgDescribe')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.orgDescribe" />
              <div class="ys_tips">{{$t('sysCommon.orgDescribeTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.address')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.address" />
              <div class="ys_tips">{{$t('sysCommon.addressTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.tel')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.tel" />
              <div class="ys_tips">{{$t('sysCommon.telTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.department')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.department" />
              <div class="ys_tips">{{$t('sysCommon.departmentTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.itemLogo')}}</dt>
            <dd>
              <div class="ys_logo"><img :src="commonArr.itemLogo" /></div>
              <div class="ys_tips">{{$t('sysCommon.itemLogoTip')}}</div>
              <i-button class="ys_button ys_button_dark">{{$t('btnBar.btn_UploadImage')}}</i-button>
              <div class="ysl_height"></div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.language')}}</dt>
            <dd>
              <ul class="ys_diyselect">
                <li @click="selLanguage(lanSetup[0].name)" v-bind:class="{'selected': lanSetup[0].default}">{{$t('sysCommon.languageChinese')}}</li>
                <li @click="selLanguage(lanSetup[1].name)" v-bind:class="{'selected': lanSetup[1].default}">{{$t('sysCommon.languageEnglish')}}</li>
              </ul>
              <div class="ys_tips">{{$t('sysCommon.languageTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.print')}}</dt>
            <dd>
              <ul class="ys_print">
                <li>
                  <input class="yk_input" type="text" v-model="commonArr.print1" />
                  <i-button class="ys_print_btn" @click="rePrint1()">{{$t('btnBar.btn_default')}}</i-button>
                </li>
                <li>
                  <input class="yk_input" type="text" v-model="commonArr.print2" />
                  <i-button class="ys_print_btn" @click="rePrint2()">{{$t('btnBar.btn_default')}}</i-button>
                </li>
              </ul>
              <div class="ys_btn">
                <i-button class="ys_button ys_button_dark">{{$t('btnBar.btn_addPrint')}}</i-button>
                <i-button class="ys_button ys_button_gray">{{$t('btnBar.btn_printTest')}}</i-button>
              </div>
              <div class="ys_tips">{{$t('sysCommon.printTip')}}</div>
            </dd>
          </dl>
        </div>
        <div class="ybtn_box_special">
          <i-button class="ybtn ybtn_dark">{{$t('btnBar.btn_save')}}</i-button>
          <i-button @click="reDefault()" class="ybtn ybtn_light">{{$t('btnBar.btn_Redefault')}}</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'SysCommon',
  data () {
    return {
      commonArr: {
        organization: '中日友好医院',
        orgDescribe: '中日友好医院（简称“中日医院”）是国家卫生健康委员会直属大型综合性三级甲等医院',
        address: '北京市朝阳区樱花园东街2号',
        tel: '010-84205288',
        department: '中西医结合肿瘤内科',
        itemLogo: require('../../assets/img/logo.png'),
        language: '中文',
        print1: '192.168.1.166',
        print2: '192.168.1.167'
      },
      lanSetup: [{
        name: '中文',
        default: false
      }, {
        name: 'English',
        default: false
      }, {
        name: '繁体',
        default: false
      }],
      defArr: {
        organization: '',
        orgDescribe: '',
        address: '',
        tel: '',
        department: '',
        itemLogo: require('../../assets/img/logo.png'),
        language: '',
        print1: '',
        print2: ''
      }
    }
  },
  components: {
    leftMenu
  },
  methods: {
    selLanguage (s) {
      this.lanSetup.forEach((e) => {
        if (e.name === s) {
          e.default = true
          this.commonArr.language = s
        } else { e.default = false }
      })
    },
    reDefault () {
      this.commonArr.organization = this.defArr.organization
      this.commonArr.orgDescribe = this.defArr.orgDescribe
      this.commonArr.address = this.defArr.address
      this.commonArr.tel = this.defArr.tel
      this.commonArr.department = this.defArr.department
      this.commonArr.itemLogo = this.defArr.itemLogo
      this.commonArr.language = this.defArr.language
      this.commonArr.print1 = this.defArr.print1
      this.commonArr.print2 = this.defArr.print2
      this.selLanguage(this.defArr.language)
    },
    rePrint1 () {
      this.commonArr.print1 = this.defArr.print1
    },
    rePrint2 () {
      this.commonArr.print2 = this.defArr.print2
    }
  },
  created () {
    this.lanSetup.forEach((e) => { if (e.name === this.commonArr.language) e.default = true })
    this.defArr.organization = this.commonArr.organization
    this.defArr.orgDescribe = this.commonArr.orgDescribe
    this.defArr.address = this.commonArr.address
    this.defArr.tel = this.commonArr.tel
    this.defArr.department = this.commonArr.department
    this.defArr.itemLogo = this.commonArr.itemLogo
    this.defArr.language = this.commonArr.language
    this.defArr.print1 = this.commonArr.print1
    this.defArr.print2 = this.commonArr.print2
  }
}
</script>

<style scoped>

</style>
