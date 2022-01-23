<template>
  <div id="home">
    <Timezone />
    <InfoTable />
  </div>
</template>

<script>
import Timezone from '../components/Timezone.vue';
import InfoTable from '../components/InfoTable.vue';

export default {
  name: 'Home',
  components: {
    Timezone,
    InfoTable
  }
}
</script>

<style scoped>
</style>