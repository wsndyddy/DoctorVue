<template>
  <Card :padding="12">
    <div class="search-bar">
      <Row :gutter="10">
        <searchContent @sendVal="searchMsg"></searchContent>
        <timeBtnGroup class="f-r" @sendState="getState"></timeBtnGroup>
      </Row>
      <Row :gutter="10" class="m-t-10">
        <i-col span="12">
          <i-button type="primary" @click="open_Modal('add')">{{$t('btnBar.btn_add')}}</i-button>
          <i-button class="lightblue-btn m-l-10" @click="open_Modal('edit')">{{$t('btnBar.btn_edit')}}</i-button>
          <i-button class="grayblue-btn m-l-10" @click="open_Modal('del')">{{$t('btnBar.btn_del')}}</i-button>
        </i-col>
        <i-col span="12">
          <div class="f-r">
            <i-button type="primary" ghost>{{$t('btnBar.btn_hazard')}}</i-button>
            <i-button type="primary" class="m-l-10" ghost>{{$t('btnBar.btn_state')}}</i-button>
          </div>
        </i-col>
      </Row>
    </div>
    <div class="bgf">
      <Table height="550" highlight-row :columns="table.columns" :data="table.data" @on-row-click="clickRow"></Table>
      <Row class="no-bg p-t-20">
        <i-col type="flex" justify="center" align="middle">
          <i-button @click="toPrev">{{$t('btnBar.btn_prev')}}</i-button>
          <i-button @click="toNext" class="m-l-50">{{$t('btnBar.btn_next')}}</i-button>
          <div class="f-r">
            <Page :total="totalCount" :current=currentPage :page-size="pageSize"
                  show-total show-sizer
                  @on-change="changePage"
                  @on-page-size-change="changePageSize"></Page>
          </div>
        </i-col>
      </Row>
    </div>

    <Modal v-model="modalFg.modal_edit" width="422" footer-hide class-name="padding-50-modal" scrollable
           :title="modalFg.modal_title">
      <i-form :model="formItem" :label-width="50" label-position="left">
        <FormItem :label="$t('check.num')">
          <i-input v-model="formItem.inputnum" :placeholder="$t('check.tipnum')"></i-input>
        </FormItem>
        <FormItem :label="$t('check.name')">
          <i-input v-model="formItem.inputname" :placeholder="$t('check.tipname')"></i-input>
        </FormItem>
        <FormItem :label="$t('check.age')">
          <i-button class="border-none f-s-18" size="small" @click="minusAge">{{$t('check.minus')}}</i-button>
          <i-input v-model="formItem.inputage" class="w-113 t-c-input"></i-input>
          <i-button class="border-none f-s-18" size="small" @click="plusAge">{{$t('check.plus')}}</i-button>
        </FormItem>
        <FormItem :label="$t('check.sex')">
          <i-button class="border-none" :class="formItem.inputsex ? 'ivu-btn-primary':'gray-btn'"
                    @click="formItem.inputsex=!formItem.inputsex">{{$t('check.woman')}}
          </i-button>
          <i-button class="border-none" :class="!formItem.inputsex ? 'ivu-btn-primary':'gray-btn'"
                    @click="formItem.inputsex=!formItem.inputsex">{{$t('check.man')}}
          </i-button>
        </FormItem>
        <FormItem type="flex" justify="center" align="middle" class="m-l-none m-t-25">
          <div class="m-l-m80 m-t-10">
            <i-button type="primary" class="w-154" @click="closeModal">{{$t('check.startCheck')}}</i-button>
            <i-button class="m-l-10 grayblue-btn w-154" @click="closeModal"> {{$t('btnBar.btn_save')}}</i-button>
          </div>
        </FormItem>
      </i-form>
    </Modal>
    <Modal
      v-model="modalFg.modal_del "
      :title="$t('check.modal_del')"
      class="padding-50-modal"
      footer-hide
      width="422">
      <div class="formInfo-del-list">
        <Row class="tip-info m-t-10">
          <i-col :xs="{ span: 18, offset: 3 }">
            <Icon type="ios-information-circle"></Icon>
            <span class="m-l-10">请确认是否删除该用户</span>
          </i-col>
        </Row>
        <Row class="m-t-10 f-s-14">
          <i-col :xs="{ span: 8, offset: 7 }">编号：{{formItem.inputnum}}</i-col>
        </Row>
        <Row class="f-s-14">
          <i-col :xs="{ span: 8, offset: 7 }">姓名：{{formItem.inputname}}</i-col>
        </Row>
        <Row class="f-s-14">
          <i-col :xs="{ span: 8, offset: 7 }">年龄：{{formItem.inputage}}</i-col>
        </Row>
        <Row class="f-s-14">
          <i-col :xs="{ span: 8, offset: 7 }">性别：{{formItem.inputsex}}</i-col>
        </Row>
        <Row type="flex" justify="center" align="middle" class="m-t-10">
          <div class="m-t-10">
            <i-button type="primary" class="w-154" @click="closeModal">{{$t('btnBar.btn_ok')}}</i-button>
            <i-button class="m-l-10 grayblue-btn w-154" @click="closeModal"> {{$t('btnBar.btn_cancel')}}</i-button>
          </div>
        </Row>
      </div>
    </Modal>
  </Card>
</template>
<script>
import {sendCmd} from '@/api/cmd'
import timeBtnGroup from './component/timeSearchBtn'
import searchContent from './component/searchContent'

export default {
  name: 'Check',
  components: {
    timeBtnGroup,
    searchContent
  },
  data () {
    return {
      totalCount: 0,
      currentPage: 1,
      pageSize: 10,
      timeState: 'day',
      currRowIndex: null, // 记录当前点击的行数
      formItem: {
        inputnum: '',
        inputname: '',
        inputage: '',
        inputsex: false
      },
      modalFg: {
        modal_title: this.$t('check.modal_edit'),
        modal_edit: false,
        modal_add: false,
        modal_del: false
      },
      table: {
        columns: [
          {
            title: '序号',
            key: 'num'
          },
          {
            title: '编号',
            key: 'id'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '性别',
            key: 'sex'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '操作',
            key: 'operate',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {},
                  on: {
                    click: (e) => {
                      e.stopPropagation()
                      //this.show(params.index)
                      this.toExam()
                    }
                  }
                }, '开始检查')])
            }
          }
        ],
        data: [{
          num: 1,
          id: 1,
          name: '小明',
          sex: '女',
          age: 18
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18
        }]
      }
    }
  },
  methods: {
    // 上一页
    toPrev () {

    },
    // 下一页
    toNext () {

    },
    // 切换页
    changePage () {

    },
    // 修改每页显示数量
    changePageSize () {

    },
    // 展示当前行信息
    show (index) {
      this.$Modal.info({
        title: '当前行信息',
        content: `姓名：${this.table.data[index].name}<br>年龄：${this.table.data[index].age}<br>序号：${this.table.data[index].id}`
      })
    },
    open_Modal (fg) {
      let obj
      if (this.currRowIndex != null || fg === 'add') {
        obj = this.table.data[this.currRowIndex]
      } else {
        this.$Modal.warning({
          title: '错误提示',
          content: '无选中项,请选择要操作信息！'
        })
        return
      }
      this.resite_currRow()
      if (fg === 'del' || fg === 'edit') {
        this.formItem.inputname = obj.name
        this.formItem.inputage = obj.age
        this.formItem.inputnum = obj.num
      }
      switch (fg) {
        case 'del':
          this.modalFg.modal_del = true
          this.formItem.inputsex = obj.sex
          break
        case 'add':
          this.modal_title = this.$t('check.modal_add')
          this.modalFg.modal_edit = true
          this.formItem.inputname = ''
          this.formItem.inputage = 20
          this.formItem.inputnum = ''
          this.formItem.inputsex = false
          break
        case 'edit':
          this.modal_title = this.$t('check.modal_edit')
          this.modalFg.modal_edit = true
          this.formItem.inputsex = obj.sex === '男' ? false : true
          break
      }
    },
    resite_currRow () {
      this.currRowIndex = null
    },
    clickRow (obj, index) {
      this.currRowIndex = index
    },
    closeAll_Modal () {
      this.modalFg.modal_edit = false
      this.modalFg.modal_add = false
      this.modalFg.modal_del = false
    },
    closeModal () {
      this.closeAll_Modal()
    },
    minusAge () {
      this.formItem.inputage--
    },
    plusAge () {
      this.formItem.inputage++
    },
    searchMsg (name, num) {
      this.formItem.inputname = name
      this.formItem.inputnum = num
    },
    getState (val) {
      alert('状态' + val)
      this.timeState = val
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
    },
    // 从服务器获取受检者列表
    getPatients () {

    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getPatients()
    })
  }
}
</script>

