<template>
  <div class="container">
    <div class="header">
    <img src="../images/tv2.jpg" alt="tv image for testing" />
    </div>
    <div class="text">
      <h3 class="text-cyan-900">Hello World!</h3>
      <h1 class="text-purple-900">Furkan Kılıç</h1>
      <h2 class="text-purple-800">Computer Engineering Student.</h2>
      <h5 style="margin: 2px">'This is My Personal Website'</h5>
      <p>
        Hi, my name is Furkan I am Computer Engineering Student(4th degree).
      </p>
      <p>
        I build for this website for practising and make progress ☺ any
        suggestion acceptable <br />
        Cheers!
      </p>
    </div>
    
  <div>
    <p class="position:absolute overflow-hidden " style="clear:left width:65% margin:10px float:right">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
      adipisci atque aperiam. Nemo dolorem facilis perferendis iste adipisci
      tempore. Fuga illum voluptate fugit natus. Fugiat saepe dolores aspernatur
      velit dolore?
    </p>
  </div>

</div>
  
  
</template>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap");
.text p {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

h1,
h2 {
  margin: 0;
}
.text {

  /* vertical-align: top; */
  position: absolute;
  top: 0px;
  left: 10px;
  width: 20%;
  height: 100%;
  overflow: none;
}

img {
  /* position: absolute;  bu da çalısıyor  ama float daha mantıkı*/
  border-radius: 1rem;
  width: 35%;
  height: 25%;
  top: 0;
  opacity: 0.22;
}
.container {
    /* margin: 2em,8em;
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 10%; */
}
header{
 float: left;
  width: 25%;
  padding: 1%;

}

</style>
