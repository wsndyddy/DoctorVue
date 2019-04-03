<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_setup.png" /><i>{{$t('sysReportTemplate.title')}}</i>
          </div>
        </div>
        <ul class="ys_tab">
          <li><router-link to="/sysCommon">{{$t('sysReportTemplate.common')}}</router-link></li>
          <li><router-link to="/sysCheckImage">{{$t('sysReportTemplate.checkImage')}}</router-link></li>
          <li><router-link to="/sysFocusDescribe">{{$t('sysReportTemplate.focusDescribe')}}</router-link></li>
          <li><router-link to="/sysReport">{{$t('sysReportTemplate.report')}}</router-link></li>
          <li class="on">{{$t('sysReportTemplate.reportTemplate')}}</li>
        </ul>
        <div class="y_template">
          <i>{{$t('sysReportTemplate.reportTemplate')}}</i>
          <ul>
            <li v-for="(items, index) in templateArr" :key="index" @click="selTemplate(index)" v-bind:class="{'on': items.default}">
              <h1>{{ items.title }}</h1>
              <h4>{{ items.desc }}</h4>
              <b><router-link :to="items.preview">预览</router-link></b>
            </li>
          </ul>
        </div>
        <div class="ybtn_box_special">
          <i-button class="ybtn ybtn_dark">{{$t('btnBar.btn_save')}}</i-button>
          <i-button class="ybtn ybtn_light" @click="selTemplate(defTemplate)">{{$t('btnBar.btn_Redefault')}}</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'SysReportTemplate',
  data () {
    return {
      // *报告模板 选择数据绑定，标题/描述/默认选中/预览地址
      templateArr: [{
        title: '模板一',
        desc: '该模板适用于快速生成报告，完整的显示病灶内容信息1',
        default: true,
        preview: 'http://www.xtkq.com/'
      }, {
        title: '模板二',
        desc: '该模板适用于快速生成报告，完整的显示病灶内容信息2',
        default: false,
        preview: 'http://www.xtkq.com/'
      }],
      defTemplate: 0
    }
  },
  components: {
    leftMenu
  },
  methods: {
    selTemplate (n) {
      this.templateArr.forEach((e) => { e.default = false })
      this.templateArr[n].default = true
    }
  },
  created () {
    this.templateArr.forEach((item, index, arr) => { if (item.default) this.defTemplate = index })
  }
}
</script>

<style scoped>

</style>
