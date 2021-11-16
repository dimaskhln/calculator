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
      mainView: About
    }
  },
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
  },
  {
    path: '/todo',
    components: {
      mainView: ToDo
    }
  },
  {
    path: '/about',
    components: {
      mainView: About
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
