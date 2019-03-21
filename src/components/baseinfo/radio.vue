<template>
  <ul>
     <li v-for="(item,index) in labelarr" @click="setActive(index)" :class="{'selected':item.Active}" :key="index">{{item.label}}</li>
  </ul>
</template>

<script>
export default {
  name: 'radio',
  props: ['labelarr'],
  mounted () {
  },
  data () {
    return {
      arr: this.labelarr
    }
  },
  methods: {
    setActive (index) {
      this.arr.forEach((item, index) => {
        item.Active = false
      })
      this.arr[index].Active = true
    }
  }
}
</script>


