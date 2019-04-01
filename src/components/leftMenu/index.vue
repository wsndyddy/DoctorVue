<template>
  <div class="y_left">
    <div class="yl_headpic"><router-link to="/PersonalSetup"><img src="../../assets/img/head.jpg" /></router-link></div>
    <div class="yl_operate">
      <dl><dt><img src="../../assets/operate_1.png" /></dt><dd>{{$t('leftMenu.menu1')}}</dd></dl>
      <dl><dt><img src="../../assets/operate_2.png" /></dt><dd>{{$t('leftMenu.menu2')}}</dd></dl>
      <dl><router-link to="/TemplateV1"><dt><img src="../../assets/operate_3.png" /></dt><dd>{{$t('leftMenu.menu3')}}</dd></router-link></dl>
    </div>
    <div class="yl_setup">
      <dl><dt><img src="../../assets/setup_1.png" /></dt><dd>{{$t('leftMenu.menu4')}}</dd></dl>
      <dl><router-link to="/SysCommon"><dt><img src="../../assets/setup_2.png" /></dt><dd>{{$t('leftMenu.menu5')}}</dd></router-link></dl>
      <dl><router-link to="/help"><dt><img src="../../assets/setup_3.png" /></dt><dd>{{$t('leftMenu.menu6')}}</dd></router-link></dl>
    </div>
    <div class="yl_state yl_state_normal">{{$t('leftMenu.tip')}}</div>
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
