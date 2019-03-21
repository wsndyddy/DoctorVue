<template>
  <div class="y_container">
    <!--<leftMenu></leftMenu>-->
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_help.png" /><i>{{$t('help.bread')}}</i>
          </div>
        </div>
        <div class="ylist_square">
          <dl class="col_half">
            <dt>{{$t('baseinfo.marriageStatus.title')}}</dt>
            <ul>
              <li>{{$t('baseinfo.marriageStatus.is')}}</li>
              <li>{{$t('baseinfo.marriageStatus.no')}}</li>
            </ul>
          </dl>
          <dl class="col_half">
            <dt>{{$t('baseinfo.marriageHistory.title')}}</dt>
            <ul>
              <li>{{$t('baseinfo.marriageHistory.is')}}</li>
              <li>{{$t('baseinfo.marriageHistory.no')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('baseinfo.culture.title')}}</dt>
            <ul>
              <li>{{$t('baseinfo.culture.status1')}}</li>
              <li>{{$t('baseinfo.culture.status2')}}</li>
              <li>{{$t('baseinfo.culture.status3')}}</li>
              <li>{{$t('baseinfo.culture.status4')}}</li>
              <li>{{$t('baseinfo.culture.status5')}}</li>
            </ul>
          </dl>
          <dl>
            <dt>{{$t('baseinfo.occupation.title')}}</dt>
            <ul>
              <li>{{$t('baseinfo.occupation.name1')}}</li>
              <li>{{$t('baseinfo.occupation.name2')}}</li>
              <li>{{$t('baseinfo.occupation.name3')}}</li>
              <li>{{$t('baseinfo.occupation.name4')}}</li>
              <li>{{$t('baseinfo.occupation.name5')}}</li>
              <li>{{$t('baseinfo.occupation.name6')}}</li>
              <li>{{$t('baseinfo.occupation.name7')}}</li>
              <li>{{$t('baseinfo.occupation.name8')}}</li>
              <li>{{$t('baseinfo.occupation.name9')}}</li>
              <li>{{$t('baseinfo.occupation.name10')}}</li>
              <li>{{$t('baseinfo.occupation.name11')}}</li>
            </ul>
          </dl>
        </div>
        <div class="ylist_optionbox">
          <dl>
            <dt></dt>
            <dd>
              <h2>
                <ul>
                  <li>2017{{$t('baseinfo.time.year')}}</li>
                  <li class="show">2018{{$t('baseinfo.time.year')}}</li>
                  <li>2019{{$t('baseinfo.time.year')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
              <h2>
                <ul>
                  <li>10{{$t('baseinfo.time.month')}}</li>
                  <li class="show">11{{$t('baseinfo.time.month')}}</li>
                  <li>12{{$t('baseinfo.time.month')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
              <h2>
                <ul>
                  <li>11{{$t('baseinfo.time.day')}}</li>
                  <li>12{{$t('baseinfo.time.day')}}</li>
                  <li>13{{$t('baseinfo.time.day')}}</li>
                  <li class="show">14{{$t('baseinfo.time.day')}}</li>
                  <li>15{{$t('baseinfo.time.day')}}</li>
                  <li>16{{$t('baseinfo.time.day')}}</li>
                  <li>17{{$t('baseinfo.time.day')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('baseinfo.cycle.title')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>11{{$t('baseinfo.cycle.title')}}</li>
                  <li>12{{$t('baseinfo.cycle.title')}}</li>
                  <li>13{{$t('baseinfo.cycle.title')}}</li>
                  <li class="show">14{{$t('baseinfo.cycle.title')}}</li>
                  <li>15{{$t('baseinfo.cycle.title')}}</li>
                  <li>16{{$t('baseinfo.cycle.title')}}</li>
                  <li>17{{$t('baseinfo.cycle.title')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('baseinfo.rule.title')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>11{{$t('baseinfo.rule.day')}}</li>
                  <li>12{{$t('baseinfo.rule.day')}}</li>
                  <li>13{{$t('baseinfo.rule.day')}}</li>
                  <li class="show">14{{$t('baseinfo.rule.day')}}</li>
                  <li>15{{$t('baseinfo.rule.day')}}</li>
                  <li>16{{$t('baseinfo.rule.day')}}</li>
                  <li>17{{$t('baseinfo.rule.day')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
            </dd>
          </dl>
          <dl class="col_half">
            <dt>{{$t('baseinfo.age.title')}}</dt>
            <dd>
              <h2>
                <ul>
                  <li>11{{$t('baseinfo.age.day')}}</li>
                  <li>12{{$t('baseinfo.age.day')}}</li>
                  <li>13{{$t('baseinfo.age.day')}}</li>
                  <li class="show">14{{$t('baseinfo.age.day')}}</li>
                  <li>15{{$t('baseinfo.age.day')}}</li>
                  <li>16{{$t('baseinfo.age.day')}}</li>
                  <li>17{{$t('baseinfo.age.day')}}</li>
                </ul>
                <i class="ylo_prev"></i>
                <i class="ylo_next"></i>
              </h2>
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
import { get } from '@/libs/util'
export default {
  name: 'bginfo',
  data () {
    return {
      helpMenu: []
    }
  },
  components: {
    leftMenu
  },
  mounted () {
    this.getMenuInfo()
  },
  methods: {
    getMenuInfo () {
      let url = ''
      get(url, {}).then(res => {})
    }
  }
}
</script>
