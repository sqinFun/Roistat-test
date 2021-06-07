<template>
  <div id="app">
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>

import '@/assets/sass/index.sass'
import 'normalize.css'

export default {
  name: "App",
}
</script>

<style lang="sass" scoped>
.page
  min-height: 100vh
  display: grid

</style>