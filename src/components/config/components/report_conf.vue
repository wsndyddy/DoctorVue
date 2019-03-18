<template>
  <Form :model="formData" :label-width="100" class="content-area">
    <FormItem :label="$t('config.pos_img_type')">
      <i-switch v-model="formData.pos_img.half_side">
        <span slot="open">{{$t('config.one_side')}}</span>
        <span slot="close">{{$t('config.two_side')}}</span>
      </i-switch>
    </FormItem>
    <FormItem :label="$t('config.pos_img_show_others')">
      <i-switch v-model="formData.pos_img.show_others">
        <span slot="open">{{$t('config.show_others')}}</span>
        <span slot="close">{{$t('config.not_show_others')}}</span>
      </i-switch>
    </FormItem>
    <Divider/>
  </Form>
</template>

<script>
export default {
  name: 'ReportConf',
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .fullWidth {
    width: 150px
  }

  .content-area {
    overflow-y: scroll;
    height: 600px
  }
</style>
