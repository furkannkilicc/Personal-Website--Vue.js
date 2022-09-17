<template>
<div class="div">

  <div v-for="item in myJson">{{item}}</div>
</div>
<div class="grid">
    <div class="col-3" ></div>
    

</div>

<!-- <img src="/logo/i8n.png" alt=""> -->

</template>


<script>
import tm from "./layouts/article.json"
export default {
    data(){
        return{
            myJson:tm
        };
    }
    }


</script>