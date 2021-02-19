import Vue from 'vue';
import VueRouter from 'vue-router';
import Calculator from '../components/Calculator.vue';
import BaseToBase from '../components/BaseToBase.vue';
import Weather from '../components/Weather.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/calculator',
    components: {
      mainView: Calculator
    }
  },
  {
    path: '/base-to-base',
    components: {
      mainView: BaseToBase
    }
  },
  {
    path: '/weather',
    components: {
      mainView: Weather
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
