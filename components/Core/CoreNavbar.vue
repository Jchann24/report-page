<template>
  <nav
    class="navbar fixed-top navbar-expand-md navbar-light bg-light shadow mb-4"
  >
    <div class="container-fluid">
      <nuxt-link to="/" class="navbar-brand m-0 py-2" tag="a"
        ><img
          src="https://image.psikolif.com/wp-content/uploads/2018/10/Logo-Binus-University-Universitas-Bina-Nusantara-Original-PNG.png"
          alt=""
          srcset=""
          width="100"
          height="56"
      /></nuxt-link>
      <button
        id="togglerNav"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarContent" class="collapse navbar-collapse">
        <ul class="navbar-nav  ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link mr-md-4 p-0 my-2 float-right mr-2"
              href="https://github.com/Jchann24/report-page"
              target="_blank"
              ><img
                src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
                alt="github repo"
                width="40"
            /></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link mr-md-4 p-0 my-2 float-right mr-2"
              href="https://www.linkedin.com/in/nicholas-jason-44b828190/"
              target="_blank"
              ><img
                src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                alt="my linkedin"
                width="40"
            /></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link mr-md-4 p-0 my-2 float-right mr-2"
              href="https://jchann24.github.io/personal-portfolio/"
              target="_blank"
              ><img
                src="https://www.iconfinder.com/data/icons/wireframes-7/100/Profile-512.png"
                alt="my portfolio"
                width="45"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar {
  border-radius: 10px 10px 10px 10px;
  margin: 20px 20px 0px 20px;
}
</style>
