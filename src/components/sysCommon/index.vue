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
          <li><a href="/#/sysCheckImage">{{$t('sysCommon.checkImage')}}</a></li>
          <li><a href="/#/sysFocusDescribe">{{$t('sysCommon.focusDescribe')}}</a></li>
          <li><a href="/#/sysReport">{{$t('sysCommon.report')}}</a></li>
          <li><a href="/#/sysReportTemplate">{{$t('sysCommon.reportTemplate')}}</a></li>
        </ul>
        <div class="ys_form">
          <dl>
            <dt>{{$t('sysCommon.organization')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCommon.organizationTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.orgDescribe')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCommon.orgDescribeTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.address')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCommon.addressTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.tel')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCommon.telTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.department')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCommon.departmentTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.itemLogo')}}</dt>
            <dd>
              <div class="ys_logo"><img src="../../assets/img/logo.png" /></div>
              <div class="ys_tips">{{$t('sysCommon.itemLogo')}}</div>
              <i-button class="ys_button ys_button_dark">{{$t('btnBar.btn_UploadImage')}}</i-button>
              <div class="ysl_height"></div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.language')}}</dt>
            <dd>
              <ul class="ys_diyselect">
                <li>{{$t('sysCommon.languageChinese')}}</li>
                <li class="selected">{{$t('sysCommon.languageEnglish')}}</li>
              </ul>
              <div class="ys_tips">{{$t('sysCommon.languageTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCommon.print')}}</dt>
            <dd>
              <ul class="ys_print">
                <li>
                  <input class="yk_input" type="text" value="192.168.1.166" />
                  <i-button class="ys_print_btn">{{$t('btnBar.btn_default')}}</i-button>
                </li>
                <li>
                  <input class="yk_input" type="text" value="192.168.1.167" />
                  <i-button class="ys_print_btn">{{$t('btnBar.btn_default')}}</i-button>
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
          <i-button class="ybtn ybtn_light">{{$t('btnBar.btn_Redefault')}}</i-button>
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

    }
  },
  components: {
    leftMenu
  }
}
</script>

<style scoped>

</style>
