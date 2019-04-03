<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_setup.png" /><i>{{$t('sysFocusDescribe.title')}}</i>
          </div>
        </div>
        <ul class="ys_tab">
          <li><router-link to="/sysCommon">{{$t('sysFocusDescribe.common')}}</router-link></li>
          <li><router-link to="/sysCheckImage">{{$t('sysFocusDescribe.checkImage')}}</router-link></li>
          <li class="on">{{$t('sysFocusDescribe.focusDescribe')}}</li>
          <li><router-link to="/sysReport">{{$t('sysFocusDescribe.report')}}</router-link></li>
          <li><router-link to="/sysReportTemplate">{{$t('sysFocusDescribe.reportTemplate')}}</router-link></li>
        </ul>
        <div>
          <div class="yk_top">
            <i>{{$t('sysFocusDescribe.describe2d')}}</i>
            <input v-model="tbD2d" class="yk_input" type="text" :placeholder="$t('sysFocusDescribe.d2dTip')" />
            <b @click="addD2d(tbD2d)">{{$t('btnBar.btn_add2')}}</b>
          </div>
          <ul class="yk_list">
            <li v-for="(items, index) in itemD2d" :key="index"><i>{{items.item}}</i><s @click="itemD2d.splice(index, 1)" /></li>
          </ul>
        </div>
        <div>
          <div class="yk_top">
            <i>{{$t('sysFocusDescribe.describe3d')}}</i>
            <input v-model="tbD3d" class="yk_input" type="text" :placeholder="$t('sysFocusDescribe.d3dTip')" />
            <b @click="addD3d(tbD3d)">{{$t('btnBar.btn_add2')}}</b>
          </div>
          <ul class="yk_list">
            <li v-for="(items, index) in itemD3d" :key="index"><i>{{items.item}}</i><s @click="itemD3d.splice(index, 1)" /></li>
          </ul>
        </div>
        <div class="ybtn_box_special">
          <i-button class="ybtn ybtn_dark">{{$t('btnBar.btn_save')}}</i-button>
          <i-button class="ybtn ybtn_light" @click="reDefault()">{{$t('btnBar.btn_Redefault')}}</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
export default {
  name: 'SysFocusDescribe',
  data () {
    return {
      // *2D描述 标签数据绑定（去Null、前后空格、重复）
      itemD2d: [
        { item: '+添加元素1' },
        { item: '+添加元素2' }
      ],
      // *3D描述 标签数据绑定（去Null、前后空格、重复）
      itemD3d: [
        { item: '+添加元素1' },
        { item: '+添加元素2' }
      ],
      tbD2d: '',
      tbD3d: '',
      // 恢复默认 按钮初始化同步数据
      defD2d: [],
      defD3d: []
    }
  },
  components: {
    leftMenu
  },
  methods: {
    addD2d (s) {
      let num = 0
      s = s.trim()
      this.itemD2d.forEach((e) => { if (e.item === s) num += 1 })

      if (s && num === 0) this.itemD2d.push({item: s})
    },
    addD3d (s) {
      let num = 0
      s = s.trim()
      this.itemD3d.forEach((e) => { if (e.item === s) num += 1 })

      if (s && num === 0) this.itemD3d.push({item: s})
    },
    reDefault () {
      this.itemD2d = []
      this.itemD3d = []
      this.defD2d.forEach((e) => { this.itemD2d.push({item: e.item}) })
      this.defD3d.forEach((e) => { this.itemD3d.push({item: e.item}) })
    }
  },
  created () {
    this.itemD2d.forEach((e) => { this.defD2d.push({item: e.item}) })
    this.itemD3d.forEach((e) => { this.defD3d.push({item: e.item}) })
  }
}
</script>

<style scoped>

</style>
