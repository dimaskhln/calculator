<template>
  <v-container fluid>
    <v-row>
      <v-card v-for="city in cities" :key="city.name" class="" max-width="374">
        <v-card-title>{{ city.ruName }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            {{ city.weather }}
          </v-row>
        </v-card-text>
      </v-card>
      <v-btn class="mx-auto" color="teal accent-3" v-if="!showAddNew" v-on:click="showAddNew = true"><v-icon>mdi-plus</v-icon> Добавить город</v-btn>
      <v-card v-if="showAddNew" class="mx-auto my-12" max-width="374">
        <v-text-field v-model="addingCityName" label="Название города" outlined></v-text-field>
        <v-btn class="mx-auto" color="green accent-3" v-on:click="addCity">Добавить</v-btn>
      </v-card></v-row
    >
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
      ],
      showAddNew: false,
      addingCityName: ''
    };
  },
  methods: {
    getWeather: function() {
      this.cities.forEach(cityObj => {
        this.$axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityObj.name}&appid=${apiKey}&units=metric&lang=ru`)
          .then(response => ((cityObj.weather = response.data.main.temp), (cityObj.ruName = response.data.name)));
      });
    },
    addCity: function() {
      this.cities.push({ name: this.addingCityName });
      this.getWeather();
      this.showAddNew = false;
    }
  },
  mounted() {
    this.getWeather('Novosibirsk');
  }
};
</script>
