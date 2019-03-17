<template>
  <Form :model="formData" :label-width="100" class="content-area">
    <FormItem :label="$t('config.language')">
      <Select v-model="formData.language" class="fullWidth">
        <Option v-for="item in language" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      *
    </FormItem>
    <Divider/>
    <div class="warning">
      {{$t('config.neet_restart_to_enable')}}
    </div>
  </Form>
</template>

<script>
export default {
  name: 'SysConf',
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      language: [
        {
          value: 'zh_CN',
          label: this.$t('config.zh_CN')
        },
        {
          value: 'en',
          label: this.$t('config.en')
        }
      ]
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

  .warning {
    color: red;
  }
</style>
