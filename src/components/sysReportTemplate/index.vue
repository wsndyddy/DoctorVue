<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_setup.png" /><i>{{$t('sysReportTemplate.title')}}</i>
          </div>
        </div>
        <ul class="ys_tab">
          <li><router-link to="/sysCommon">{{$t('sysReportTemplate.common')}}</router-link></li>
          <li><router-link to="/sysCheckImage">{{$t('sysReportTemplate.checkImage')}}</router-link></li>
          <li><router-link to="/sysFocusDescribe">{{$t('sysReportTemplate.focusDescribe')}}</router-link></li>
          <li><router-link to="/sysReport">{{$t('sysReportTemplate.report')}}</router-link></li>
          <li class="on">{{$t('sysReportTemplate.reportTemplate')}}</li>
        </ul>
        <div class="y_template">
          <i>{{$t('sysReportTemplate.reportTemplate')}}</i>
          <ul>
            <li @click="selTemplate(1)" v-bind:class="{'on': tV1}">
              <h1>{{$t('sysReportTemplate.template1')}}</h1>
              <h4>{{$t('sysReportTemplate.template1Des')}}</h4>
              <b>预览</b>
            </li>
            <li @click="selTemplate(2)" v-bind:class="{'on': tV2}">
              <h1>{{$t('sysReportTemplate.template2')}}</h1>
              <h4>{{$t('sysReportTemplate.template2Des')}}</h4>
              <b>预览</b>
            </li>
          </ul>
        </div>
        <div class="ybtn_box_special">
          <i-button class="ybtn ybtn_dark">{{$t('btnBar.btn_save')}}</i-button>
          <i-button class="ybtn ybtn_light">{{$t('btnBar.btn_Redefault')}}</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'SysReportTemplate',
  data () {
    return {
      tV1: true,
      tV2: false
    }
  },
  components: {
    leftMenu
  },
  methods: {
    selTemplate (num) {
      if (num === 1) {
        this.tV1 = true
        this.tV2 = false
      } else {
        this.tV1 = false
        this.tV2 = true
      }
    }
  }
}
</script>

<style scoped>

</style>
