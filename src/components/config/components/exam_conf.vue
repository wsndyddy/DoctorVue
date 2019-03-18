<template>
  <Form :model="formData" :label-width="100" class="content-area">
    <FormItem :label="$t('config.smoothing_factor')">
      <InputNumber :max="5.00"
                   :min="0.00"
                   :step="0.10"
                   v-model="formData.plot.gaussian_sigma"
                   class="fullWidth"></InputNumber>
      <i-switch v-model="switch_on_off" @on-change="calSmoothingFactor" size="large">
        <span slot="open">{{$t('config.on')}}</span>
        <span slot="close">{{$t('config.off')}}</span>
      </i-switch>
      <i-switch v-model="switch_high_low"
                :disabled="switch_high_low_disabled"
                @on-change="calSmoothingFactor"
                size="large">
        <span slot="open">{{$t('config.high')}}</span>
        <span slot="close">{{$t('config.low')}}</span>
      </i-switch>
    </FormItem>
    <FormItem :label="$t('config.gamma')">
      <InputNumber :max="50.00"
                   :min="0.01"
                   :step="0.01"
                   v-model="formData.plot.gamma"
                   class="fullWidth"></InputNumber>
    </FormItem>
    <FormItem :label="$t('config.restrain')">
      <InputNumber :max="10.00"
                   :min="0.00"
                   :step="0.05"
                   v-model="formData.plot.restrain"
                   class="fullWidth"></InputNumber>
    </FormItem>
    <FormItem :label="$t('config.color')">
      <InputNumber :max="10.00"
                   :min="0.00"
                   :step="1.00"
                   v-model="formData.plot.color.min"
                   style="float:left"></InputNumber>
      <img :src="color_img" alt="" class="colorImg">
      <InputNumber :max="500.00"
                   :min="10.00"
                   :step="1.00"
                   v-model="formData.plot.color.max"
                   style="float:left"></InputNumber>
    </FormItem>
    <FormItem :label="$t('config.z_max')">
      <InputNumber :max="2000"
                   :min="20"
                   :step="10"
                   v-model="formData.plot.z.max"
                   class="fullWidth"></InputNumber>
    </FormItem>
    <FormItem :label="$t('config.style_3d')">
      <Select v-model="formData.plot.plot3d.style" class="fullWidth">
        <Option v-for="item in plot3d_styles" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </FormItem>
    <FormItem :label="$t('config.coord_3d')">
      <Select v-model="formData.plot.plot3d.coord" class="fullWidth">
        <Option v-for="item in plot3d_coord" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </FormItem>
    <FormItem :label="$t('config.legend')">
      <Select v-model="formData.plot.plot3d.legend" class="fullWidth">
        <Option v-for="item in plot3d_legend" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </FormItem>
    <FormItem :label="$t('config.interp_type')">
      <Select v-model="formData.plot.interp.type" class="fullWidth">
        <Option v-for="item in interp_type" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </FormItem>
    <FormItem :label="$t('config.interp_2d')">
      <InputNumber :max="4"
                   :min="0"
                   :step="1"
                   v-model="formData.plot.interp.times_2d"
                   class="fullWidth"></InputNumber>
      {{$t('config.times')}}
    </FormItem>
    <FormItem :label="$t('config.interp_3d')">
      <InputNumber :max="4"
                   :min="0"
                   :step="1"
                   v-model="formData.plot.interp.times_3d"
                   class="fullWidth"></InputNumber>
      {{$t('config.times')}}
    </FormItem>
    <Divider/>
  </Form>
</template>

<script>
export default {
  name: 'ExamConf',
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      switch_on_off: true,
      switch_high_low: false,
      switch_high_low_disabled: false,
      color_img: require('@/assets/palette.jpg'),
      plot3d_styles: [
        {
          value: 0,
          label: this.$t('config.filled')
        },
        {
          value: 1,
          label: this.$t('config.filled_mash')
        },
        {
          value: 2,
          label: this.$t('config.points')
        },
        {
          value: 3,
          label: this.$t('config.wire_frame')
        }
      ],
      plot3d_coord: [
        {
          value: 0,
          label: this.$t('config.no_coord')
        },
        {
          value: 1,
          label: this.$t('config.box')
        },
        {
          value: 2,
          label: this.$t('config.frame')
        }
      ],
      plot3d_legend: [
        {
          value: 0,
          label: this.$t('config.visible')
        },
        {
          value: 1,
          label: this.$t('config.invisible')
        }
      ],
      interp_type: [
        {
          value: 0,
          label: this.$t('config.linear')
        },
        {
          value: 1,
          label: this.$t('config.cubic')
        }
      ]
    }
  },
  watch: {
    formData: {
      handler: function () {
        this.setSmoothingFactorSwitch()
      },
      deep: true
    }
  },
  methods: {
    calSmoothingFactor () {
      // 根据开/关、高/低，自动设置平滑因子
      if (this.switch_on_off === false) {
        this.formData.plot.gaussian_sigma = 0.0
        this.switch_high_low_disabled = true
      } else {
        this.switch_high_low_disabled = false
        if (this.switch_high_low === true) {
          this.formData.plot.gaussian_sigma = 1.1
        } else {
          this.formData.plot.gaussian_sigma = 0.5
        }
      }
    },
    setSmoothingFactorSwitch () {
      // 根据平滑因子，设置 Switch 控件
      if (this.formData.plot.gaussian_sigma <= 0.0) {
        this.switch_on_off = false
        this.switch_high_low_disabled = true
      } else if (this.formData.plot.gaussian_sigma > 0.0 && this.formData.plot.gaussian_sigma < 1.1) {
        this.switch_on_off = true
        this.switch_high_low_disabled = false
        this.switch_high_low = false
      } else {
        this.switch_on_off = true
        this.switch_high_low_disabled = false
        this.switch_high_low = true
      }
    }
  }
}
</script>

<style scoped>
  .colorImg {
    width: 200px;
    height: 35px;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
  }

  .fullWidth {
    width: 150px
  }

  .content-area {
    overflow-y: scroll;
    height: 600px
  }
</style>
