<template>
  <v-card class="mx-3 mt-3">
    <v-tabs background-color="teal darken-4" dark center-active>
      <v-tab to="/calculator">Калькулятор</v-tab>
      <v-tab to="/base-to-base">Системы счисления</v-tab>
      <v-tab to="/weather">Погода</v-tab>
      <v-tab to="/todo">Список дел</v-tab>
      <v-spacer></v-spacer>
      <v-tab to="/about">Обо мне</v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {};
</script>
