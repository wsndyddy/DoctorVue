<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_setup.png" /><i>{{$t('sysReport.title')}}</i>
          </div>
        </div>
        <ul class="ys_tab">
          <li><router-link to="/sysCommon">{{$t('sysReport.common')}}</router-link></li>
          <li><router-link to="/sysCheckImage">{{$t('sysReport.checkImage')}}</router-link></li>
          <li><router-link to="/sysFocusDescribe">{{$t('sysReport.focusDescribe')}}</router-link></li>
          <li class="on">{{$t('sysReport.report')}}</li>
          <li><router-link to="/sysReportTemplate">{{$t('sysReport.reportTemplate')}}</router-link></li>
        </ul>
        <div>
          <div class="yk_top">
            <i>{{$t('sysReport.impression')}}</i>
            <input v-model="tbImp" class="yk_input" type="text" :placeholder="$t('sysReport.impressionTip')" />
            <b @click="addImp(tbImp)">{{$t('btnBar.btn_add2')}}</b>
          </div>
          <ul class="yk_list">
            <li v-for="(items, index) in itemImp" :key="index"><i>{{items.item}}</i><s @click="itemImp.splice(index, 1)" /></li>
          </ul>
        </div>
        <div>
          <div class="yk_top">
            <i>{{$t('sysReport.suggestion')}}</i>
            <input v-model="tbSug" class="yk_input" type="text" :placeholder="$t('sysReport.suggestionTip')" />
            <b @click="addSug(tbSug)">{{$t('btnBar.btn_add2')}}</b>
          </div>
          <div class="yk_textarea">
            <textarea :placeholder="$t('sysReport.suggestionDes')"></textarea>
          </div>
          <ul class="yk_list">
            <li v-for="(items, index) in itemSug" :key="index"><i>{{items.item}}</i><s @click="itemSug.splice(index, 1)" /></li>
          </ul>
        </div>
        <div class="ybtn_box_special">
          <i-button class="ybtn ybtn_dark">{{$t('btnBar.btn_save')}}</i-button>
          <i-button @click="reDefault()" class="ybtn ybtn_light">{{$t('btnBar.btn_Redefault')}}</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'SysReport',
  data () {
    return {
      // *印象诊断 标签数据绑定（去Null、前后空格、重复）
      itemImp: [
        { item: '+添加元素1' },
        { item: '+添加元素2' }
      ],
      // *复查建议 标签数据绑定（去Null、前后空格、重复）
      itemSug: [
        { item: '+添加元素1' },
        { item: '+添加元素2' }
      ],
      tbImp: '',
      tbSug: '',
      // 恢复默认 按钮初始化同步数据
      defImp: [],
      defSug: []
    }
  },
  components: {
    leftMenu
  },
  methods: {
    addImp (str) {
      let num = 0
      str = str.trim()
      this.itemImp.forEach((item) => { if (item.item === str) num += 1 })

      if (str && num === 0) this.itemImp.push({item: str})
    },
    addSug (str) {
      let num = 0
      str = str.trim()
      this.itemSug.forEach((item) => { if (item.item === str) num += 1 })

      if (str && num === 0) this.itemSug.push({item: str})
    },
    reDefault () {
      this.itemImp = []
      this.itemSug = []
      this.defImp.forEach((e) => { this.itemImp.push({item: e.item}) })
      this.defSug.forEach((e) => { this.itemSug.push({item: e.item}) })
    }
  },
  created () {
    this.itemImp.forEach((e) => { this.defImp.push({item: e.item}) })
    this.itemSug.forEach((e) => { this.defSug.push({item: e.item}) })
  }
}
</script>

<style scoped>

</style>
