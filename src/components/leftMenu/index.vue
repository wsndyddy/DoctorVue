<template>
  <div class="y_left">
    <div class="yl_headpic"><img src="../../assets/img/head.jpg" /></div>
    <div class="yl_operate">
      <dl><dt><img src="../../assets/operate_1.png" /></dt><dd>{{$t('leftMenu.menu1')}}</dd></dl>
      <dl><dt><img src="../../assets/operate_2.png" /></dt><dd>{{$t('leftMenu.menu2')}}</dd></dl>
      <dl><dt><img src="../../assets/operate_3.png" /></dt><dd>{{$t('leftMenu.menu3')}}</dd></dl>
    </div>
    <div class="yl_setup">
      <dl><dt><img src="../../assets/setup_1.png" /></dt><dd>{{$t('leftMenu.menu4')}}</dd></dl>
      <dl><dt><img src="../../assets/setup_2.png" /></dt><dd>{{$t('leftMenu.menu5')}}</dd></dl>
      <dl><dt><img src="../../assets/setup_3.png" /></dt><dd>{{$t('leftMenu.menu6')}}</dd></dl>
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
