<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ylist_problem clearfix">
        <dl>
          <i>1</i>
          <dd>
            <h2>{{$t('breastCancer.family')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.familyYes')}}</li>
              <li>{{$t('breastCancer.familyNo')}}</li>
              <li>{{$t('breastCancer.familyUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>2</i>
          <dd>
            <h2>{{$t('breastCancer.breastcancer')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.bcYes')}}</li>
              <li>{{$t('breastCancer.bcNo')}}</li>
              <li>{{$t('breastCancer.bcUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>3</i>
          <dd>
            <h2>{{$t('breastCancer.benignBreastTumors')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.bbtYes')}}</li>
              <li>{{$t('breastCancer.bbtNo')}}</li>
              <li>{{$t('breastCancer.bbtUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>4</i>
          <dd>
            <h2>{{$t('breastCancer.mastitis')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.mastitisYes')}}</li>
              <li>{{$t('breastCancer.mastitisNo')}}</li>
              <li>{{$t('breastCancer.mastitisUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>5</i>
          <dd>
            <h2>{{$t('breastCancer.cyclomastopathy')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.cmYes')}}</li>
              <li>{{$t('breastCancer.cmNo')}}</li>
              <li>{{$t('breastCancer.cmUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>6</i>
          <dd>
            <h2>{{$t('breastCancer.nippleDischarge')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.ndYes')}}</li>
              <li>{{$t('breastCancer.ndNo')}}</li>
              <li>{{$t('breastCancer.ndUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>7</i>
          <dd>
            <h2>{{$t('breastCancer.mammaAccessoria')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.maYes')}}</li>
              <li>{{$t('breastCancer.maNo')}}</li>
              <li>{{$t('breastCancer.maUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>8</i>
          <dd>
            <h2>{{$t('breastCancer.invertedNipple')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.inYes')}}</li>
              <li>{{$t('breastCancer.inNo')}}</li>
              <li>{{$t('breastCancer.inUnknown')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>9</i>
          <dd>
            <h2>{{$t('breastCancer.gynecologicTumor')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.gtA1')}}</li>
              <li>{{$t('breastCancer.gtA2')}}</li>
              <li>{{$t('breastCancer.gtA3')}}</li>
              <li>{{$t('breastCancer.gtA4')}}</li>
              <li>{{$t('breastCancer.gtA5')}}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <i>10</i>
          <dd>
            <h2>{{$t('breastCancer.chronicIllness')}}</h2>
            <ul class="clearfix">
              <li>{{$t('breastCancer.ciA1')}}</li>
              <li>{{$t('breastCancer.ciA2')}}</li>
              <li>{{$t('breastCancer.ciA3')}}</li>
              <li>{{$t('breastCancer.ciA4')}}</li>
              <li>{{$t('breastCancer.ciA5')}}</li>
              <li>{{$t('breastCancer.ciA6')}}</li>
              <li>{{$t('breastCancer.ciA7')}}</li>
              <li>{{$t('breastCancer.ciA8')}}</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="ybtn_box">
        <i-button class="ybtn ybtn_dark">{{$t('btnBar.btn_submit')}}</i-button>
        <i-button class="ybtn ybtn_light">{{$t('btnBar.btn_return')}}</i-button>
      </div>
      <div class="ytips_problem">{{$t('breastCancer.tipCompleted')}}<i>0%</i>{{$t('breastCancer.tipReport')}}</div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'breastCancer',
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
