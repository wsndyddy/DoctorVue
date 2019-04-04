<template>
  <div class="y_container">
    <!--<leftMenu></leftMenu>-->
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
              <incretInput :sum.sync="dayTime.num" :dw="$t('backHabits.smokingUnit')" v-on:getNum="getdayTime"></incretInput>

            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backHabits.smokingYears')}}</dt>
            <dd>
              <incretInput :sum.sync="yearTime.num" :dw="$t('backHabits.yearsUnit')" v-on:getNum="getYearTime"></incretInput>

            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backHabits.noSmoking')}}</dt>
            <dd>
              <incretInput :sum.sync="noSmoking.num" :dw="$t('backHabits.smokingUnit')" v-on:getNum="getnoSmokingTime"></incretInput>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('backHabits.stopDrinking')}}</dt>
            <dd>
              <incretInput :sum.sync="stopDrinking.num" :dw="$t('backHabits.yearsUnit')" v-on:getNum="getstopDrinkingTime"></incretInput>
            </dd>
          </dl>
        </div>
        <div class="ylist_square">
          <dl>
            <dt>{{$t('backHabits.drinking')}}</dt>
            <radio :labelarr="invertedStatus_1" :radioIndex="1" v-on:getVal="getRadio"></radio>
          </dl>
          <dl>
            <dt>{{$t('backHabits.health')}}</dt>
            <radio :labelarr="invertedStatus_2" :radioIndex="2" v-on:getVal="getRadio"></radio>

          </dl>
          <dl>
            <dt>{{$t('backHabits.oilsAndFats')}}</dt>
            <radio :labelarr="invertedStatus_3" :radioIndex="3" v-on:getVal="getRadio"></radio>
         </dl>
          <dl>
            <dt>{{$t('backHabits.thrill')}}</dt>
            <radio :labelarr="invertedStatus_4" :radioIndex="4" v-on:getVal="getRadio"></radio>
          </dl>
          <dl>
            <dt>{{$t('backHabits.mental')}}</dt>
            <radio :labelarr="invertedStatus_5" :radioIndex="5" v-on:getVal="getRadio"></radio>
          </dl>
          <dl>
            <dt>{{$t('backHabits.sleep')}}</dt>
            <radio :labelarr="invertedStatus_6" :radioIndex="6" v-on:getVal="getRadio"></radio>
          </dl>
          <dl>
            <dt>{{$t('backHabits.hazardous')}}</dt>
            <radio :labelarr="invertedStatus_7" :radioIndex="7" v-on:getVal="getRadio"></radio>
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
import radio from '@/component/_base-radio'
import incretInput from '@/component/incretInput'
import { get } from '@/libs/util'
export default {
  name: 'BackHabits',
  data () {
    return {
      invertedStatus_1: [], // 列表
      invertedStatus_2: [], // 列表
      invertedStatus_3: [], // 列表
      invertedStatus_4: [], // 列表
      invertedStatus_5: [], // 列表
      invertedStatus_6: [], // 列表
      invertedStatus_7: [], // 列表
      radioVal_1: null, // 获取的值
      radioVal_2: null, // 获取的值
      radioVal_3: null, // 获取的值
      radioVal_4: null, // 获取的值
      radioVal_5: null, // 获取的值
      radioVal_6: null, // 获取的值
      radioVal_7: null, // 获取的值
      dayTime: {
        num: 1
      },
      yearTime: {
        num: 1
      },
      noSmoking: {
        num: 1
      },
      stopDrinking: {
        num: 1
      }
    }
  },
  components: {
    leftMenu,
    radio,
    incretInput
  },
  mounted () {
    this.initRadioArr()
  },
  methods: {
    initRadioData (...item) {
      let arr = []
      for (let i = 1; i <= item[2]; i++) {
        let str = `${item[1]}${i}`
        let txt = `${item[0]}.${str}`
        let title = this.$t(txt)
        arr.push({
          Active: false,
          label: title
        })
      }
      debugger

      return arr
    },
    getdayTime (num) {

    },
    getYearTime (num) {

    },
    getnoSmokingTime (num) {

    },
    getstopDrinkingTime (num) {

    },
    initRadioArr () {
      this.invertedStatus_1 = this.initRadioData('backHabits', 'drinkStatus.status', 3)
      this.invertedStatus_2 = this.initRadioData('backHabits', 'health_q', 3)
      this.invertedStatus_3 = this.initRadioData('backHabits', 'oaf_q', 4)
      this.invertedStatus_4 = this.initRadioData('backHabits', 'thrill_q', 4)
      this.invertedStatus_5 = this.initRadioData('backHabits', 'mental_q', 2)
      this.invertedStatus_6 = this.initRadioData('backHabits', 'sleep_q', 4)
      this.invertedStatus_7 = this.initRadioData('backHabits', 'hazardous_q', 4)
    },
    getRadio (index, val) {
      switch (index) {
        case 1: this.radioVal_1 = val; break
        case 2: this.radioVal_2 = val; break
        case 3: this.radioVal_3 = val; break
        case 4: this.radioVal_4 = val; break
        case 5: this.radioVal_5 = val; break
        case 6: this.radioVal_6 = val; break
        case 7: this.radioVal_7 = val; break
        case 8: this.radioVal_8 = val; break
        case 9: this.radioVal_9 = val; break
        case 10: this.radioVal_10 = val; break
      }
    },
    goback () {
      this.$router.push(
        {
          path: '/help'
        }
      )
    },
    submit () {
      let url = ''
      get(url, {}).then(res => {})
    }
  }
}
</script>

<style scoped>

</style>
