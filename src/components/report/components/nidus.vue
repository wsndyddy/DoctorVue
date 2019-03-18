<template>
  <div>
    <div v-for="nidus in niduses" :key="nidus.title">
      <Row align="top" class="nidus_row">
        <i-col span="8" align="left" class="nidus_cell">
          <div class="content">
            <p>
              {{$t('nidus.name')}}{{nidus.title}}
            </p>
            <p>
              <img :src="nidus.img_pos" alt="" style="width:200px; height:150px;">
            </p>
          </div>
        </i-col>
        <i-col span="8" align="center" class="nidus_cell">
          <div class="content">
            <p>
              {{$t('nidus.image_3d')}}
            </p>
            <p>
              <img :src="nidus.img_3d" alt="" style="width:220px; height:150px;">
            </p>
          </div>
        </i-col>
        <i-col span="8" align="center">
          <div class="content">
            <p>
              {{$t('nidus.image_2d')}}
            </p>
            <p>
              <img :src="nidus.img_2d" alt="" style="width:220px; height:150px;">
            </p>
          </div>
        </i-col>
      </Row>
      <Row class="nidus_row">
        <i-col span="8" class="content nidus_cell">
          <div v-if="nidus.position === 0">
            {{$t('nidus.position')}}{{$t('nidus.left')}}
          </div>
          <div v-else>
            {{$t('nidus.position')}}{{$t('nidus.right')}}
          </div>
          <div>
            {{$t('nidus.size')}}{{nidus.width}}mm * {{nidus.height}}mm
          </div>
          <div>
            {{$t('nidus.hardness')}}{{nidus.hardness}}
          </div>
          <div v-if="nidus.shape === 0">
            {{$t('nidus.shape')}}{{$t('nidus.single')}}
          </div>
          <div v-else>
            {{$t('nidus.shape')}}{{$t('nidus.multi')}}
          </div>
        </i-col>
        <i-col span="16" class="content">
          <p>
            {{nidus.diagnose}}
          </p>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nidus',
  props: {
    niduses: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 9px
  }
  .nidus_row {
    border-bottom: 1px solid #000;
  }
  .nidus_cell {
    border-right: 1px solid #000;
  }
</style>
