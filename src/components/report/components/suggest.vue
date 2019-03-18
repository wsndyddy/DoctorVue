<template>
  <div class="content">
    <p>
      {{$t('report.suggest')}}
    </p>
    <p style="margin-left:15px">
      {{suggest}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Suggest',
  props: {
    suggest: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 9px
  }
</style>
