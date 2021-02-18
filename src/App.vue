<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>
      <router-link to="/calculator">/calculator</router-link>
      <router-link to="/base-to-base"><v-btn>BASE TO BASE</v-btn></router-link>
      <router-link to="/polinom"><v-btn>POLINOM</v-btn></router-link>
      <v-btn>CALCULATOR</v-btn>
      <v-spacer></v-spacer>
      <v-btn>CALCULATOR</v-btn>
    </v-app-bar>

    <v-main>
      <router-view name="mainView"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Calculator from './components/Calculator';

export default {
  name: 'App',

  routes: [
    {
      path: '/calculator',
      components: {
        mainView: Calculator
      }
    }
  ],

  data: () => ({
    //
  })
};
</script>
