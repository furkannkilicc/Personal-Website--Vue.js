<template>
  <div class="container" >

    <div class="wrap">
      <h2 class="text-cyan-900 ">Hello World!</h2>
      <h1 class="text-purple-900">Furkan Kılıç</h1>
      <h2 class="text-purple-800">Computer Engineering Student.</h2>
      <h5 style="margin: 2px">'This is My Personal Website'</h5>
      <p style="font-weight:600;">
        Hi, my name is Furkan I am Computer Engineering Student(4th degree).
      </p>
      <p style="font-weight:600;">
        I build for this website for practising and make progress ☺ any
        suggestion acceptable <br />
        Cheers!
      </p>
    </div>
    <div>


      <br/>

    </div>

  </div>
</template>

<script>
export default {

  
  
}



</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap");
*{
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
  /* background-size: cover; Will be fix LATER  */

}
.wrap{
  background-image: url('C:\Users\Furkan\Desktop\projectX\new-web\src\images\pexels.jpg');

  /* Set a specific height */
  height: 600px;

  /* Create the parallax scrolling effect */
  background-attachment:fixed;
  background-position: center -62% ;
  background-repeat: no-repeat;
  background-size: 100vw 1000px;

font-size:19px;
  text-align:center;
}
.container{
  width: 100%;
  height: 100%;

}





</style>
