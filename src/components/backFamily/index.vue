<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_top ypub_top_special">
        <div class="ypub_title">
          <img src="../../assets/title_history.png" /><i>{{$t('backFamily.title')}}</i>
        </div>
      </div>
      <div class="ylist_problem clearfix">
        <dl>
          <i>1</i>
          <dd>
            <h2>{{$t('backFamily.family')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backFamily.familyYes')}}</li>
              <li>{{$t('backFamily.familyNo')}}</li>
              <li>{{$t('backFamily.familyUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>2</i>
          <dd>
            <h2>{{$t('backFamily.breastcancer')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backFamily.bcYes')}}</li>
              <li>{{$t('backFamily.bcNo')}}</li>
              <li>{{$t('backFamily.bcUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>3</i>
          <dd>
            <h2>{{$t('backFamily.benignBreastTumors')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backFamily.bbtYes')}}</li>
              <li>{{$t('backFamily.bbtNo')}}</li>
              <li>{{$t('backFamily.bbtUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>4</i>
          <dd>
            <h2>{{$t('backFamily.mastitis')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backFamily.mastitisYes')}}</li>
              <li>{{$t('backFamily.mastitisNo')}}</li>
              <li>{{$t('backFamily.mastitisUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>5</i>
          <dd>
            <h2>{{$t('backFamily.cyclomastopathy')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backFamily.cmYes')}}</li>
              <li>{{$t('backFamily.cmNo')}}</li>
              <li>{{$t('backFamily.cmUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>6</i>
          <dd>
            <h2>{{$t('backFamily.nippleDischarge')}}</h2>
            <ul class="clearfix">
              <li>{{$t('backFamily.ndYes')}}</li>
              <li>{{$t('backFamily.ndNo')}}</li>
              <li>{{$t('backFamily.ndUnknown')}}</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="ylist_square y_history">
        <dl>
          <dt>{{$t('backFamily.gynecologicT1')}}</dt>
          <ul>
            <li>{{$t('backFamily.gt1_q1')}}</li>
            <li>{{$t('backFamily.gt1_q2')}}</li>
            <li>{{$t('backFamily.gt1_q3')}}</li>
          </ul>
        </dl>
        <dl>
          <dt>{{$t('backFamily.gynecologicT2')}}</dt>
          <ul>
            <li>{{$t('backFamily.gt2_q1')}}</li>
            <li>{{$t('backFamily.gt2_q2')}}</li>
            <li>{{$t('backFamily.gt2_q3')}}</li>
            <li>{{$t('backFamily.gt2_q4')}}</li>
            <li>{{$t('backFamily.gt2_q5')}}</li>
            <li>{{$t('backFamily.gt2_q6')}}</li>
          </ul>
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
  name: 'BackFamily',
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
