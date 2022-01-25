<template>
  <div id="timezone">
    <select @change="($event) => getInfo($event.target.value)" id="selectTimezone" v-model="data.timezoneSelected">
        <option v-for="time in data.times" :key="time" :value="time">{{ time }}</option>
    </select>
    <div class="info-table">
        <InfoTable :timezoneSelected="data.timezoneSelected" :date="data.date" :time="data.time" :utc_offset="data.utc_offset"/>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "@vue/runtime-core";
import api from '../services/api'
import InfoTable from './InfoTable.vue'

export default defineComponent({
    name: "Timezone",
    components: {
        InfoTable
    },
    setup(){
        const data = reactive({
            times: {},
            timezoneSelected: '',
            date: '',
            time: '',
            utc_offset: ''
        })

        api.allTimezone().then((response) => {
            data.times = response.data
        })

        console.log(data.timezoneSelected)

        async function getInfo(zone) {
            const timezone = await api.timezone(zone)
            data.timezoneSelected = timezone.data.timezone
            var moment = require('moment-timezone');
            data.date = moment().tz(timezone.data.timezone).format('DD/MM/YYYY')
            data.time = moment().tz(timezone.data.timezone).format('HH:mm')
            data.utc_offset = timezone.data.utc_offset
        }

                
        return {
            data,
            getInfo
        }
    }
})
</script>

<style>

</style>