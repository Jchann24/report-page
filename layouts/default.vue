<template>
  <div>
    <CoreNavbar />
    <CoreNavigation />
    <hr style="max-width: 50%; margin: 2em auto 2em auto;" />
    <div id="content">
      <nuxt />
    </div>
    <!-- <CoreFooter /> -->
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>
<style></style>
