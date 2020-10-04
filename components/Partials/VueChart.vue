<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data() {
    return {
      chartData: {
        labels: ['Done', 'Not Yet'],
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: ['rgba(3, 198, 252,1)', 'rgba(252, 3, 3, 0.5)'],
            data: [20, 80]
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

<style></style>
