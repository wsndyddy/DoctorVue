<template>
  <div class="content">
    <p>
      {{$t('report.diagnosis')}}
    </p>
    <p style="margin-left:15px">
      {{diagnosis}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Diagnosis',
  props: {
    diagnosis: {
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
