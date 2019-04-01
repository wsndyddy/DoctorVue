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
                <li><i class="yss_open selected">{{$t('sysCheckImage.sfOn')}}</i><i class="yss_close">{{$t('sysCheckImage.sfOff')}}</i></li>
                <li><i class="yss_open selected">{{$t('sysCheckImage.sfOn')}}</i><i class="yss_close">{{$t('sysCheckImage.sfOff')}}</i></li>
              </ul>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCheckImage.sfTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.restrain')}}</dt>
            <dd>
              <input class="y_limit_input" type="text" />
              <i class="y_limit_color"></i>
              <input class="y_limit_input" type="text" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
            </dd>
          </dl>
          <dl>
            <dt>{{$t('sysCheckImage.gamma')}}</dt>
            <dd>
              <input class="yk_input" type="text" />
              <div class="ys_tips">{{$t('sysCheckImage.gammaTip')}}</div>
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
    name: 'SysCheckImage',
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
