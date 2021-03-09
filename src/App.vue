<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>
      <router-link to="/calculator"><v-btn>CALCULATOR</v-btn></router-link>
      <router-link to="/base-to-base"><v-btn>BASE TO BASE</v-btn></router-link>
      <router-link to="/weather"><v-btn>WEATHER</v-btn></router-link>

      <v-spacer></v-spacer>
      <v-btn>CALCULATOR</v-btn>
    </v-app-bar> -->
    <TabNavigator />
    <v-main> <router-view name="mainView"></router-view> </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss">
@import './assets/style.scss';
</style>

<script>
import Footer from './components/Footer.vue';
import TabNavigator from './components/TabNavigator';
export default {
  name: 'App',
  components: {
    Footer,
    TabNavigator
  },
  data: () => ({
    //
  })
};
</script>
