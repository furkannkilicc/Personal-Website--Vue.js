<template>
  <div class="heading mt-0">
    <h1>SKILLS</h1>
    <h4>HERE IS MY SKILLS</h4>
  </div>
  <div v-for="(skills, index) in skillData" :key="index" :image="tech.image"></div>
  <!--
<div class="col" v-for="(skill, index) in skills" :key="index">
    <div class="row">

                        <div name="bounce">
                            <img id="imgLogo" class="img-responsive mx-auto d-block" :src="skill.metadata.logo.url" :alt="skill.metadata.title"/>
                            <div id="divAlt" class="altCaption text-center">{{skill.metadata.title}}</div> 
                        </div>
                    </div>
    </div> 
     <div v-for="(skill, index) in skills" :key="index"> *** FOR LOOP LOCALDEN CEKME -->
  <!-- <img :src="getImgUrl(skill)" loading="lazy" /> -->
  <!-- IMG LOADING LAZY***  -->

  <!-- <p>     <div class="col-12 md:col-6 lg:col-3" ><img src="logo\cplusplus.png" width="24%" height="22%" alt="blabla"/></div>
    <div class="col-2" ><img src="logo\javascript.png"   width="24%" height="22%" alt="blabla"/></div>
    <div class="col-2" ><img src="logo\java.png"  width="24%" height="22%" alt="blabla"/></div>
    <div class="col-2" ><img src="logo\wordpress.png" width="24%" height="22%"  alt="blabla"/></div>
    <div class="col-2" ><img src="logo\linux.png"  width="24%" height="22%" alt="blabla"/></div>
    <div class="col-2" ><img src="logo\Python.png" width="24%" height="22%"  alt="blabla"/></div>
    <div class="col-2" ><img src="logo\vuejs.png" width="24%" height="22%"  alt="blabla"/></div>
    <div class="col-2" ><img src="logo\html.png" width="24%" height="22%"  alt="blabla"/></div>
    <div class="col-2" ><img src="logo\css.png" width="24%" height="22%"  alt="blabla"/></div>
    <div class="col-2" ><img src="logo\vuex.png" width="24%" height="22%"  alt="blabla"/></div>
    <div class="col-2" ><img src="logo\i8n.png" width="24%" height="22%"  alt="blabla"/></div>
    <div class="col-2" ><img src="logo\firebase.png" width="24%" height="22%"   alt="blabla"/></div>
    <div class="col-2" ><img src="logo\primevue.png" width="24%" height="22%"   alt="blabla"/></div> </p> -->
</template>
<script>
import Skills from "../SkillDev.json";
export default {
  name: "Skills",

  data() {
    return {
      skillData: Skills,
    };
  },
  methods: {
    //  getImgUrl(img) {
    //     return './public/logo'+img }
  },
};
</script>