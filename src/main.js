import Vue from 'vue';
import router from './router';
import App from './App.vue';
import VueAxios from './plugins/axios';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASEapiKey,
  authDomain: process.env.VUE_APP_FIREBASEauthDomain,
  projectId: process.env.VUE_APP_FIREBASEprojectId,
  storageBucket: process.env.VUE_APP_FIREBASEstorageBucket,
  messagingSenderId: process.env.VUE_APP_FIREBASEmessagingSenderId,
  appId: process.env.VUE_APP_FIREBASEappId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false;

Vue.use(VueAxios);

// Vue.prototype.$weatherLoaded = false;
// Object.defineProperty(Vue.prototype, 'weatherLoaded', { value: false });

Vue.prototype.$weatherLoaded = { value: false };
Vue.prototype.$pageLoaded = { value: false };

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
