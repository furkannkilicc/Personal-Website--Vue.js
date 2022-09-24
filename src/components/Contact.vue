<template>

            <!-- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" /> -->
          

<div>
    <base-card>
<h1> CONTACT ME</h1>
<span class="p-float-label">
	<InputText id="username" type="text" v-model="value.name" />
	<label for="username">Name Surname</label>
</span>

<span class="p-float-label">
	<InputText id="mail" type="email" v-model="value.mail" />
	<label for="mail">Mail</label>
</span>
<Textarea class="mt-5" v-model="value.info"  :autoResize="true" rows="5" cols="45" placeholder="Please type how can i help you!"/>
<br/>
<Button  type="submit" label="Done"  v-if="!value.info.lenght" class="p-button-success " @click="handleClick($event)" />
 <!-- textarea boşsa hata döndür|| 'vuelidate' -->


</base-card>






</div>
</template>
<script>
import BaseCard from './ui/BaseCard.vue'

export default{
    components: BaseCard,
    data(){
        return{
            value:{
                name:'',
                mail:'',
                info:''
            },
        };
    }

}
</script>  
    

    
<style scoped>
/* div{
    background-color: var(--blue-200);
} */
.p-button-success {
    margin-left: 19rem;
    margin-top:2px;
}
.p-float-label{
    margin-top: 1rem;
    margin-left: 1rem;
}
textarea{
    margin-top: 1rem;
    margin-left: 1rem;
}
.contact{
    width: auto;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    border: 1px solid black;
}
h1{
    margin: 0;
    font-family: "Raleway";
    font-weight: 500;
}
div{
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 10em;
}

</style>
