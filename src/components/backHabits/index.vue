<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_life.png" /><i>{{$t('backHabits.title')}}</i>
          </div>
        </div>
        <div class="ylist_square">
          <dl>
            <dt>{{$t('backHabits.smoking')}}</dt>
            <ul>
              <li>{{$t('backHabits.smokingNo')}}</li>
              <li>{{$t('backHabits.smokingYes')}}</li>
            </ul>
          </dl>
        </div>
        <div class="ylist_optionbox">
          <dl class="col_half">
            <dt>{{$t('backHabits.smokingNumber')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>1{{$t('backHabits.smokingUnit')}}</li>
                  <li class="show">2{{$t('backHabits.smokingUnit')}}</li>
                  <li>3{{$t('backHabits.smokingUnit')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backHabits.smokingYears')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>1{{$t('backHabits.yearsUnit')}}</li>
                  <li class="show">2{{$t('backHabits.yearsUnit')}}</li>
                  <li>3{{$t('backHabits.yearsUnit')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backHabits.noSmoking')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>1{{$t('backHabits.smokingUnit')}}</li>
                  <li class="show">2{{$t('backHabits.smokingUnit')}}</li>
                  <li>3{{$t('backHabits.smokingUnit')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backHabits.stopDrinking')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>1{{$t('backHabits.yearsUnit')}}</li>
                  <li class="show">2{{$t('backHabits.yearsUnit')}}</li>
                  <li>3{{$t('backHabits.yearsUnit')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
        </div>
        <div class="ylist_square">
          <dl>
            <dt>{{$t('backHabits.drinking')}}</dt>
            <ul>
              <li>{{$t('backHabits.drinkingNo')}}</li>
              <li>{{$t('backHabits.drinkingYes')}}</li>
              <li>{{$t('backHabits.drinkingQuit')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('backHabits.health')}}</dt>
            <ul>
              <li>{{$t('backHabits.health_q1')}}</li>
              <li>{{$t('backHabits.health_q2')}}</li>
              <li>{{$t('backHabits.health_q3')}}</li>
              <li>{{$t('backHabits.health_q4')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('backHabits.oilsAndFats')}}</dt>
            <ul>
              <li>{{$t('backHabits.oaf_q1')}}</li>
              <li>{{$t('backHabits.oaf_q2')}}</li>
              <li>{{$t('backHabits.oaf_q3')}}</li>
              <li>{{$t('backHabits.oaf_q4')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('backHabits.thrill')}}</dt>
            <ul>
              <li>{{$t('backHabits.thrill_q1')}}</li>
              <li>{{$t('backHabits.thrill_q2')}}</li>
              <li>{{$t('backHabits.thrill_q3')}}</li>
              <li>{{$t('backHabits.thrill_q4')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('backHabits.mental')}}</dt>
            <ul>
              <li>{{$t('backHabits.mental_q1')}}</li>
              <li>{{$t('backHabits.mental_q2')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('backHabits.sleep')}}</dt>
            <ul>
              <li>{{$t('backHabits.sleep_q1')}}</li>
              <li>{{$t('backHabits.sleep_q2')}}</li>
              <li>{{$t('backHabits.sleep_q3')}}</li>
              <li>{{$t('backHabits.sleep_q4')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('backHabits.hazardous')}}</dt>
            <ul>
              <li>{{$t('backHabits.hazardous_q1')}}</li>
              <li>{{$t('backHabits.hazardous_q2')}}</li>
              <li>{{$t('backHabits.hazardous_q3')}}</li>
              <li>{{$t('backHabits.hazardous_q4')}}</li>
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
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'BackHabits',
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
