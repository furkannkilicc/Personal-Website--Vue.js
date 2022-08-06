
<template>
<the-header></the-header>
  <router-view/>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import HomePage from './components/HomePage.vue'

export default {
  components: {
   'TheHeader': TheHeader,
   'HomePage':HomePage,
    // HelloWorld
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}



body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>