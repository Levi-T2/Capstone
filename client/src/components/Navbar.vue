<template>
  <nav class="navbar navbar-expand-lg navbar-dark headcolor px-3 nav-border">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column">
        <p class="fs-1 fw-bold m-0"><em><i class="mdi mdi-tire logo mx-1 mdi-spin"></i>Auto-Tunes</em></p>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'TopCars' }" class="btn text-light selectable text-uppercase">
            <em>Top Cars</em>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'TopMods' }" class="btn text-light selectable text-uppercase">
            <em>Top Mods</em>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'Comparison' }" class="btn text-light selectable text-uppercase">
            <em>Comparison</em>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-light selectable text-uppercase">
            <em>About us</em>
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.headcolor {
  background-color: #021e38;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.logo {
  color: #277cf1;
}

.mdi-spin {
  -webkit-animation: mdi-spin 2s infinite linear;
  animation: mdi-spin 2s infinite linear;
}

.nav-border {
  border-bottom: 2px solid #277cf1;
}

.btn {
  transition: ease-in-out 0.2s;
}

.btn:hover,
.btn:focus {

  box-shadow: 0 0.5em 0.5em -0.4em var(--bs-success);
  transform: translateY(-0.25em);
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
