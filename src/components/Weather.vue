<template>
  <v-container fluid>
    <v-card v-for="city in cities" :key="city.name" class="mx-auto my-12" max-width="374">
      <v-card-title>{{ city.ruName }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          {{ city.weather }}
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto my-12" max-width="374">
      <v-card-title><v-icon>mdi-plus</v-icon> Добавить город</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
const apiKey = '5d498cca2f0e7342e2601295325ff976';

export default {
  data() {
    return {
      cities: [
        { name: 'Novosibirsk', ruName: '', weather: '' },
        { name: 'Moscow', ruName: '', weather: '' },
        { name: 'Sochi', ruName: '', weather: '' }
      ]
    };
  },
  methods: {
    getWeather: function() {
      this.cities.forEach(cityObj => {
        this.$axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityObj.name}&appid=${apiKey}&units=metric&lang=ru`)
          .then(response => ((cityObj.weather = response.data.main.temp), (cityObj.ruName = response.data.name)));
      });
    }
  },
  mounted() {
    this.getWeather('Novosibirsk');
  }
};
</script>
