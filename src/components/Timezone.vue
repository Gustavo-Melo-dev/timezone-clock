<template>
  <div id="timezone">
    <select @change="($event) => getZone($event.target.value)" id="selectTimezone" v-model="data.timezoneSelected">
        <option v-for="time in data.times" :key="time" :value="time">{{ time }}</option>
    </select>
    <p class="text-xl bg-green-300 my-5">{{data.timezoneSelected}}</p>
  </div>
</template>

<script>
import { defineComponent, reactive } from "@vue/runtime-core";
import api from '../services/api'

export default defineComponent({
    name: "Timezone",
    setup(){
        const data = reactive({
            times: {},
            timezoneSelected: ''
        })

        api.allTimezone().then((response) => {
            data.times = response.data
        })

        async function getZone(zone){
            const timezone = await api.timezone(zone)
            data.timezoneSelected = timezone.data.datetime
        }

        return {
            data,
            getZone
        }
    }
})
</script>

<style>

</style>