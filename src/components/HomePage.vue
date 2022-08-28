<template>
<section>
    <div class="container">

<div class="photo">
</div>
<img  src="../images/tv2.jpg"/>
<div class="text">

<h3>Hello World!</h3>
<h1>Furkan Kılıç </h1>
<h2>Computer Engineering Student.</h2>
<h5 style="margin:2px">'This is My Personal Website'  </h5>
<p>Hi, my name is Furkan I am  Computer Engineering Student(4th degree).</p> 
<p> I build for this website for practising and make progress ☺ 
any suggestion acceptable <br/> Cheers!</p>
</div>

    </div>
</section>


</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
  p{
      font-family: 'Oswald', sans-serif;
      font-size: 20px;
      font-weight:normal;
      margin: 0 ;


}


  h1, h2{
  margin: 0;

  
}
.text{
    vertical-align: top;
    display:absolute;
    top: 120px;
  right: 10px;
  width: 300px;
  height: 200px;

}
.photo{
    text-align: center;
    display: absolute;
}

img{
    display: inline-block;
    border-radius: 1rem;
    width: 20%;
    height: auto;
}
.container{
    display: relative;
    height: 100px;
    width: 100%;
    
}

</style>
