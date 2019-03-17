<template>
  <div>
    <Row type="flex" justify="center">
      <i-col>
        {{config.title}}
      </i-col>
    </Row>
    <Row type="flex" justify="center">
      <i-col>
        {{config.url}}
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    config: {
      title: '北京先通康桥医药科技有限公司',
      url: 'www.bjxtkq.cn'
    }
  }
}
</script>

<style scoped>

</style>
