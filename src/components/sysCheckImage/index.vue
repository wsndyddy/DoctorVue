<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_setup.png" /><i>{{$t('sysCheckImage.title')}}</i>
          </div>
        </div>
        <ul class="ys_tab">
          <li><router-link to="/sysCommon">{{$t('sysCheckImage.common')}}</router-link></li>
          <li class="on">{{$t('sysCheckImage.checkImage')}}</li>
          <li><router-link to="/sysFocusDescribe">{{$t('sysCheckImage.focusDescribe')}}</router-link></li>
          <li><router-link to="/sysReport">{{$t('sysCheckImage.report')}}</router-link></li>
          <li><router-link to="/sysReportTemplate">{{$t('sysCheckImage.reportTemplate')}}</router-link></li>
        </ul>
        <div class="ys_form">
          <dl>
            <dt>{{$t('sysCheckImage.smoothingFactor')}}</dt>
            <dd>
              <ul class="ys_switch">
                <li><i @click="selSF1(true)" class="yss_open" v-bind:class="{'selected' : commonArr.sf1 ? true : false}">{{$t('sysCheckImage.sfOn')}}</i><i @click="selSF1(false)" class="yss_close" v-bind:class="{'selected' : commonArr.sf1 ? false : true}">{{$t('sysCheckImage.sfOff')}}</i></li>
                <li><i @click="selSF2(true)" class="yss_open" v-bind:class="{'selected' : commonArr.sf2 ? true : false}">{{$t('sysCheckImage.sfOn')}}</i><i @click="selSF2(false)" class="yss_close" v-bind:class="{'selected' : commonArr.sf2 ? false : true}">{{$t('sysCheckImage.sfOff')}}</i></li>
              </ul>
              <input class="yk_input" type="text" v-model="commonArr.smoothingFactor" />
              <div class="ys_tips">{{$t('sysCheckImage.sfTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.gamma" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.restrain')}}</dt>
            <dd>
              <input class="y_limit_input" type="text" v-model="commonArr.restrain1" />
              <i class="y_limit_color"></i>
              <input class="y_limit_input" type="text" v-model="commonArr.restrain2" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.other1" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.other2" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.other3" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" v-model="commonArr.other4" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
        </div>
        <div class="ybtn_box_special">
          <i-button class="ybtn ybtn_dark">{{$t('btnBar.btn_save')}}</i-button>
          <i-button class="ybtn ybtn_light" @click="reDefault()">{{$t('btnBar.btn_Redefault')}}</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'SysCheckImage',
  data () {
    return {
      commonArr: {
        sf1: true,
        sf2: false,
        smoothingFactor: '0.5',
        gamma: '2',
        restrain1: '0.1',
        restrain2: '1.2',
        other1: '12',
        other2: '13',
        other3: '14',
        other4: '15'
      },
      defArr: {
        sf1: true,
        sf2: true,
        smoothingFactor: '',
        gamma: '',
        restrain1: '',
        restrain2: '',
        other1: '',
        other2: '',
        other3: '',
        other4: ''
      }
    }
  },
  components: {
    leftMenu
  },
  methods: {
    selSF1 (t) { this.commonArr.sf1 = t },
    selSF2 (t) { this.commonArr.sf2 = t },
    reDefault () {
      this.commonArr.sf1 = this.defArr.sf1
      this.commonArr.sf2 = this.defArr.sf2
      this.commonArr.smoothingFactor = this.defArr.smoothingFactor
      this.commonArr.gamma = this.defArr.gamma
      this.commonArr.restrain1 = this.defArr.restrain1
      this.commonArr.restrain2 = this.defArr.restrain2
      this.commonArr.other1 = this.defArr.other1
      this.commonArr.other2 = this.defArr.other2
      this.commonArr.other3 = this.defArr.other3
      this.commonArr.other4 = this.defArr.other4
    }
  },
  created () {
    this.defArr.sf1 = this.commonArr.sf1
    this.defArr.sf2 = this.commonArr.sf2
    this.defArr.smoothingFactor = this.commonArr.smoothingFactor
    this.defArr.gamma = this.commonArr.gamma
    this.defArr.restrain1 = this.commonArr.restrain1
    this.defArr.restrain2 = this.commonArr.restrain2
    this.defArr.other1 = this.commonArr.other1
    this.defArr.other2 = this.commonArr.other2
    this.defArr.other3 = this.commonArr.other3
    this.defArr.other4 = this.commonArr.other4
  }
}
</script>

<style scoped>

</style>
