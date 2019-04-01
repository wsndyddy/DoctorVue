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
            <div class="uc_name">{{$t('personalCenter.welcome')}}张晓华</div>
            <div class="uc_tips">
              <i>{{$t('personalCenter.tipLogin')}}38{{$t('units.frequency')}}，{{$t('personalCenter.tipTime')}} 2019-1-19 12:23:21</i>
              <u>{{$t('personalCenter.logout')}}</u>
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
                <th>姓名</th>
                <th>性别</th>
                <th>手机</th>
                <th>权限</th>
                <th>状态</th>
                <th width="28%">操作</th>
              </tr>
              <tr><td></td></tr>
              </thead>
              <tbody>
              <tr>
                <td>王红丽</td>
                <td>女</td>
                <td>1812031132</td>
                <td><b class="yellow">全部</b></td>
                <td><b class="green">正常</b></td>
                <td><i>切换登录</i><i onClick="popShow('.uc_modify')">修改</i><i>删除</i></td>
              </tr>
              <tr>
                <td>王红丽</td>
                <td>女</td>
                <td>1812031132</td>
                <td><b class="yellow">全部</b></td>
                <td><b class="gray">禁用</b></td>
                <td><i>切换登录</i><i>修改</i><i>删除</i></td>
              </tr>
              <tr>
                <td>王红丽</td>
                <td>女</td>
                <td>1812031132</td>
                <td><b class="yellow">全部</b></td>
                <td><b class="green">正常</b></td>
                <td><i>切换登录</i><i>修改</i><i>删除</i></td>
              </tr>
              <tr>
                <td>王红丽</td>
                <td>女</td>
                <td>1812031132</td>
                <td><b class="yellow">全部</b></td>
                <td><b class="gray">禁用</b></td>
                <td><i>切换登录</i><i>修改</i><i>删除</i></td>
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

    }
  },
  components: {
    leftMenu
  }
}
</script>

<style scoped>

</style>
