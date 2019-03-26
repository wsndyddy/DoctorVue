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
          <li><a href="/#/sysCommon">{{$t('sysReportTemplate.common')}}</a></li>
          <li><a href="/#/sysCheckImage">{{$t('sysReportTemplate.checkImage')}}</a></li>
          <li><a href="/#/sysFocusDescribe">{{$t('sysReportTemplate.focusDescribe')}}</a></li>
          <li><a href="/#/sysReport">{{$t('sysReportTemplate.report')}}</a></li>
          <li class="on">{{$t('sysReportTemplate.reportTemplate')}}</li>
        </ul>
        <div class="y_template">
          <i>{{$t('sysReportTemplate.reportTemplate')}}</i>
          <ul>
            <li class="on">
              <h1>{{$t('sysReportTemplate.template1')}}</h1>
              <h4>{{$t('sysReportTemplate.template1Des')}}</h4>
              <b>预览</b>
            </li>
            <li>
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

    }
  },
  components: {
    leftMenu
  }
}
</script>

<style scoped>

</style>
