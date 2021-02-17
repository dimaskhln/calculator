<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>
      <span>MEGACALCULATOR</span>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Calculator />
    </v-main>
  </v-app>
</template>

<script>
import Calculator from './components/Calculator';

export default {
  name: 'App',

  components: {
    Calculator
  },

  data: () => ({
    //
  })
};
</script>
