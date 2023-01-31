<template>

<div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div class="col mt-3">
                  <CloudImage class="container" path="folder/myfile.gif"/>
                </div>
                <div class="col mt-3">
                  <CloudImage class="container" path="folder/myfile.gif"/>
                </div>
                <div class="col mt-3">
                  <CloudImage class="container" path="folder/myfile.gif"/>
                </div>
                <div class="col mt-3">
                  <CloudImage class="container" path="folder/myfile.gif"/>
                </div>
                <div class="col mt-3">
                  <CloudImage class="container" path="folder/myfile.gif"/>
                </div>
                <div class="col mt-3">
                  <CloudImage class="container" path="folder/myfile.gif"/>
                </div>
                <div class="col mt-3">
                  <CloudImage class="container" path="folder/myfile.gif"/>
                </div>
                <div class="col mt-3">
                  <CloudImage class="container" path="folder/myfile.gif"/>
                </div>
                <div class="col mt-3">
                  <CloudImage class="container" path="folder/myfile.gif"/>
                </div>
            </div>
          </div>
  <input class="btn btn-primary" type="file" ref="myfile">
  <button class="btn btn-primary my-4" @click="upload">upload</button>
  
</template>
<script >
import  { storage } from "@/main"
import  { ref,uploadBytes } from "firebase/storage"
import  CloudImage  from '@/components/CloudImage.vue'
import { useRouter } from "vue-router";
const router= useRouter();
export default {
  name: 'App',
  components: {
    CloudImage
  },
  methods:{
    upload: function() {
      const storageRef = ref(storage, 'folder/myfile.gif');
      uploadBytes(storageRef,this.$refs.myfile.files[0]).then((snapshot)=> {
        router.push("/dashboard");
      })
    }
  }
}
</script>
