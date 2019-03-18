<template>
  <Card :padding="12" :title="$t('report.title')" icon="ios-film-outline">
    <section ref="print" id="subOutputRank-print" class="content-area">
      <div class="report-area">
        <Header class="report-item"
                v-bind:config="report.config.header"
                v-bind:report="report.report"
                v-bind:patient="report.patient"
                v-bind:checker="report.checker"></Header>
        <Nidus v-bind:niduses="report.niduses"></Nidus>
        <Hazard class="report-item"
                v-if="report.patient_info.Haz_Ten"
                v-bind:Haz_Ten="report.patient_info.Haz_Ten"></Hazard>
        <Diagnosis class="report-item"
                   v-if="report.report.diagnosis"
                   v-bind:diagnosis="report.report.diagnosis"></Diagnosis>
        <Suggest class="report-item"
                 v-if="report.report.suggest"
                 v-bind:suggest="report.report.suggest"></Suggest>
        <Footer v-if="report.config.footer.show"
                v-bind:config="report.config.footer"></Footer>
      </div>
    </section>
    <Divider/>
    <Row>
      <i-col span="20">
        <i-button type="primary" icon="md-print" @click="doPrint">{{$t('report.print')}}</i-button>
      </i-col>
      <i-col span="4">
        <i-button type="primary" icon="md-undo" @click="toExam">{{$t('report.to_exam')}}</i-button>
      </i-col>
    </Row>
  </Card>
</template>

<script>
import {getReport} from '@/api/report'
import {sendCmd} from '@/api/cmd'
import Header from './components/header'
import Nidus from './components/nidus'
import Hazard from './components/hazard'
import Diagnosis from './components/diagnosis'
import Suggest from './components/suggest'
import Footer from './components/footer'
export default {
  name: 'Report',
  components: {
    Header,
    Nidus,
    Hazard,
    Diagnosis,
    Suggest,
    Footer
  },
  data () {
    return {
      report: {
        config: {
          header: {
            title: 'BreasTouch乳腺扫描报告',
            sub_title: {
              btLogo: '@/assets/logo.jpg',
              hospitalLogo: '@/assets/hospital_logo.jpg'
            }
          },
          footer: {
            show: true,
            title: '北京先通康桥医药科技有限公司',
            url: 'www.bjxtkq.cn'
          }
        },
        report: {
          qrCode: '@/assets/qrcode.jpg',
          diagnosis: '',
          suggest: ''
        },
        patient: {
          name: '-',
          age: '-',
          sex: '-',
          check_time: '-',
          check_id: '-',
          checker: '-'
        },
        niduses: [
          {}
        ],
        checker: {},
        patient_info: {
          Haz_Ten: {
            birth_lactation: -1,
            disease_history: -1,
            eating_habits: -1,
            exercise_habits: -1,
            family_history: 0,
            living_habits: -1,
            medication_history: -1,
            menstruation: -1,
            obese: -1,
            radiation: -1
          }
        }
      }
    }
  },
  methods: {
    getReportData () {
      getReport({
        cmd: 'query_data',
        uuid: 'current'
      })
        .then((response) => {
          this.report = response.data
          console.log(this.report)

          // 如果缺少数据，就写入默认值
          if (!this.report.report.qrCode) {
            this.report.report.qrCode = require('@/assets/qrcode.jpg')
          }
          if (!this.report.config.header.btLogo) {
            this.report.config.header.sub_title.btLogo = require('@/assets/logo.jpg')
          }
          if (!this.report.config.header.hospitalLogo) {
            this.report.config.header.sub_title.hospitalLogo = require('@/assets/hospital_logo.jpg')
          }
          if (!this.report.patient_info) {
            this.report.patient_info = {}
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 打印
    doPrint (e) {
      // console.log(subOutputRankPrint.innerHTML)
      document.body.innerHTML = document.getElementById('subOutputRank-print').innerHTML
      window.print()
    },
    toExam () {
      sendCmd({
        cmd: 'to_exam'
      })
        .then((response) => {
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getReportData()
    })
  }
}
</script>

<style scoped>
  .report-item {
    border-bottom: 1px solid #000;
    padding-bottom: 5px
  }

  .content-area {
    overflow-y: scroll;
    height: 600px
  }

  .report-area {
    border: 1px solid #000
  }
</style>
