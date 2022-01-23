<template>
  <div class="info-table flex justify-center my-5">
    <div class="my-5">
        <table class="table-auto my-5">
            <thead>
                <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                </tr>
                <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                </tr>
                <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "Info Table",
    setup(){

    }
})
</script>

<style>

</style>