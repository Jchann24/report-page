<template>
  <p class="m-0">{{ currentTime }}</p>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      currentTime: ''
    }
  },
  mounted() {
    this.clock()
  },
  methods: {
    clock() {
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      const date = new Date()
      const fullDate = `${days[date.getDay()]}, ${date.getDate()} - ${
        months[date.getMonth()]
      } - ${date.getFullYear()}`
      const hour = this.updateTime(date.getHours())
      const min = this.updateTime(date.getMinutes())
      const sec = this.updateTime(date.getSeconds())
      this.currentTime = `${fullDate} / ${hour}:${min}:${sec}`
      setTimeout(() => this.clock(), 500)
    },

    updateTime(x) {
      return x < 10 ? `0${x}` : x
    }
  }
}
</script>
