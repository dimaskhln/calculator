import Vue from 'vue';
import VueAxios from './plugins/axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebasenpm audit';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCBIS1IiSZpOnMbkKSJa5DRcbGZfPvnOAY',
  authDomain: 'dimascv-a2ec5.firebaseapp.com',
  projectId: 'dimascv-a2ec5',
  storageBucket: 'dimascv-a2ec5.appspot.com',
  messagingSenderId: '806115655773',
  appId: '1:806115655773:web:33f8b9c9bb52ab85f44db4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false;

Vue.use(VueAxios);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
