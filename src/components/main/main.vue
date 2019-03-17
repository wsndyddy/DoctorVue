<template>
  <Content class="main-content-con">
    <Layout class="main-layout-con">
      <Content class="content-wrapper">
        <router-view/>
        <BackTop></BackTop>
      </Content>
    </Layout>
  </Content>
</template>

<script>
import './main.less'

export default {
  name: 'Main',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  mounted () {
  }
}
</script>

<style lang="less">
</style>
