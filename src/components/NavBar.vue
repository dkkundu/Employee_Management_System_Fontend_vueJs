<template>
<nav class="navbar navbar-light bg navbar-expand-lg">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand"> DK Kundu </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">
           <i class="fa fa-home fa-1x"> Home</i>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Staff
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/add-employee" class="dropdown-item">Add</router-link></li>
            <li><router-link to="/employee-list" class="dropdown-item">List</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>