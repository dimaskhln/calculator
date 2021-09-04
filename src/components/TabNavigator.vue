<template>
  <v-card class="mx-3 mt-3">
    <v-tabs :background-color="tabColor" center-active dark>
      <v-tab to="/calculator">Калькулятор</v-tab>
      <v-tab to="/base-to-base">Системы счисления</v-tab>
      <v-tab to="/weather">Погода</v-tab>
      <v-tab to="/todo">Список дел</v-tab>
      <v-spacer></v-spacer>
      <v-tab>Обо мне</v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  props: ['tabColor']
};
</script>
