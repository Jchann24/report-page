<template>
  <div
    class="bg-light py-4 mx-4 rounded-lg shadow-lg"
    style="border-left: 6px solid #474d6e;"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>3+1 Reports, Second Term</h1>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row align-items-center">
        <div class="col-4 col-md-6">
          <div class="btn-group">
            <button
              id="btnNav"
              type="button"
              class="btn btn-outline-secondary font-weight-bolder dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Navigation
            </button>
            <ul id="ddMenu" :class="`dropdown-menu mt-3 shadow-lg rounded-lg`">
              <nav>
                <li>
                  <nuxt-link to="/" class="dropdown-item" tag="a"
                    >Home</nuxt-link
                  >
                </li>
                <li v-for="(month, index) in months" :key="index">
                  <nuxt-link
                    :to="`/month/${index + 1}`"
                    class="dropdown-item"
                    tag="a"
                    >Month -
                    <span class="text-uppercase"
                      >{{ month }} ({{ index + 1 }})</span
                    ></nuxt-link
                  >
                </li>
              </nav>
            </ul>
          </div>
        </div>
        <div class="col-8 col-md-6 text-right">
          <PartialClock />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoreNavigation',
  data() {
    return {
      months: ['sep', 'oct', 'nov', 'dec', 'jan', 'feb']
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  display: block;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.45s;
}

.dropdown-menu.show {
  opacity: 1;
  pointer-events: auto;
}

.nuxt-link-exact-active {
  background-color: rgba(194, 194, 194, 0.551);
}

.dropdown-item:focus {
  background-color: rgba(194, 194, 194, 0.551);
  color: black;
}
</style>
