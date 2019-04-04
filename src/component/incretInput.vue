<template>
  <h2>
    <ul>
      <li class="show">{{sum}}{{dw}}</li>
    </ul>
    <i class="ylo_prev" @click="minits"></i>
    <i class="ylo_next" @click="plus"></i>
  </h2>
</template>

<script>
export default {
  name: 'incretInput',
  props: ['sum', 'dw'],
  data () {
    return {
      num: this.sum
    }
  },
  methods: {
    minits () {
      this.num--
      this.$emit('getNum', this.num)
    },
    plus () {
      this.num++
      this.$emit('getNum', this.num)
    }
  }
}
</script>

<style scoped>

</style>
