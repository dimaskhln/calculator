<template>
  <v-app>
    <TabNavigator tabColor="tabColor" />
    <v-main> <router-view name="mainView"></router-view> </v-main>
    <!--<Footer :col="'col'" />-->
  </v-app>
</template>

<style lang="scss">
@import './assets/style.scss';
</style>

<script>
//import Footer from './components/Footer.vue';
import TabNavigator from './components/TabNavigator';
export default {
  name: 'App',
  components: {
    //Footer,
    TabNavigator
  },
  data: () => ({
    //
  }),
  props: ['tabColor']
};
</script>
