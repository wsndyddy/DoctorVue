<template>
  <div>
    <i-button class="border-none" :class="{'ivu-btn-primary':btnState.day.isActive,'gray-btn':btnState.day.noActive}"
              @click="setBtnActive(btnState.day,'day')">{{$t('btnBar.btn_day')}}
    </i-button>
    <i-button class="border-none" :class="{'ivu-btn-primary':btnState.week.isActive,'gray-btn':btnState.week.noActive}"
              @click="setBtnActive(btnState.week,'week')">{{$t('btnBar.btn_week')}}
    </i-button>
    <i-button class="border-none"
              :class="{'ivu-btn-primary':btnState.month.isActive,'gray-btn':btnState.month.noActive}"
              @click="setBtnActive(btnState.month,'month')">{{$t('btnBar.btn_month')}}
    </i-button>
    <i-button class="border-none" :class="{'ivu-btn-primary':btnState.all.isActive,'gray-btn':btnState.all.noActive}"
              @click="setBtnActive(btnState.all,'all')">{{$t('btnBar.btn_alldate')}}
    </i-button>
  </div>
</template>

<script>
export default {
  name: 'timeBtnGroup',
  data () {
    return {
      stateDay: 'day',
      btnState: {
        day: {
          isActive: true,
          noActive: false
        },
        week: {
          isActive: false,
          noActive: true
        },
        month: {
          isActive: false,
          noActive: true
        },
        all: {
          isActive: false,
          noActive: true
        }
      }
    }
  },
  methods: {
    setBtnActive (event, str) {
      for (let item in this.btnState) {
        this.btnState[item].isActive = false
        this.btnState[item].noActive = true
      }
      this.stateDay = str
      event.isActive = !event.isActive
      event.noActive = !event.noActive
      this.$emit('sendState', this.stateDay)
    }
  },
  props: {}
}
</script>

