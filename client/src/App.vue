<template>
  <header class="sticky-top">
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="headcolor p-4 text-light">
    <p class="fs-5 p-2">Auto-Tunes <i class="mdi mdi-copyright"></i></p>
  </footer>
  <CarModalForm></CarModalForm>
  <FilterCarsModal></FilterCarsModal>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import CarModalForm from './components/CarModalForm.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, CarModalForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

.headcolor {
  background-color: #021e38;
}

body {
  background-image: url(https://th.bing.com/th/id/R.78befbb43324c5d5bb7606a62ca782f2?rik=B9q422fsTMhS6Q&pid=ImgRaw&r=0);
  background-position: center;
  background-size: cover;
}
</style>
