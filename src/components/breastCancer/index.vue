<template>
  <div class="y_container">
    <!--<leftMenu></leftMenu>-->
    <div class="y_main">
      <div class="ylist_problem clearfix">
        <dl>
          <i>1</i>
          <dd>
            <h2>{{$t('breastCancer.family')}}</h2>
            <radio :labelarr="invertedStatus_1" :radioIndex="1" v-on:getVal="getRadio"></radio>
          </dd>
        </dl>
        <dl>
          <i>2</i>
          <dd>
            <h2>{{$t('breastCancer.breastcancer')}}</h2>
            <radio :labelarr="invertedStatus_2" :radioIndex="2" v-on:getVal="getRadio"></radio>
          </dd>
        </dl>
        <dl>
          <i>3</i>
          <dd>
            <h2>{{$t('breastCancer.benignBreastTumors')}}</h2>
            <radio :labelarr="invertedStatus_3" :radioIndex="3" v-on:getVal="getRadio"></radio>
          </dd>
        </dl>
        <dl>
          <i>4</i>
          <dd>
            <h2>{{$t('breastCancer.mastitis')}}</h2>
            <radio :labelarr="invertedStatus_4" :radioIndex="4" v-on:getVal="getRadio"></radio>
          </dd>
        </dl>
        <dl>
          <i>5</i>
          <dd>
            <h2>{{$t('breastCancer.cyclomastopathy')}}</h2>
            <radio :labelarr="invertedStatus_5" :radioIndex="5" v-on:getVal="getRadio"></radio>
          </dd>
        </dl>
        <dl>
          <i>6</i>
          <dd>
            <h2>{{$t('breastCancer.nippleDischarge')}}</h2>
            <radio :labelarr="invertedStatus_6" :radioIndex="6" v-on:getVal="getRadio"></radio>
          </dd>
        </dl>
        <dl>
          <i>7</i>
          <dd>
            <h2>{{$t('breastCancer.mammaAccessoria')}}</h2>
            <radio :labelarr="invertedStatus_7" :radioIndex="7" v-on:getVal="getRadio"></radio>
          </dd>
        </dl>
        <dl>
          <i>8</i>
          <dd>
            <h2>{{$t('breastCancer.invertedNipple')}}</h2>
            <radio :labelarr="invertedStatus_8" :radioIndex="8" v-on:getVal="getRadio"></radio>
          </dd>
        </dl>
        <dl>
          <i>9</i>
          <dd>
            <h2>{{$t('breastCancer.gynecologicTumor')}}</h2>
            <radio :labelarr="breastCancer" :radioIndex="9" v-on:getVal="getRadio"></radio>
          </dd>
        </dl>
        <dl>
          <i>10</i>
          <dd>
            <h2>{{$t('breastCancer.chronicIllness')}}</h2>
            <radio :labelarr="chronicIllness" :radioIndex="10"  @getVal="getRadio"></radio>
          </dd>
        </dl>
      </div>
      <div class="ybtn_box">
        <i-button class="ybtn ybtn_dark" @click="submit">{{$t('btnBar.btn_submit')}}</i-button>
        <i-button class="ybtn ybtn_light" @click="goback">{{$t('btnBar.btn_return')}}</i-button>
      </div>
      <div class="ytips_problem">{{$t('breastCancer.tipCompleted')}}<i>0%</i>{{$t('breastCancer.tipReport')}}</div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
import radio from '@/component/_base-radio'
import { get } from '@/libs/util'
export default {
  name: 'breastCancer',
  data () {
    return {
      breastCancer: [], //
      chronicIllness: [], //
      invertedStatus_1: [], // 三种选择
      invertedStatus_2: [], // 三种选择
      invertedStatus_3: [], // 三种选择
      invertedStatus_4: [], // 三种选择
      invertedStatus_5: [], // 三种选择
      invertedStatus_6: [], // 三种选择
      invertedStatus_7: [], // 三种选择
      invertedStatus_8: [], // 三种选择

      radioVal_1: null, //
      radioVal_2: null,
      radioVal_3: null,
      radioVal_4: null,
      radioVal_5: null,
      radioVal_6: null,
      radioVal_7: null,
      radioVal_8: null,
      radioVal_9: null,
      radioVal_10: null
    }
  },
  components: {
    leftMenu,
    radio
  },
  mounted () {
    this.getRadioData()
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
      return arr
    },
    jsonArrCopy (arr) {
      arr = JSON.parse(JSON.stringify(arr)) // 拷贝数组,注意这行的拷贝方法
      return arr
    },
    getRadioData () {
      this.breastCancer = this.initRadioData('breastCancer', 'ciA', 8)
      this.chronicIllness = this.initRadioData('breastCancer', 'gtA', 5)
      this.invertedStatus_1 = this.initRadioData('breastCancer', 'threeStatus.status', 3)
      this.invertedStatus_2 = this.jsonArrCopy(this.invertedStatus_1)
      this.invertedStatus_3 = this.jsonArrCopy(this.invertedStatus_1)
      this.invertedStatus_4 = this.jsonArrCopy(this.invertedStatus_1)
      this.invertedStatus_5 = this.jsonArrCopy(this.invertedStatus_1)
      this.invertedStatus_6 = this.jsonArrCopy(this.invertedStatus_1)
      this.invertedStatus_7 = this.jsonArrCopy(this.invertedStatus_1)
      this.invertedStatus_8 = this.jsonArrCopy(this.invertedStatus_1)
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
