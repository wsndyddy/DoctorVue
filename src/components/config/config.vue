<template>
  <Card :title="$t('config.title')" icon="ios-film-outline">
    <Tabs type="card" v-model="currentTab" class="content-area">
      <TabPane name="exam" :label="$t('config.exam_conf')">
        <ExamConf v-bind:formData="config.exam"></ExamConf>
      </TabPane>
      <TabPane name="nidus" :label="$t('config.nidus_conf')">
        <NidusConf v-bind:formData="config.nidus"></NidusConf>
      </TabPane>
      <TabPane name="report" :label="$t('config.report_conf')">
        <ReportConf v-bind:formData="config.report"></ReportConf>
      </TabPane>
      <TabPane name="sys" :label="$t('config.sys_conf')">
        <SysConf v-bind:formData="config.sys"></SysConf>
      </TabPane>
    </Tabs>
    <Divider/>
    <Row>
      <i-col span="20">
        <i-button type="primary" icon="md-filing" :disabled="!modified" @click="save">{{$t('config.save')}}</i-button>
        <i-button type="primary" icon="md-undo" :disabled="!modified" @click="modal_cancel_confirm = true">{{$t('config.cancel')}}</i-button>
        <Modal v-model="modal_cancel_confirm"
               :title="$t('config.cancel_confirm')"
               :ok-text="$t('config.OK')"
               :cancel-text="$t('config.cancel')"
               @on-ok="cancel">
          {{$t('config.cancel_confirm_content')}}
        </Modal>
        <i-button type="primary" icon="md-refresh" @click="modal_to_default_confirm = true">{{$t('config.reset')}}</i-button>
        <Modal v-model="modal_to_default_confirm"
               :title="$t('config.operation_confirm')"
               :ok-text="$t('config.OK')"
               :cancel-text="$t('config.cancel')"
               @on-ok="reset">
          {{$t('config.to_default_confirm_content')}}
        </Modal>
      </i-col>
      <i-col span="4">
        <i-button type="primary" icon="md-refresh" @click="modal_to_default_all_confirm = true">{{$t('config.reset_all')}}</i-button>
        <Modal v-model="modal_to_default_all_confirm"
               :title="$t('config.operation_confirm')"
               :ok-text="$t('config.OK')"
               :cancel-text="$t('config.cancel')"
               @on-ok="resetAll">
          {{$t('config.to_default_all_confirm_content')}}
        </Modal>
      </i-col>
    </Row>
  </Card>
</template>

<script>
import { getConfig, setConfig } from '@/api/config'
import SysConf from './components/sys_conf'
import ExamConf from './components/exam_conf'
import NidusConf from './components/nidus_conf'
import ReportConf from './components/report_conf'
export default {
  name: 'Config',
  components: {
    SysConf,
    ExamConf,
    NidusConf,
    ReportConf
  },
  data () {
    return {
      currentTab: 'exam',
      modified: false,
      dataInited: false,
      modal_cancel_confirm: false,
      modal_to_default_confirm: false,
      modal_to_default_all_confirm: false,
      config: {
        'sys': {
          'language': 'zh_CN',
          'www_port': 8000
        },
        'exam': {
          'plot': {
            'gaussian_sigma': 0.5,
            'gamma': 0.9,
            'color': {
              'min': 0.0,
              'max': 35.0
            },
            'z': {
              'min': 0.0,
              'max': 350.0
            },
            'interp': {
              'type': 0,
              'times_2d': 2,
              'times_3d': 2
            },
            'plot3d': {
              'style': 3,
              'coord': 0,
              'legend': 0
            },
            'restrain': 0.05
          },
          'pi': {
            'enable': false
          }
        },
        'report': {
          'pos_img': {
            'half_side': 0,
            'show_others': 1
          }
        }
      }
    }
  },
  watch: {
    config: {
      handler: function () {
        if (this.dataInited) {
          this.modified = true
        } else {
          this.dataInited = true
        }
      },
      deep: true
    }
  },
  methods: {
    // 查询所有用户配置
    getAllConfig () {
      getConfig({
        cmd: 'get_conf',
        param: 'all',
        type: 'user'
      })
        .then((response) => {
          console.log(response.data)
          this.config = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 查询指定节点（一级节点）的默认配置
    getConfigDefault (node) {
      getConfig({
        cmd: 'get_conf',
        param: 'all',
        type: 'default'
      })
        .then((response) => {
          this.config[node] = response.data[node]
          this.save()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 查询所有默认配置
    getAllConfigDefault () {
      getConfig({
        cmd: 'get_conf',
        param: 'all',
        type: 'default'
      })
        .then((response) => {
          this.config = response.data
          this.save()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    save () {
      var conf = JSON.stringify(this.config)
      setConfig({
        cmd: 'set_conf',
        param: '',
        type: 'json',
        value: conf
      })
        .then((resoinse) => {
          this.modified = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    cancel () {
      this.dataInited = false
      this.getAllConfig()
      this.modified = false
    },
    reset () {
      this.dataInited = false
      this.getConfigDefault(this.currentTab)
      this.modified = false
    },
    resetAll () {
      this.dataInited = false
      this.getAllConfigDefault()
      this.modified = false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getAllConfig()
    })
  }
}
</script>

<style scoped>
  .content-area {
    height: 600px
  }
</style>
