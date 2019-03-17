<template>
  <div class="content">
    {{$t('report.hazard')}}
    <ul>
      <li v-if="Haz_Ten.family_history === 0">
        {{$t('Haz_Ten.family_history')}}
      </li>
      <li v-if="Haz_Ten.disease_history === 0">
        {{$t('Haz_Ten.disease_history')}}
      </li>
      <li v-if="Haz_Ten.medication_history === 0">
        {{$t('Haz_Ten.medication_history')}}
      </li>
      <li v-if="Haz_Ten.obese === 0">
        {{$t('Haz_Ten.obese')}}
      </li>
      <li v-if="Haz_Ten.birth_lactation === 0">
        {{$t('Haz_Ten.birth_lactation')}}
      </li>
      <li v-if="Haz_Ten.menstruation === 0">
        {{$t('Haz_Ten.menstruation')}}
      </li>
      <li v-if="Haz_Ten.radiation === 0">
        {{$t('Haz_Ten.radiation')}}
      </li>
      <li v-if="Haz_Ten.eating_habits  === 0">
        {{$t('Haz_Ten.eating_habits')}}
      </li>
      <li v-if="Haz_Ten.living_habits === 0">
        {{$t('Haz_Ten.living_habits')}}
      </li>
      <li v-if="Haz_Ten.exercise_habits === 0">
        {{$t('Haz_Ten.exercise_habits')}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hazard',
  props: {
    Haz_Ten: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 9px
  }
  li {
    margin-left:25px
  }
</style>
