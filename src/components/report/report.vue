<template>
 <div>
 <div class="search-bar">
   <Row :gutter="10">
        <searchContent @sendVal = "searchMsg"></searchContent>
     <i-col span="9">
       <div class="f-r">
            <timeBtnGroup @sendState = "getState"></timeBtnGroup>
       </div>
     </i-col>
   </Row>
    <Row :gutter="10" class="m-t-25">
          <i-col span="12">
              <i-button class="lightblue-btn" @click="open_Modal('edit')">{{$t('btnBar.btn_edit')}}</i-button>
              <i-button class="grayblue-btn m-l-10" @click="open_Modal('del')">{{$t('btnBar.btn_del')}}</i-button>
              <i-button type="primary" class="m-l-10">{{$t('btnBar.btn_print')}}</i-button>
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
      <Table height="480" highlight-row :columns="table.columns" :data="table.data" @on-row-click="clickRow"></Table>
       <Row class="no-bg p-t-20 p-b-20">
           <i-col  type="flex" justify="center" align="middle">
                 <i-button @click="toPrev">{{$t('btnBar.btn_prev')}}</i-button>
                 <i-button @click="toNext" class="m-l-50">{{$t('btnBar.btn_next')}}</i-button>
           </i-col>
       </Row>
   </div>
    <Modal v-model="modalFg.modal_edit" width="442" footer-hide class-name="padding-50-modal" scrollable :title="modalFg.modal_title">
      <i-form :model="formItem" :label-width="60" label-position="left">
        <FormItem :label="$t('report.num')">
          <i-input v-model="formItem.inputnum"></i-input>
        </FormItem>
        <FormItem :label="$t('report.name')">
          <i-input v-model="formItem.inputname"></i-input>
        </FormItem>
        <FormItem :label="$t('report.createPeople')">
          <i-input v-model="formItem.inputcreatepeople"></i-input>
        </FormItem>
        <FormItem :label="$t('report.createTime')">
          <i-input v-model="formItem.inputcreatetime"></i-input>
        </FormItem>
        <FormItem :label="$t('report.age')">
          <i-button class="border-none f-s-18" size="small" @click="minusAge">{{$t('report.minus')}}</i-button>
          <i-input v-model="formItem.inputage" class="w-113 t-c-input"></i-input>
          <i-button class="border-none f-s-18" size="small" @click="plusAge">{{$t('report.plus')}}</i-button>
        </FormItem>
        <FormItem :label="$t('report.sex')">
          <i-button class="border-none" :class="formItem.inputsex ? 'ivu-btn-primary':'gray-btn'" @click="formItem.inputsex=!formItem.inputsex">{{$t('check.woman')}}</i-button>
          <i-button class="border-none" :class="!formItem.inputsex ? 'ivu-btn-primary':'gray-btn'" @click="formItem.inputsex=!formItem.inputsex">{{$t('check.man')}}</i-button>
        </FormItem>
        <FormItem type="flex" justify="center" align="middle" class="m-l-none m-t-25">
          <div class="m-t-25 m-l-m80">
            <i-button type="primary" class="w-154" @click="closeModal"> {{$t('btnBar.btn_save')}} </i-button>
            <i-button class="m-l-10 grayblue-btn w-154" @click="closeModal"> {{$t('btnBar.btn_cancel')}}</i-button>
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
        <Row class="m-t-20 f-s-14">
          <i-col :xs="{ span: 11, offset: 7 }">编号：{{formItem.inputnum}}</i-col>
        </Row>
        <Row class="f-s-14">
          <i-col :xs="{ span: 17, offset: 7 }">姓名：{{formItem.inputname}}</i-col>
        </Row>
        <Row class="f-s-14">
          <i-col :xs="{ span: 17, offset: 7 }">年龄：{{formItem.inputage}}</i-col>
        </Row>
        <Row class="f-s-14">
          <i-col :xs="{ span: 17, offset: 7 }">性别：{{formItem.inputsex}}</i-col>
       </Row>
        <Row class="f-s-14">
          <i-col :xs="{ span: 17, offset: 7 }">创建人：{{formItem.inputcreatepeople}}</i-col>
        </Row>
        <Row class="f-s-14">
          <i-col :xs="{ span: 17, offset: 7 }">创建时间：{{formItem.inputcreatetime}}</i-col>
        </Row>
        <Row type="flex" justify="center" align="middle" class="m-l-none m-t-25">
          <div class="m-t-25">
            <i-button type="primary" class="w-154" @click="closeModal">{{$t('btnBar.btn_ok')}}</i-button>
            <i-button class="m-l-10 grayblue-btn w-154" @click="closeModal"> {{$t('btnBar.btn_cancel')}} </i-button>
          </div>
        </Row>
      </div>
    </Modal>
  </div>
</template>
<script>
import timeBtnGroup from './components/timeSearchBtn'
import searchContent from './components/searchContent'
export default {
  name: 'Report',
  components: {
    timeBtnGroup,
    searchContent
  },
  data () {
    return {
      timeState: 'day',
      currRowIndex: null, // 记录当前点击的行数
      formItem: {
        inputnum: '',
        inputname: '',
        inputage: '',
        inputsex: false,
        inputcreatepeople: '',
        inputcreatetime: ''
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
            title: '创建人',
            key: 'createPeople'
          },
          {
            title: '创建时间',
            key: 'createTime'
          }
        ],
        data: [{
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18,
          createPeople: '林林',
          createTime: '2019-1-13'
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18,
          createPeople: '林林',
          createTime: '2019-1-13'
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18,
          createPeople: '林林',
          createTime: '2019-1-13'
        }, {
          num: 1,
          id: 1,
          name: '小明',
          sex: '男',
          age: 18,
          createPeople: '林林',
          createTime: '2019-1-13'
        }]
      }
    }
  },
  methods: {
    getReportData () {

    },
    // 上一页
    toPrev () {

    },
    //下一页
    toNext () {

    },
    searchMsg (name, num) {
      this.formItem.inputname = name
      this.formItem.inputnum = num
    },
    getState (val) {
      alert('状态' + val)
      this.timeState = val
    },
    open_Modal (fg) {

      let obj
      if (this.currRowIndex != null) {
        obj = this.table.data[this.currRowIndex]
      } else {
        this.$Modal.warning({
          title: '错误提示',
          content: '无选中项,请选择要操作信息！'
        })
        return
      }
      this.resite_currRow()
      this.formItem.inputname = obj.name
      this.formItem.inputage = obj.age
      this.formItem.inputnum = obj.num
      this.formItem.inputcreatepeople = obj.createPeople
      this.formItem.inputcreatetime = obj.createTime
      switch (fg) {
        case 'del':
          this.modalFg.modal_del = true
          this.formItem.inputsex = obj.sex
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
    }
  },
  mounted () {
    // this.$nextTick(() => {
    // this.getReportData()
    // })
  }
}
</script>

