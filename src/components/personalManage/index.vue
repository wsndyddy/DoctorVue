<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="uc_top">
          <dl class="uc_head">
            <dt><img src="../../assets/img/headin.png" alt="背景图像" /></dt>
            <dd>{{$t('personalCenter.modifyPhoto')}}</dd>
          </dl>
          <div class="uc_info">
            <div class="uc_name">{{$t('personalCenter.welcome')}}{{ accArr.name }}</div>
            <div class="uc_tips">
              <i>{{$t('personalCenter.tipLogin')}}{{ accArr.frequency }}{{$t('units.frequency')}}，{{$t('personalCenter.tipTime')}}{{ accArr.logintime }}</i>
              <u @click="logout()">{{$t('personalCenter.logout')}}</u>
            </div>
          </div>
        </div>
        <div class="clearfix">
          <div class="uc_sider">
            <ul>
              <li><router-link to="/PersonalSetup">{{$t('personalCenter.accountSettings')}}</router-link></li>
              <li class="on">{{$t('personalCenter.accountManagement')}}</li>
            </ul>
          </div>
          <div class="uc_main">
            <table class="uc_table">
              <thead>
              <tr>
                <th>{{ $t('personalManage.tabName') }}</th>
                <th>{{ $t('personalManage.tabSex') }}</th>
                <th>{{ $t('personalManage.tabPhone') }}</th>
                <th>{{ $t('personalManage.tabAuthority') }}</th>
                <th>{{ $t('personalManage.tabState') }}</th>
                <th width="28%">{{ $t('personalManage.tabOperation') }}</th>
              </tr>
              <tr><td></td></tr>
              </thead>
              <tbody>
              <tr v-for="(value, key, index) in account">
                <td>{{ value.name }}</td>
                <td>{{ value.sex }}</td>
                <td>{{ value.phone }}</td>
                <td><b v-bind:class="[ value.authColor, '' ]">{{ value.authority }}</b></td>
                <td><b v-bind:class="[ value.stateColor, '' ]">{{ value.state }}</b></td>
                <td><i>{{ value.operLogin }}</i><i>{{ value.operModify }}</i><i>{{ value.operDelete }}</i></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'PersonalManage',
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
      accArr: [{
        name: '张晓华',
        frequency: '30',
        logintime: '2019-3-20 12:23:21',
        organization: '北京长安医院',
        department: '乳腺科',
        address: '朝阳区大望路88号长安医院',
        tel: '010-12345678',
        sex: '女',
        birthday: '1980/08/08',
        phone: '13919800808',
        mail: 'zxh@163.com',
        wechat: '13919800808',
        account: 'zhangxiaohua',
        password: '123456',
        confirm: '123456'
      }],
      account: [{
        id: '1',
        name: '王红丽',
        sex: '女',
        phone: '1812031132',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'gray',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }, {
        id: '2',
        name: '王丽红',
        sex: '男',
        phone: '1812031133',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'gray',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }, {
        id: '3',
        name: '王黄丽',
        sex: '女',
        phone: '1812031134',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'gray',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }, {
        id: '4',
        name: '王蓝丽',
        sex: '女',
        phone: '1812031135',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'gray',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }, {
        id: '5',
        name: '王白丽',
        sex: '男',
        phone: '1812031136',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'gray',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }, {
        id: '6',
        name: '王黑丽',
        sex: '女',
        phone: '1812031137',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'gray',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }, {
        id: '7',
        name: '王粉丽',
        sex: '女',
        phone: '1812031138',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'gray',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }, {
        id: '8',
        name: '王紫丽',
        sex: '女',
        phone: '1812031139',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'gray',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }, {
        id: '9',
        name: '王棕丽',
        sex: '女',
        phone: '1812031130',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'gray',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }, {
        id: '10',
        name: '王橙丽',
        sex: '男',
        phone: '1912031132',
        authority: '全部',
        authColor: 'yellow',
        state: '禁用',
        stateColor: 'green',
        operLogin: '切换登录',
        operModify: '修改',
        operDelete: '删除'
      }
      ]
    }
  },
  components: {
    leftMenu
  },
  methods: {
    selSex (s) {
      this.sexArr.forEach((e) => {
        if (e.name === s) {
          e.default = true
        } else { e.default = false }
      })
    },
    logout () {
      // 退出登录过程
    },
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
          // this.formItem.inputsex = obj.sex === '男' ? false : true
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
  created () {
    this.selSex(this.accArr.sex)
  }
}
</script>

<style scoped>

</style>
