<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_base.png" /><i>{{$t('backBaseinfo.title')}}</i>
          </div>
        </div>
        <div class="ylist_square">
          <dl class="col_half">
            <dt>{{$t('backBaseinfo.marital')}}</dt>
            <ul>
              <li>{{$t('backBaseinfo.marYes')}}</li>
              <li>{{$t('backBaseinfo.marNo')}}</li>
            </ul>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backBaseinfo.divorce')}}</dt>
            <ul>
              <li>{{$t('backBaseinfo.divorceNo')}}</li>
              <li>{{$t('backBaseinfo.divorceYes')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('backBaseinfo.educational')}}</dt>
            <ul>
              <li>{{$t('backBaseinfo.eduDoctorate')}}</li>
              <li>{{$t('backBaseinfo.eduMaster')}}</li>
              <li>{{$t('backBaseinfo.eduUniversity')}}</li>
              <li>{{$t('backBaseinfo.eduHighSchool')}}</li>
              <li>{{$t('backBaseinfo.eduMiddleSchool')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('backBaseinfo.occupation')}}</dt>
            <ul>
              <li>{{$t('backBaseinfo.occFarmer')}}</li>
              <li>{{$t('backBaseinfo.occWorker')}}</li>
              <li>{{$t('backBaseinfo.occTeacher')}}</li>
              <li>{{$t('backBaseinfo.occCivil')}}</li>
              <li>{{$t('backBaseinfo.occSelfEmployed')}}</li>
              <li>{{$t('backBaseinfo.occDriver')}}</li>
              <li>{{$t('backBaseinfo.occWaiter')}}</li>
              <li>{{$t('backBaseinfo.occStaff')}}</li>
              <li>{{$t('backBaseinfo.occHousewife')}}</li>
              <li>{{$t('backBaseinfo.occMedical')}}</li>
              <li>{{$t('backBaseinfo.occStudent')}}</li>
            </ul>
          </dl>
        </div>
        <div class="ylist_optionbox">
          <dl>
            <dt>{{$t('backBaseinfo.menstruationLast')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>2017{{$t('units.year')}}</li>
                  <li class="show">2018{{$t('units.year')}}</li>
                  <li>2019{{$t('units.year')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
              <h2>
                <ul>
                  <li>10{{$t('units.month')}}</li>
                  <li class="show">11{{$t('units.month')}}</li>
                  <li>12{{$t('units.month')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
              <h2>
                <ul>
                  <li>11{{$t('units.day')}}</li>
                  <li>12{{$t('units.day')}}</li>
                  <li>13{{$t('units.day')}}</li>
                  <li class="show">14{{$t('units.day')}}</li>
                  <li>15{{$t('units.day')}}</li>
                  <li>16{{$t('units.day')}}</li>
                  <li>17{{$t('units.day')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backBaseinfo.menstruationCycle')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>11{{$t('units.day')}}</li>
                  <li>12{{$t('units.day')}}</li>
                  <li>13{{$t('units.day')}}</li>
                  <li class="show">14{{$t('units.day')}}</li>
                  <li>15{{$t('units.day')}}</li>
                  <li>16{{$t('units.day')}}</li>
                  <li>17{{$t('units.day')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backBaseinfo.menstruationLaw')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>11{{$t('units.day')}}</li>
                  <li>12{{$t('units.day')}}</li>
                  <li>13{{$t('units.day')}}</li>
                  <li class="show">14{{$t('units.day')}}</li>
                  <li>15{{$t('units.day')}}</li>
                  <li>16{{$t('units.day')}}</li>
                  <li>17{{$t('units.day')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backBaseinfo.menstruationFirst')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>11{{$t('units.day')}}</li>
                  <li>12{{$t('units.day')}}</li>
                  <li>13{{$t('units.day')}}</li>
                  <li class="show">14{{$t('units.day')}}</li>
                  <li>15{{$t('units.day')}}</li>
                  <li>16{{$t('units.day')}}</li>
                  <li>17{{$t('units.day')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backBaseinfo.menstruationClose')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>11{{$t('units.day')}}</li>
                  <li>12{{$t('units.day')}}</li>
                  <li>13{{$t('units.day')}}</li>
                  <li class="show">14{{$t('units.day')}}</li>
                  <li>15{{$t('units.day')}}</li>
                  <li>16{{$t('units.day')}}</li>
                  <li>17{{$t('units.day')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
        </div>
        <div class="ybtn_box">
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
  name: 'BackBaseinfo',
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
