
<template>
  <div>
    <i-col span="5">
      <i-input class="border-none" v-model="formValue.input_name" size="large" :placeholder="$t('check.name')"/>
    </i-col>
    <i-col span="5">
      <i-input class="border-none" v-model="formValue.input_num" size="large" :placeholder="$t('check.num')"/>
    </i-col>
    <i-col span="5">
      <i-button class="gray-btn border-none" @click="sendMsg">{{$t('btnBar.btn_search')}}</i-button>
      <i-button class="gray-btn border-none" @click="resiteVal">{{$t('btnBar.btn_resite')}}</i-button>
    </i-col>
  </div>
</template>

<script>
export default {
  name: 'searchContent',
  data () {
    return {
      formValue: {
        input_name: '',
        input_num: ''
      }
    }
  },
  methods: {
    sendMsg () {
      this.$emit('sendVal', this.formValue.input_name, this.formValue.input_num)
    },
    resiteVal () {
      this.formValue.input_name = ''
      this.formValue.input_num = ''
    }
  },
  props: {
  }
}
</script>

