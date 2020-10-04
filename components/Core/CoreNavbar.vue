<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light shadow mb-4">
    <div class="container-fluid">
      <a class="navbar-brand m-0 py-2"
        ><img
          src="https://socs.binus.ac.id/files/2013/02/Logo-SoCS-Black-Blue.png"
          alt=""
          srcset=""
          width="100"
          height="56"
      /></a>
      <button
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
            <a class="nav-link mr-md-4 p-0" aria-current="page" href="#"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link mr-md-4 p-0" href="#">Link</a>
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

<style></style>
