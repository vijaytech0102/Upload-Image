<template>
  <div>
    <div class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Image Upload</a>
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/dashboard">Upload</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <button class="btn btn-outline-danger" @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
        </li>
      </ul>
    </div>
    <div class="container py-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
  import{onMounted,ref} from "vue";
  import{getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { useRouter } from "vue-router";
  const router= useRouter();
  const isLoggedIn= ref(false);

  let auth;
  onMounted(()=>{
    auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      if(user){
        isLoggedIn.value= true;
      }
        else{
          isLoggedIn.value= false;
        } 
    });
  });
  const handleSignOut= ()=>
  {
    signOut(auth).then(()=>{
      router.push("/");
    });
  };

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>