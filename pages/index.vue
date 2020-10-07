<template>
  <div>
    <div class="hide"></div>
    <div class="mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1>Overview</h1>
          </div>
        </div>
      </div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-12 text-center col-md-6 mx-auto my-2 my-md-0">
            <h2>User Requirements</h2>
            <ChartDonut :chart-data="urData" :options="urOption" />
          </div>
          <div class="col-12 text-center col-md-6 mx-auto my-2 my-md-0">
            <h2>User Requirements</h2>
            <ChartDonut :chart-data="urData" :options="urOption" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from '@/data/chartData.json'

export default {
  name: 'Index',
  data() {
    return {
      urData: jsonData.userRequirements.chartData,
      urOption: jsonData.userRequirements.options
    }
  }
}
</script>

<style>
.hide {
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #f8f8f8;
}
</style>
