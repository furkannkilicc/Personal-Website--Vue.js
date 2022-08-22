<template>
  <header>
    <nav>
      <router-link to="/"  >
      <h1 ><i class="pi pi-desktop " style="font-size: 2rem"></i>  Furkan Kılıç</h1>   
      </router-link>
    <ul>
      <li>
        <router-link to="/">Home Page</router-link>
      </li>
        <li>
          <router-link to="/projects">All Projects</router-link>
        </li>
        <li>
          <router-link to="/publications"> Publications</router-link>
        </li>
        <li>
          <Button label="Help" class="p-button-raised p-button-rounded" @click="contact">Contact</Button>
        </li>
    </ul>
    </nav>
  </header>
</template>
<script>
export default {
methods:{
  contact(){
    this.$router.push('/contact');
  }
}  
}


</script>
<style scoped>


header {
  width: 100%;
  height: 4rem;
  background-color: var(--cyan-800);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-left: 0;

}

header a {
  text-decoration: none;
  color: var(--cyan-400);
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 2rem;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid var(--cyan-50);
}

h1 {
  margin: 0;
  color: var(--blue-100);
}

h1:hover {
  color: white;
  margin: 0;
}


h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>