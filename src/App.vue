<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>
      <router-link to="/calculator"><v-btn>CALCULATOR</v-btn></router-link>
      <router-link to="/base-to-base"><v-btn>BASE TO BASE</v-btn></router-link>
      <router-link to="/polinom"><v-btn>POLINOM</v-btn></router-link>
      <router-link to="/distribution"><v-btn>DISTRIBUTION</v-btn></router-link>

      <v-spacer></v-spacer>
      <v-btn>CALCULATOR</v-btn>
    </v-app-bar>

    <v-main> <router-view name="mainView"></router-view> </v-main><Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Footer
  },
  data: () => ({
    //
  })
};
</script>
