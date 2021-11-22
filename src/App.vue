<template>
  <v-app>
    <TabNavigator />
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
import i18n from '@/plugins/i18n';
export default {
  name: 'App',
  components: {
    //Footer,
    TabNavigator
  },
  data() {
    return {};
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>
