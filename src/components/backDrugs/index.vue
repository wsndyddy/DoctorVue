<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_top ypub_top_special">
        <div class="ypub_title">
          <img src="../../assets/title_medicine.png" /><i>{{$t('backDrugs.title')}}</i>
        </div>
      </div>
      <div class="ylist_problem clearfix">
        <dl>
          <i>1</i>
          <dd>
            <h2>{{$t('backDrugs.family')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backDrugs.familyYes')}}</li>
              <li>{{$t('backDrugs.familyNo')}}</li>
              <li>{{$t('backDrugs.familyUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>2</i>
          <dd>
            <h2>{{$t('backDrugs.breastcancer')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backDrugs.bcYes')}}</li>
              <li>{{$t('backDrugs.bcNo')}}</li>
              <li>{{$t('backDrugs.bcUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>3</i>
          <dd>
            <h2>{{$t('backDrugs.benignBreastTumors')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backDrugs.bbtYes')}}</li>
              <li>{{$t('backDrugs.bbtNo')}}</li>
              <li>{{$t('backDrugs.bbtUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>4</i>
          <dd>
            <h2>{{$t('backDrugs.mastitis')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backDrugs.mastitisYes')}}</li>
              <li>{{$t('backDrugs.mastitisNo')}}</li>
              <li>{{$t('backDrugs.mastitisUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>5</i>
          <dd>
            <h2>{{$t('backDrugs.cyclomastopathy')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backDrugs.cmYes')}}</li>
              <li>{{$t('backDrugs.cmNo')}}</li>
              <li>{{$t('backDrugs.cmUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>6</i>
          <dd>
            <h2>{{$t('backDrugs.nippleDischarge')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backDrugs.ndYes')}}</li>
              <li>{{$t('backDrugs.ndNo')}}</li>
              <li>{{$t('backDrugs.ndUnknown')}}</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="ybtn_box">
        <div class="yb_right">
          <i-button class="ybtn ybtn_gray">{{$t('btnBar.btn_save')}}</i-button>
        </div>
        <i-button class="ybtn ybtn_dark">{{$t('btnBar.btn_prevStep')}}</i-button>
        <i-button class="ybtn ybtn_light">{{$t('btnBar.btn_nextStep')}}</i-button>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'BackDrugs',
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
