import Vue from 'vue';
import VueAxios from './plugins/axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
{
  /* <script type="text/javascript" src="./src/apiKeys.js"></script>; */
}
import { keys } from './apiKeys';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: keys.FIREBASE_apiKey,
  authDomain: keys.FIREBASE_authDomain,
  projectId: keys.FIREBASE_projectId,
  storageBucket: keys.FIREBASE_storageBucket,
  messagingSenderId: keys.FIREBASE_messagingSenderId,
  appId: keys.FIREBASE_appId
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
  render: h => h(App)
}).$mount('#app');
