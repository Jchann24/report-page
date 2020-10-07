<template>
  <div class="mt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nuxt-content :document="page" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Month',
  async asyncData({ $content, params }) {
    const page = await $content(`month-${params.name}`).fetch()

    return {
      page
    }
  }
}
</script>

<style></style>
