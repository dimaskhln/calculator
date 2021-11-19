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
  i18n,
  render: h => h(App)
}).$mount('#app');
