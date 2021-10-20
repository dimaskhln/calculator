<template>
  <v-container fluid>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64" color="teal lighten-4"></v-progress-circular>
    </v-overlay>
    <v-row align="center"
      ><v-col v-for="city in cities" :key="city.name" cols="12" sm="12" md="4">
        <v-card class="mx-3 mt-3">
          <v-card-title>{{ city.ruName }}</v-card-title>

          <v-row>
            <v-col cols="6" sm="3"><v-img class="ml-3" max-width="100%" :src="'/images/weather/' + city.img"/></v-col>
            <v-col cols="6" sm="3"
              ><div class="text-h3 text-center">{{ city.temp }}</div></v-col
            >
          </v-row>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="text-h6">{{ city.description }}</div>
            </v-row>

            <v-row align="center" class="mx-0">
              Ветер <v-icon>mdi-{{ city.windDirectionIcon }}</v-icon> {{ city.windDirection }} {{ city.windSpeed }} м/с
            </v-row>
          </v-card-text>

          <v-btn class="ml-3 mb-3" color="red lighten-4" elevation="2" x-small v-on:click="deleteCity(city.name)"> Удалить</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      ><v-btn class="mb-6 mt-3 mx-auto" color="teal accent-3" v-if="!showAddNew" v-on:click="showAddNew = true"><v-icon>mdi-plus</v-icon> Добавить город</v-btn>
      <v-card v-if="showAddNew" class="mx-auto my-12" min-width="50%" max-width="50%">
        <v-text-field v-model="addingCityName" class="mt-3 mx-3" label="Название города" outlined></v-text-field>
        <v-row class="mx-3 pb-6">
          <v-btn class=" mx-1" color="green accent-3" v-on:click="addCity">Добавить</v-btn>
          <v-btn class=" mx-1" color="red accent-3" v-on:click="showAddNew = false">Отмена</v-btn></v-row
        >
      </v-card></v-row
    >
  </v-container>
</template>

<style scoped>
.weather {
  vertical-align: center;
}
</style>

<script>
const apiKey = '5d498cca2f0e7342e2601295325ff976';

export default {
  data() {
    return {
      cities: [
        { name: 'Novosibirsk', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '' },
        { name: 'Tbilisi', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '' },
        { name: 'Moscow', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '' },
        { name: 'Sochi', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '' },
        { name: 'Tuapse', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '' },
        { name: 'Tomsk', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '' },
        { name: 'Krasnoyarsk', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '' },
        { name: 'Sterlitamak', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '' },
        { name: 'Ufa', ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '' }
      ],
      showAddNew: false,
      addingCityName: '',
      isLoading: true
    };
  },
  methods: {
    getWeather: function() {
      console.log(this.cities);
      this.isLoading = true;
      this.cities.forEach(cityObj => {
        let windDirection = '0';
        let weatherCode = 0;
        this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityObj.name}&appid=${apiKey}&units=metric&lang=ru`).then(function(response) {
          cityObj.temp = String(response.data.main.temp > 0 ? '+' + Math.round(response.data.main.temp) : Math.round(response.data.main.temp));
          cityObj.ruName = response.data.name;
          cityObj.description = response.data.weather[0].description;
          cityObj.windSpeed = response.data.wind.speed;
          cityObj.windDirection = Math.round(Number(response.data.wind.deg), 0);
          windDirection = Number(cityObj.windDirection);
          windDirection >= 23 && windDirection < 68
            ? ((cityObj.windDirection = 'СВ'), (cityObj.windDirectionIcon = 'arrow-top-right-thick'))
            : windDirection >= 68 && windDirection < 113
            ? ((cityObj.windDirection = 'В'), (cityObj.windDirectionIcon = 'arrow-right-thick'))
            : windDirection >= 113 && windDirection < 158
            ? ((cityObj.windDirection = 'ЮВ'), (cityObj.windDirectionIcon = 'arrow-bottom-right-thick'))
            : windDirection >= 158 && windDirection < 203
            ? ((cityObj.windDirection = 'Ю'), (cityObj.windDirectionIcon = 'arrow-down-thick'))
            : windDirection >= 203 && windDirection < 248
            ? ((cityObj.windDirection = 'ЮЗ'), (cityObj.windDirectionIcon = 'arrow-bottom-left-thick'))
            : windDirection >= 248 && windDirection < 293
            ? ((cityObj.windDirection = 'З'), (cityObj.windDirectionIcon = 'arrow-left-thick'))
            : windDirection >= 293 && windDirection < 338
            ? ((cityObj.windDirection = 'СЗ'), (cityObj.windDirectionIcon = 'arrow-top-left-thick'))
            : ((cityObj.windDirection = 'С'), (cityObj.windDirectionIcon = 'arrow-up-thick'));

          weatherCode = Number(response.data.weather[0].id);
          weatherCode >= 200 && weatherCode <= 232
            ? (cityObj.img = 'storm')
            : weatherCode >= 300 && weatherCode <= 321
            ? (cityObj.img = 'drizzle')
            : weatherCode >= 500 && weatherCode <= 531
            ? (cityObj.img = 'rain')
            : weatherCode >= 600 && weatherCode <= 622
            ? (cityObj.img = 'snow')
            : weatherCode >= 701 && weatherCode <= 771
            ? (cityObj.img = 'misty')
            : weatherCode == 781
            ? (cityObj.img = 'tornado')
            : weatherCode == 801
            ? (cityObj.img = 'few-cloudy')
            : weatherCode >= 802 && weatherCode <= 803
            ? (cityObj.img = 'cloudy')
            : weatherCode == 804
            ? (cityObj.img = 'very-cloudy')
            : (cityObj.img = 'sunny');
          cityObj.img += '.png';
        });
      });
      this.isLoading = false;
    },
    addCity: function() {
      if (!this.cities.some(c => c.name.toLowerCase() === this.addingCityName.toLowerCase() || c.ruName === this.addingCityName)) {
        this.cities.push({ name: this.addingCityName });
        this.showAddNew = false;
        this.getWeather();
        this.addingCityName = '';
      } else {
        alert('Информация о погоде в данном городе уже есть');
      }
    },
    deleteCity: function(name) {
      this.cities = this.cities.filter(city => city.name != name);
    }
  },
  mounted() {
    this.getWeather('Novosibirsk');
    document.querySelector('.v-application--wrap').classList.remove('calculator-bg');
    document.querySelector('.v-application--wrap').classList.remove('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.remove('todo-bg');
    document.querySelector('.v-application--wrap').classList.add('weather-bg');
  }
};
/*
Погода - города в которых я бывал
Список заданий - что я сделал
Калькулятор - сколько я хочу зарабатывать
*/
</script>
