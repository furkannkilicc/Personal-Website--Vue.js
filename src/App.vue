
<template>
<div class=" grid-nogutter container" >
  <div class="col-12 md:col-6 lg:col-12 sm-col-2">


<!-- <div style="overflow: auto height:%100 width:%100">  -->
  <!-- SCROLL İÇİN DENEME SAYFA DOLDUĞUNDA TEST EDİLECEK -->
  <the-header></the-header>
  <router-view />
  

  <the-footer class="footer"></the-footer>
<!-- </div> -->
  
  </div>

</div>

</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
// import HomePage from './components/HomePage.vue'
import TheFooter from'./components/layouts/TheFooter.vue'
// import Skills from './pages/skills.vue'


export default {
  components: {
   'TheHeader': TheHeader,
  //  'HomePage':HomePage,
   'TheFooter':TheFooter,
    // 'Skills':Skills,
    // HelloWorld

  }
}
</script>

<style>
html
{
  overflow: auto;
  width: 100%;
  height: 100%;
  /* display: flex; */
  
}
* {
  box-sizing: border-box;
 
}
.container{
  background-image: url(images/tv.jpg);
   min-height: 100vh;
   width: 100%;
    height: 100%;
  background-attachment: relative;
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  background-size: cover;


}


body {
  margin: 0;
  height: 100%;
  
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
footer{
  right: 0;
  left: 0;
width: 100%;
bottom: 0;
position: fixed;

}

</style>