<template>
  <v-card class="mx-3 mt-3">
    <v-tabs background-color="teal darken-4" dark center-active :key="$i18n.locale">
      <v-tab to="/calculator">{{ $t('HEAD_calculator') }}</v-tab>
      <!-- <v-tab to="/base-to-base">Системы счисления</v-tab> -->
      <v-tab to="/weather">{{ $t('HEAD_weather') }}</v-tab>
      <v-tab to="/todo">{{ $t('HEAD_todo') }}</v-tab>
      <v-spacer></v-spacer>
      <v-btn icon class="my-auto" v-on:click="changeLocale($i18n.locale)"
        ><img width="20" :src="'/images/flags/' + ($i18n.locale == 'en' ? 'ru' : 'en') + '.svg'"
      /></v-btn>
      <v-tab to="/about">{{ $t('HEAD_about') }}</v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
let localStorage = window.localStorage;
export default {
  methods: {
    changeLocale: function(locale) {
      switch (locale) {
        case 'ru':
          // this.$i18n.locale = 'en';
          localStorage.setItem('locale', 'en');
          break;
        case 'en':
          localStorage.setItem('locale', 'ru');
          // this.$i18n.locale = 'ru';
          break;
      }
      window.location.reload();
    }
  },
  mounted() {
    let locale = localStorage.getItem('locale');

    if (locale != undefined) {
      this.$i18n.locale = locale;
    } else {
      this.$i18n.locale = 'ru';
    }
  }
};
</script>
