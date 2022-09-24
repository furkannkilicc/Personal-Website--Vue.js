
<template>
      <!-- Site footer -->

    <footer class="grid  ">
        <!-- <div>  -->
          <div class="col lg-col-12 sm-col-2 md-col-6">
            <h6>About</h6>
            <p class="text-justify">Im Furkan Kilic Computer Engineer,i build this website display my projects and ability. </p>
          </div>
          <div class="grid grid-nogutter">
            <h6>Categories</h6>
            <ul class="col-6">
              <li> <router-link to="/">Home</router-link></li>
              <li> <router-link to="/projects">All Projects</router-link></li>
              <li> <router-link to="/publications">Publications</router-link></li>
              <li> <router-link to="/contact">Contacts</router-link></li>
            </ul>
          </div>
          <div  class="grid">
            <h6>Quick Links</h6>
            <ul class="col-5">
                <li> <router-link to="/contact">Contact me</router-link></li>
            </ul>
          </div>
        <!-- </div> -->
        <hr>
      <div class="grid">
          <div class="col">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="https://twitter.com/furkannkilicc">furkankilic</a>.
            </p>
          </div>
        </div>
</footer>
  <!-- </div> -->
</template>
<style scoped>

.grid
{
 
  height: 10%;
  background-color:#26272b;
  padding:9px 2px;
  font-size:15px;
  line-height:2px;
  color:#737373;



}
.grid hr
{
  margin: 0;
  border-top-color:#bbb;
  opacity:0.5
}
.grid hr.small
{
  margin: 0;
}
.grid h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin:0;
  letter-spacing:1px;
  display:inline-grid;
}
.grid a
{
  color:#737373;

}
.grid a:hover
{
  color:#3366cc;
  text-decoration:none;
}


. a:active, a:focus, a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.grid.inline li
{
  display:flex;
  padding: 2px;
}

.grid .col-6 li{
  padding: 11px;
  padding-bottom: 0;
}



</style>