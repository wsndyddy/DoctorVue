<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_setup.png" /><i>{{$t('sysReport.title')}}</i>
          </div>
        </div>
        <ul class="ys_tab">
          <li><a href="/#/sysCommon">{{$t('sysReport.common')}}</a></li>
          <li><a href="/#/sysCheckImage">{{$t('sysReport.checkImage')}}</a></li>
          <li><a href="/#/sysFocusDescribe">{{$t('sysReport.focusDescribe')}}</a></li>
          <li class="on">{{$t('sysReport.report')}}</li>
          <li><a href="/#/sysReportTemplate">{{$t('sysReport.reportTemplate')}}</a></li>
        </ul>
        <div>
          <div class="yk_top">
            <i>{{$t('sysReport.impression')}}</i>
            <input class="yk_input" type="text" placeholder="印象诊断，不得超过20个字符" />
            <b>添加</b>
          </div>
          <ul class="yk_list">
            <li><i>{{$t('sysReport.itLable1')}}</i><s onclick="del(this)" /></li>
          </ul>
        </div>
        <div>
          <div class="yk_top">
            <i>{{$t('sysReport.suggestion')}}</i>
            <input class="yk_input" type="text" placeholder="复查建议标题，不得超过20个字符" />
            <b>添加</b>
          </div>
          <div class="yk_textarea">
            <textarea placeholder="复查建议描述"></textarea>
          </div>
          <ul class="yk_list">
            <li><i>{{$t('sysReport.stLable1')}}</i><s onclick="del(this)" /></li>
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
  name: 'SysReport',
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
