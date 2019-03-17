<template>
  <Row align="top" class="content">
    <i-col span="20">
      <Row>
        <h1>{{config.title}}</h1>
      </Row>
      <Row align="bottom">
        <i-col span="12">
          <Row v-if="config.sub_title.type==='icon'" style="height: 20px;">
            <img v-bind:src="config.sub_title.btLogo" alt="" style="width:120px; height:60px; float:left;">
            <img v-bind:src="config.sub_title.hospitalLogo" alt="" style="width:120px; height:60px; float:left;">
          </Row>
          <Row v-if="config.sub_title.type==='text'" style="height: 20px;">
            <h3>{{config.sub_title.text}}</h3>
          </Row>
        </i-col>
        <i-col span="12">
          <Row style="height: 20px;">
          </Row>
          <Row>
            <i-col span="4">
              <Row>
                {{$t('report.name')}}
              </Row>
              <Row>
                {{$t('report.age')}}
              </Row>
              <Row>
                {{$t('report.sex')}}
              </Row>
            </i-col>
            <i-col span="6">
              <Row>
                {{patient.name}}
              </Row>
              <Row>
                {{patient.age}}
              </Row>
              <Row>
                <div v-if="patient.sex === 0">{{$t('report.female')}}</div>
                <div v-else>{{$t('report.male')}}</div>
              </Row>
            </i-col>
            <i-col span="6">
              <Row>
                {{$t('report.check_time')}}
              </Row>
              <Row>
                {{$t('report.check_id')}}
              </Row>
              <Row>
                {{$t('report.checker')}}
              </Row>
            </i-col>
            <i-col span="8">
              <Row>
                {{this.getDate(patient.check_time)}}
              </Row>
              <Row>
                <div v-if="patient.check_id">
                  {{patient.check_id}}
                </div>
                <div>
                  -
                </div>
              </Row>
              <Row>
                {{checker.true_name}}
              </Row>
            </i-col>
          </Row>
        </i-col>
      </Row>
    </i-col>
    <i-col span="4" style="height: 128px">
      <img v-bind:src="report.qrCode" alt="" style="width:128px; height:128px; float:right;">
    </i-col>
  </Row>
</template>

<script>
import { makeDate } from '@/libs/util'
export default {
  name: 'Header',
  props: {
    config: {
      title: 'BreasTouch乳腺扫描报告',
      sub_title: {
        btLogo: require('@/assets/logo.jpg'),
        hospitalLogo: require('@/assets/hospital_logo.jpg')
      }
    },
    report: {
      type: Object,
      required: true
    },
    patient: {
      type: Object,
      required: true
    },
    checker: {
      type: Object,
      required: true
    }
  },
  methods: {
    getDate (time) {
      return makeDate(time * 1000)
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 9px
  }
</style>
