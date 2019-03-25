<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_base.png" /><i>{{$t('baseinfo.bread')}}</i>
          </div>
        </div>
        <div class="ylist_square">
          <dl class="col_half">
            <dt>{{$t('baseinfo.marriageStatus.title')}}</dt>
            <radio :labelarr="marriage"></radio>
          </dl>
          <dl class="col_half">
            <dt>{{$t('baseinfo.marriageHistory.title')}}</dt>
            <radio :labelarr="marriageHistory"></radio>
          </dl>
          <dl>
            <dt>{{$t('baseinfo.culture.title')}}</dt>
            <radio :labelarr="culture"></radio>
          </dl>
          <dl>
            <dt>{{$t('baseinfo.occupation.title')}}</dt>
            <radio :labelarr="occupation"></radio>
          </dl>
        </div>
        <div class="ylist_optionbox">
          <dl>
            <dt>{{$t('baseinfo.time.title')}}</dt>
            <dd>
              <incretInput :sum.sync="yjTime.year" :dw="$t('baseinfo.time.year')" v-on:getNum="getYear"></incretInput>
              <incretInput :sum.sync="yjTime.month" :dw="$t('baseinfo.time.month')" v-on:getNum="getMonth"></incretInput>
              <incretInput :sum.sync="yjTime.day" :dw="$t('baseinfo.time.day')" v-on:getNum="getDay"></incretInput>

            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('baseinfo.cycle.title')}}</dt>
            <dd>
              <incretInput :sum.sync="yjWeekTime.day" :dw="$t('baseinfo.cycle.day')" v-on:getNum="getWeekDay"></incretInput>
           </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('baseinfo.rule.title')}}</dt>
            <dd>
              <incretInput :sum.sync="yjGetterTime.day" :dw="$t('baseinfo.rule.day')" v-on:getNum="getYjGetter"></incretInput>
           </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('baseinfo.age.title')}}</dt>
            <dd>
              <incretInput :sum.sync="yjFirstTime.day" :dw="$t('baseinfo.age.day')" v-on:getNum="getYjAge"></incretInput>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('baseinfo.age.title')}}</dt>
            <dd>
              <incretInput :sum.sync="yjWeekDay.day" :dw="$t('baseinfo.week.day')" v-on:getNum="getWeekTime"></incretInput>
            </dd>
          </dl>
        </div>
        <div class="ybtn_box">
          <input class="ybtn ybtn_dark" type="submit" :value="$t('baseinfo.btnPrev')" />
          <input class="ybtn ybtn_light" type="button" :value="$t('baseinfo.btnnext')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
import radio from '@/components/baseinfo/radio'
import incretInput from '@/components/baseinfo/incretInput'
import { get } from '@/libs/util'
export default {
  name: 'bginfo',
  data () {
    return {
      marriage: [
        {
          Active: false,
          label: this.$t('baseinfo.marriageStatus.is')
        },
        {
          Active: false,
          label: this.$t('baseinfo.marriageStatus.no')
        }
      ],
      marriageHistory: [
        {
          Active: false,
          label: this.$t('baseinfo.marriageHistory.is')
        },
        {
          Active: false,
          label: this.$t('baseinfo.marriageHistory.no')
        }
      ],
      culture: [
        {
          Active: false,
          label: this.$t('baseinfo.culture.status1')
        },
        {
          Active: false,
          label: this.$t('baseinfo.culture.status2')
        },
        {
          Active: false,
          label: this.$t('baseinfo.culture.status3')
        },
        {
          Active: false,
          label: this.$t('baseinfo.culture.status4')
        },
        {
          Active: false,
          label: this.$t('baseinfo.culture.status5')
        }
      ],
      occupation: [
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name1')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name2')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name3')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name4')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name5')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name6')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name7')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name8')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name9')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name10')
        },
        {
          Active: false,
          label: this.$t('baseinfo.occupation.name11')
        }
      ],
      time: {
        year: null,
        month: null,
        day: null
      },
      yjTime: { //  月经lastTime
        year: 2018,
        month: 3,
        day: 24
      },
      yjWeekTime: {
        day: 24
      },
      yjGetterTime: {
        day: 24
      },
      yjFirstTime: {
        day: 24
      },
      yjWeekDay: {
        day: 24
      }
    }
  },
  components: {
    leftMenu,
    radio,
    incretInput
  },
  watch: {
    'yjTime.year' () {
      if (this.yjTime.year > this.time.year) {
        this.yjTime.year = this.time.year
      }
    },
    'yjTime.month' () {
      if (this.yjTime.month > 12) {
        this.yjTime.month = 12
      }
    },
    'yjTime.day' () {
      if (!this.judegeBigMonth()) {
        if (this.yjTime.month === 2) {
          this.dealFebruary()
        } else {
          if (this.yjTime.day > 30) {
            this.yjTime.day = 30
            return false
          }
        }
      }
    }
  },
  mounted () {
    this.getMenuInfo()
    this.getYearMonthDay()
  },
  methods: {
    judegeBigMonth () {
      let arr = [1, 3, 5, 7, 9]
      let that = this
      arr.forEach(item => {
        if (item === that.yjTime.month) {
          if (that.yjTime.day >= 31) {
            that.yjTime.day = 31
            return false
          }
        }
      })
      return true
    },
    dealFebruary () { //  处理二月份
      if (this.yjTime.year % 4) {
        if (this.yjTime.day > 28) {
          this.yjTime.day = 28
          return false
        }
      } else {
        if (this.yjTime.day > 29) {
          this.yjTime.day = 29
          return false
        }
      }
    },
    getYearMonthDay () {
      let date = new Date()
      this.time.year = date.getFullYear()
      this.time.month = date.getMonth() + 1
      this.time.day = date.getDate()
      //  初始化日期
      this.yjTime.year = this.time.year
      this.yjTime.month = this.time.month
      this.yjTime.day = this.time.day
    },
    getMenuInfo () {
      let url = ''
      get(url, {}).then(res => {})
    },
    getYear (num) {
      this.yjTime.year = num
    },
    getMonth (num) {
      this.yjTime.month = num
    },
    getDay (num) {
      this.yjTime.day = num
    },
    getWeekDay (num) {
      this.yjWeekTime.day = num
    },
    getYjGetter (num) {
      this.yjGetterTime.day = num
    },
    getYjAge (num) {
      this.yjFirstTime.day = num
    },
    getWeekTime (num) {
      this.yjWeekDay.day = num
    }

  }
}
</script>
