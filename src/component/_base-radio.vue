<template>
  <ul class="clearfix">
     <li v-for="(item,index) in labelarr" @click="setActive(index)" :class="{'selected':item.Active}" :key="index">{{item.label}}</li>
  </ul>
</template>

<script>
export default {
  name: 'radio',
  props: ['labelarr', 'radioIndex'],
  watch: {
    'labelarr' () {
      this.arr = this.labelarr
    }
  },
  mounted () {
    this.arr = this.labelarr
    this.num = this.radioIndex
  },
  data () {
    return {
      arr: null,
      num: null
    }
  },
  methods: {
    setActive (index) {
      console.log(this.radioIndex)
      this.arr.forEach((item, index) => {
        item.Active = false
      })
      this.arr[index].Active = true
      this.$emit('getVal', this.num, this.arr[index].label)
    }
  }
}
</script>

