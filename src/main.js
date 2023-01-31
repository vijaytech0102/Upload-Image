import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "./router";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg7HhC0iip0jmx9idHT3drW58Ot4B0sNs",
  authDomain: "loginp-eef2d.firebaseapp.com",
  projectId: "loginp-eef2d",
  storageBucket: "loginp-eef2d.appspot.com",
  messagingSenderId: "490452358411",
  appId: "1:490452358411:web:34cd2a728bb091ddc2be0e",
  measurementId: "G-3DQW3E0HZN"
};
// Initialize Firebase


const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
export{db}
const storage = getStorage(app);
export { storage };

createApp(App).use(router).mount("#app");