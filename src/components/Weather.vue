<template>
  <v-container fluid>
    <v-row>
      <v-card v-for="city in cities" :key="city.name" class="ma-3" min-width="30%" max-width="30%">
        <v-card-title>{{ city.ruName }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            {{ city.temp }}
          </v-row>
          <v-row align="center" class="mx-0">
            {{ city.description }}
          </v-row>
          <v-row align="center" class="mx-0">
            {{ city.dt }}
          </v-row>
          <v-row>
            {{ city.img }}
            <!-- <v-img max-height="150" max-width="250" src="${$city.img}"></v-img> -->
          </v-row>
          <v-row align="center" class="mx-0"> Ветер {{ city.windDirection }} {{ city.windSpeed }} м/с </v-row>
        </v-card-text>
        <v-btn class="ml-3 mb-3" color="red lighten-4" elevation="2" x-small v-on:click="deleteCity(city.name)"> Удалить</v-btn>
      </v-card>
    </v-row>
    <v-row
      ><v-btn class="mx-auto" color="teal accent-3" v-if="!showAddNew" v-on:click="showAddNew = true"><v-icon>mdi-plus</v-icon> Добавить город</v-btn>
      <v-card v-if="showAddNew" class="mx-auto my-12" min-width="35%" max-width="35%">
        <v-text-field v-model="addingCityName" class="mt-3 mx-3" label="Название города" outlined></v-text-field>
        <v-row class="mt-3 mx-3">
          <v-btn class=" mx-1" color="green accent-3" v-on:click="addCity">Добавить</v-btn>
          <v-btn class=" mx-1" color="red accent-3" v-on:click="showAddNew = false">Отмена</v-btn></v-row
        >
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
        { name: 'Novosibirsk', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', img: '', dt: '' },
        { name: 'Moscow', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', img: '', dt: '' },
        { name: 'Sochi', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', img: '', dt: '' }
      ],
      showAddNew: false,
      addingCityName: ''
    };
  },
  methods: {
    getWeather: function() {
      this.cities.forEach(cityObj => {
        let windDirection = '0';
        let weatherCode = 0;
        let dt = '';
        this.$axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityObj.name}&appid=${apiKey}&units=metric&lang=ru`).then(function(response) {
          cityObj.temp = response.data.main.temp > 0 ? '+' + Math.round(response.data.main.temp) : Math.round(response.data.main.temp);
          cityObj.ruName = response.data.name;
          cityObj.description = response.data.weather[0].description;
          cityObj.windSpeed = response.data.wind.speed;
          cityObj.windDirection = response.data.wind.deg;
          windDirection = Number(cityObj.windDirection);
          windDirection >= 23 && windDirection < 68
            ? (cityObj.windDirection = 'СВ')
            : windDirection >= 68 && windDirection < 113
            ? (cityObj.windDirection = 'В')
            : windDirection >= 113 && windDirection < 158
            ? (cityObj.windDirection = 'ЮВ')
            : windDirection >= 158 && windDirection < 203
            ? (cityObj.windDirection = 'Ю')
            : windDirection >= 203 && windDirection < 248
            ? (cityObj.windDirection = 'ЮЗ')
            : windDirection >= 248 && windDirection < 293
            ? (cityObj.windDirection = 'З')
            : windDirection >= 293 && windDirection < 338
            ? (cityObj.windDirection = 'СЗ')
            : (cityObj.windDirection = 'С');
          weatherCode = Number(response.data.weather.id);
          cityObj.img = '../assets/images/weather/';
          weatherCode >= 200 && weatherCode <= 232
            ? (cityObj.img += 'storm')
            : weatherCode >= 300 && weatherCode <= 321
            ? (cityObj.img += 'drizzle')
            : weatherCode >= 500 && weatherCode <= 531
            ? (cityObj.img += 'rain')
            : weatherCode >= 600 && weatherCode <= 622
            ? (cityObj.img += 'snow')
            : weatherCode >= 701 && weatherCode <= 771
            ? (cityObj.img += 'misty')
            : weatherCode == 781
            ? (cityObj.img += 'tornado')
            : weatherCode == 801
            ? (cityObj.img += 'few-cloudy')
            : weatherCode >= 802 && weatherCode <= 803
            ? (cityObj.img += 'cloudy')
            : weatherCode == 804
            ? (cityObj.img += 'very-cloudy')
            : (cityObj.img += 'sunny');
          cityObj.img += '.png';
          dt = response.data.dtdt = new Date(dt * 1000);
          cityObj.dt = dt.toLocaleString();
        });
      });
    },
    addCity: function() {
      if (!this.cities.includes({ name: this.addingCityName })) this.cities.push({ name: this.addingCityName });
      this.showAddNew = false;
      this.getWeather();
      this.addingCityName = '';
    },
    deleteCity: function(name) {
      this.cities.pop(name);
    }
  },
  mounted() {
    this.getWeather('Novosibirsk');
    document.querySelector('.v-application--wrap').classList.remove('calculator-bg');
    document.querySelector('.v-application--wrap').classList.remove('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.add('weather-bg');
  }
};
</script>
