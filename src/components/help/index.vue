<template>
  <div class="y_container">
    <leftMenu></leftMenu>
    <div class="y_main">
      <div class="ypub_box">
        <div class="ypub_top">
          <div class="ypub_title">
            <img src="../../assets/title_help.png" /><i>{{$t('help.bread')}}</i>
          </div>
          <div class="ypub_return" @click="route.back()">{{$t('help.btn')}}</div>
        </div>
        <div class="y_operation clearfix">
          <div class="yo_sider">
            <dl v-for="(item,index) in helpMenu" :key="index">
              <dt @click="toggleMenu(index)">{{index+1}}. {{item.title}}</dt>
              <dd v-if="item.isShow">
                <ul>
                  <li @click="showDetail(`${index+1}.${ind+1} ${itm.title}`)" v-for="(itm,ind) in item.child" :key="ind">{{index+1}}.{{ind+1}} {{itm.title}}</li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="yo_main">
            <h1>{{content.title}}</h1>
            <dl>
              <p>{{content.desc}}</p>
             </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from '../leftMenu'
import { get } from '@/libs/util'
export default {
  name: 'help',
  data () {
    return {
      helpMenu: [],
      content: {
        title: '探头使用',
        desc: '动态内容'
      }
    }
  },
  components: {
    leftMenu
  },
  mounted () {
    this.getMenuInfo()
  },
  methods: {
    showDetail (title) { // 展示文章内容
      this.content.title = title
      let url = ''
      get(url, {}).then(res => {})
    },
    toggleMenu (index) { // 展示
      this.helpMenu.forEach(item => {
        item.isShow = false
      })
      this.helpMenu[index].isShow = true
    },
    getMenuInfo () {
      this.helpMenu = [{
        title: '触诊操作',
        isShow: true,
        child: [{
          title: '探头使用'
        },
        {
          title: '探头校准'
        },
        {
          title: '病灶使用'
        }]
      },
      {
        title: '异常处理',
        isShow: false,
        child: [{
          title: '探头使用'
        },
        {
          title: '探头校准'
        },
        {
          title: '病灶使用'
        }]
      },
      {
        title: '操作流程',
        isShow: false,
        child: [{
          title: '探头使用'
        },
        {
          title: '探头校准'
        },
        {
          title: '病灶使用'
        }]
      },
      {
        title: '系统配置',
        isShow: false,
        child: [{
          title: '探头使用'
        },
        {
          title: '探头校准'
        },
        {
          title: '病灶使用'
        }]
      }]
      let url = ''
      get(url, {}).then(res => {})
    }
  }
}
</script>
