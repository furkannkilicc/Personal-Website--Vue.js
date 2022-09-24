<template>
  <div class="grid grid-nogutter">
    <div
      class="col sm:col-2 xl:col-12"
      v-for="(item, key) in myJson"
      :key="key"
    >
      {{ item }}
    </div>
  </div>

  <!-- <img src="/logo/i8n.png" alt=""> -->
</template>


<script>
import tm from "./layouts/article.json";
export default {
  data() {
    return {
      myJson: tm,
    };
  },
};
</script>