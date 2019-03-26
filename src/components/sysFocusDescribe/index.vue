<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_setup.png" /><i>{{$t('sysFocusDescribe.title')}}</i>
          </div>
        </div>
        <ul class="ys_tab">
          <li><a href="/#/sysCommon">{{$t('sysFocusDescribe.common')}}</a></li>
          <li><a href="/#/sysCheckImage">{{$t('sysFocusDescribe.checkImage')}}</a></li>
          <li class="on">{{$t('sysFocusDescribe.focusDescribe')}}</li>
          <li><a href="/#/sysReport">{{$t('sysFocusDescribe.report')}}</a></li>
          <li><a href="/#/sysReportTemplate">{{$t('sysFocusDescribe.reportTemplate')}}</a></li>
        </ul>
        <div>
          <div class="yk_top">
            <i>{{$t('sysFocusDescribe.describe2d')}}</i>
            <input class="yk_input" type="text" placeholder="2D描述标签，不得超过20个字符" />
            <b>添加</b>
          </div>
          <ul class="yk_list">
            <li><i>{{$t('sysFocusDescribe.d2dLabel1')}}</i><s onclick="del(this)" /></li>
          </ul>
        </div>
        <div>
          <div class="yk_top">
            <i>{{$t('sysFocusDescribe.describe3d')}}</i>
            <input class="yk_input" type="text" placeholder="3D描述标签，不得超过20个字符" />
            <b>添加</b>
          </div>
          <ul class="yk_list">
            <li><i>{{$t('sysFocusDescribe.d3dLabel1')}}</i><s onclick="del(this)" /></li>
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
  name: 'SysFocusDescribe',
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
