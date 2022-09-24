
<template>
  <section>
    <div class="heading mt-0 text-center">
      <h1>SKILLS</h1>
      <h4>HERE IS MY SKILLS</h4>
    </div>
    <hr />
    <div class="grid grid-nogutter">
      <div v-for="(i, index) in skillData.tech" :key="index">
        <div class="col-12 text-3xl">
          <i :class="i.image"></i>
        </div>
        <div class="font-semibold">
          {{ i.title }}
        </div>
      </div>
    </div>
  </section>
</template>
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

 
<script>
import Skills from "../store/SkillDev.json";
export default {
  name: "MySkills",
  // components:{

  //   Skills: "Skills"

  // },

  data() {
    return {
      skillData: Skills,
    };
  },
  // methods: {
  //  getImgUrl(img) {
  //     return './public/logo'+img }
  // },
};
</script>

<style scoped>
hr {
  justify-content: center;
  display: flex;
  margin: 0;
  border-bottom-color: #bbb;
  opacity: 0.6;
  width: 50vw;
}
</style>
