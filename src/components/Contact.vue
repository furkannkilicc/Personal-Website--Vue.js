<template>
  <!-- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" /> -->
  <div>
    <h1>CONTACT ME</h1>
    <form @submit.prevent="onSubmit">
      <span class="p-float-label">
        <InputText id="username" type="text" v-model.trim="name" />
        <label for="username">Name Surname</label>
      </span>

      <span class="p-float-label">
        <InputText id="mail" type="email" v-model.trim="mail" />
        <label for="mail">Mail</label>
      </span>
      <Textarea
        class="mt-5"
        v-model.trim="info"
        :autoResize="true"
        rows="5"
        cols="45"
        placeholder="Please type how can i help you!"
      />
      <br />
      <Button type="submit" label="Done" />
      <!-- v-if="!value.info.lenght"
          class="p-button-success" @click="handleClick($event)" -->
        
    </form>
    <!-- textarea boşsa hata döndür|| 'vuelidate' -->
        
  </div>
   <div v-if="done">
          <Message severity="success" >Mesajınız Başarı ile Gönderilmiştir!</Message>
        </div>
</template>


<script>
import BaseCard from "./ui/BaseCard.vue";
import { db } from "@/firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default {
  components: BaseCard,

  data() {
    return {
      name: null,
      mail: null,
      info: null,
      done: false
    };
  },
  methods: {
    async onSubmit() {
 await addDoc(collection(db, 'contact'), {
  name: this.name,
  mail: this.mail,
  info: this.info
}).then(()=>{
  return this.name='',this.mail='',this.info='',this.done = true});
     
    
    },
    
  },
  //
  // this.value.name='',
  //  this.value.mail='',
  //  this.value.info=''
  // **********AXIOS DB*****************
  //   onSubmit(){
  //       axios.post('https://contactdb-7d318-default-rtdb.firebaseio.com/axios.json', {
  //       name:this.value.name,
  //       mail:this.value.mail,
  //       info:this.value.info});

  //       this.value.name='',
  //        this.value.mail='',
  //        this.value.info=''

  // onsubmit(){ async ()=>{

  //   const querySnapshot = await getDocs(collection(db, "contact"))
  //   let bilgiler =[]
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data())
  //   const bilgi = {
  //     id: doc.id,
  //     name: doc.name,
  //     mail: doc.data().mail,
  //     info:doc.data().info

  //   }
  //   bilgiler.push(bilgi)
  // })
  //   }

  // }

  //  if(this.email !=="" && this.name !==""&& this.info!=""){
  //     names=this.value.namex,
  //     mail=this.value.mail,
  //     info=this.value.info

  // db.collection('contact').doc().set({
  //     name=this.value.name,
  //     mail=this.value.mail,
  //     info=this.value.info
  //   });

  //     },

  //  return;
};
</script>  
    



    
<style scoped>
/* div{
    background-color: var(--blue-200);
} */
.p-button-success {
  margin-left: 19rem;
  margin-top: 2px;
}
.p-float-label {
  margin-top: 1rem;
  margin-left: 1rem;
}
textarea {
  margin-top: 1rem;
  margin-left: 1rem;
}
.contact {
  width: auto;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  border: 1px solid black;
}
h1 {
  margin: 0;
  font-family: "Raleway";
  font-weight: 500;
}
div {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 10em;
}
</style>
