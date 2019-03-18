<template>
  <div class="border-gray bgf check-result">
      <Row :gutter="10" class="head">
        <i-col span="5">
          {{$t('checkresult.num')}}：{{baseInfo.num}}
        </i-col>
        <i-col span="5">
          {{$t('checkresult.check')}}：{{baseInfo.name}}
        </i-col>
        <i-col span="4">
          {{$t('checkresult.sex')}}：{{baseInfo.sex}}
        </i-col>
        <i-col span="5">
          {{$t('checkresult.age')}}：{{baseInfo.age}}
        </i-col>
        <i-col span="5">
          {{$t('checkresult.time')}}：{{baseInfo.checktime}}
        </i-col>
      </Row>
    <Row class="title">
       <i-col class="">
         {{$t('checkresult.title1')}}
       </i-col>
    </Row>
    <div :style="{'height':listheight,'overflow-y':isOverflow}" class="ovh-x">
      <template v-for="(item,index) in resultList">
        <Row class="list-info" :key="index">
          <i-col>
            <span class="numIcon">{{index+1}}</span>
            <i> {{item}} </i>
          </i-col>
        </Row>
      </template>
    </div>
    <i-button class="lightblue-btn" @click="toggleheight" v-if="showbtn">
      <b>&or;</b>{{$t('checkresult.showall')}}
    </i-button>
    <Row class="title">
      <i-col>
        {{$t('checkresult.title2')}}
      </i-col>
    </Row>
    <Row>
       <i-col class="m-t-25 btn-group">
         <i-button type="primary" ghost>{{$t('checkresult.btn_tip1')}}</i-button>
         <i-button type="primary" ghost class="m-l-10">{{$t('checkresult.btn_tip2')}}</i-button>
         <i-button type="primary" ghost class="m-l-10">{{$t('checkresult.btn_tip3')}}</i-button>
       </i-col>
    </Row>
    <Row>
      <i-col>
        <textarea v-model="textarea" :placeholder="$t('checkresult.textarea')">
        </textarea>
      </i-col>
    </Row>
    <Row class="no-bg p-t-20 p-b-20 fixed-bottom">
      <i-col  type="flex" justify="center" align="middle">
        <i-button type="primary" class="">{{$t('btnBar.btn_save')}}</i-button>
        <i-button class="m-l-50 lightblue-btn">{{$t('btnBar.btn_saveshow')}}</i-button>
        <i-button class="m-l-50 grayblue-btn">{{$t('btnBar.btn_saveprint')}}</i-button>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'Checkresult',
  data () {
    return {
      listheight: '90px',
      isOverflow: 'hidden',
      ishide: true,
      showbtn: true,
      baseInfo: {
        num: '108967767',
        name: '王红丽',
        sex: '性别',
        age: '年龄',
        checktime: '2019-09-09'
      },
      textarea: '',
      resultList: [
        '病灶描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        '病灶描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        '病灶描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        '病灶描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        '病灶描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        '病灶描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        '病灶描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        '病灶描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      ]
    }
  },
  methods: {
    toggleheight () {
      this.ishide = !this.ishide
      if (this.ishide) {
        this.listheight = '90px'
      } else {
        this.listheight = '170px'
        this.isOverflow = ''
        this.showbtn = false
      }
    }
  },
  mounted () {

  }
}
</script>

