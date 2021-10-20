import Vue from 'vue';
import VueRouter from 'vue-router';
import Calculator from '../components/Calculator.vue';
import BaseToBase from '../components/BaseToBase.vue';
import Weather from '../components/Weather.vue';
import ToDo from '../components/ToDo.vue';
import About from '../components/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    components: {
      mainView: Calculator
    },
    props: { tabColor: 'green' }
  },
  {
    path: '/calculator',
    components: {
      mainView: Calculator
    },
    props: { tabColor: 'green' }
  },
  {
    path: '/base-to-base',
    components: {
      mainView: BaseToBase
    },
    props: { tabColor: 'blue' }
  },
  {
    path: '/weather',
    components: {
      mainView: Weather
    },
    props: { tabColor: 'green' }
  },
  {
    path: '/todo',
    components: {
      mainView: ToDo
    },
    props: { tabColor: 'gray' }
  },
  {
    path: '/about',
    components: {
      mainView: About
    },
    props: { tabColor: 'gray' }
  }
];

const router = new VueRouter({
  routes
});

export default router;
