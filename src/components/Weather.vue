<template>
  <v-container fluid>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64" color="teal lighten-4"></v-progress-circular>
    </v-overlay>
    <v-row align="center"
      ><v-col v-for="city in cities" :key="city.name" cols="12" sm="12" md="4">
        <v-sheet color="darken-2" class="mx-3 mt-3" v-if="!city.isLoaded">
          <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
        <v-card class="mx-3 mt-3" v-if="city.isLoaded">
          <v-card-title>{{ city.ruName }}</v-card-title>

          <v-row>
            <v-col cols="6" sm="3"><v-img class="ml-3" max-width="100%" :src="'/images/weather/' + city.img"/></v-col>
            <v-col cols="6" sm="3"
              ><div class="text-h2 text-center" style="white-space:nowrap">{{ city.temp }}</div></v-col
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

          <v-btn class="ml-3 mb-3" v-if="!protectedCities.includes(city.name)" color="red lighten-4" elevation="2" x-small v-on:click="deleteCity(city.docId)">
            Удалить</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row
      ><v-btn class="mb-6 mt-3 mx-auto" color="teal accent-3" v-if="!showAddNew" v-on:click="showAddNew = true"><v-icon>mdi-plus</v-icon> Добавить город</v-btn>
      <v-card v-if="showAddNew" class="mx-auto my-12" min-width="50%" max-width="50%">
        <v-text-field v-model="addingCity.name" class="mt-3 mx-3" label="Название города" outlined></v-text-field>
        <v-row class="mx-3 pb-6">
          <v-btn class=" mx-1" color="green accent-3" v-on:click="addCity">Добавить</v-btn>
          <v-btn class=" mx-1" color="red accent-3" v-on:click="showAddNew = false">Отмена</v-btn></v-row
        >
      </v-card></v-row
    >
    <v-row
      ><v-footer width="100%">
        <v-col class="text-center" color="teal lighten-4" height="20" cols="12">
          Информация о погоде - <a href="https://openweathermap.org" target="_blank">OpenWeatherMap</a>
        </v-col>
      </v-footer></v-row
    >
    <v-dialog v-if="showDialog" v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          Это не просто погодный виджет!
        </v-card-title>

        <v-card-text>
          Да, погоду здесь узнать можно, но так же можно узнать в каких городах я уже побывал!
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Понятно
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="snackbarTimeout">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<style scoped>
.weather {
  vertical-align: center;
}
</style>

<script>
import { keys } from '../apiKeys';
const apiKey = keys.OPEN_WEATHER;

export default {
  data() {
    return {
      cities: [],
      showAddNew: false,
      addingCity: {
        name: '',
        ruName: '',
        temp: '',
        description: '',
        windSpeed: '',
        windDirection: '',
        windDirectionIcon: '',
        img: '',
        localTime: '',
        isLoaded: false
      },
      isLoading: true,
      dialog: true,
      snackbar: false,
      snackbarText: '',
      snackbarTimeout: 3000,
      protectedCities: ['Novosibirsk', 'Tbilisi', 'Moscow', 'Sochi', 'Tuapse', 'Tomsk', 'Krasnoyarsk', 'Sterlitamak', 'Ufa']
    };
  },
  methods: {
    getWeather: function() {
      this.isLoading = true;
      this.cities.forEach(cityObj => {
        this.loadWeather(cityObj);
      });
      this.isLoading = false;
    },
    loadWeather: async function(cityObj) {
      let aaa = this;
      let windDirection = '0';
      let weatherCode = 0;
      this.$axios.timeout = 20;
      this.$axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityObj.name}&appid=${apiKey}&units=metric&lang=ru`)
        .then(function(response) {
          if (response.status >= 400 && response.status <= 499) {
            // console.log('no');
            return false;
          } else {
            cityObj.temp = String(response.data.main.temp > 0 ? '+' + Math.round(response.data.main.temp) : Math.round(response.data.main.temp));
            cityObj.ruName = response.data.name;
            cityObj.description = response.data.weather[0].description;
            cityObj.windSpeed = Math.ceil(response.data.wind.speed);
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
            cityObj.isLoaded = true;

            // console.log(cityObj);
            return true;
          }
        })
        .catch(error => {
          if (error.response.status == 404) {
            aaa.cities.splice(this.cities.indexOf(cityObj), 1);
            this.snackbarText = 'Информация о погоде не найдена';
            this.snackbar = true;
          }
          console.error('Error in loadWeather: ' + error);
        });
    },
    addCity: async function() {
      if (this.cities.length >= 30) {
        this.snackbarText = 'Достигнуто максимальное количество городов';
        this.snackbar = true;
      } else {
        var aaa = this;
        if (!this.cities.some(c => c.name.toLowerCase() === this.addingCity.name.toLowerCase() || c.ruName === this.addingCity.name)) {
          this.showAddNew = false;
          let promise = new Promise(function(resolve) {
            // let r = aaa.loadWeather(aaa.addingCity);
            // console.log(r);
            if (aaa.loadWeather(aaa.addingCity)) {
              resolve('done');
            } else {
              resolve('error');
            }
          });

          promise.then(function(response) {
            console.log(response);
            const db = aaa.$firebase.firestore();
            var batch = db.batch();
            let doc = db.collection('Weather').doc();
            aaa.addingCity.docId = doc;
            batch.set(doc, aaa.addingCity);
            batch.commit();
            aaa.cities.push(aaa.addingCity);
            aaa.addingCity = {
              name: '',
              ruName: '',
              temp: '',
              description: '',
              windSpeed: '',
              windDirection: '',
              windDirectionIcon: '',
              img: '',
              localTime: '',
              isLoaded: false
            };
          });

          promise.catch(function(response) {
            console.log(response);
            aaa.snackbarText = 'Информации о данном городе не существует';
            aaa.snackbar = true;
          });
        } else {
          this.snackbarText = 'Информация о погоде в данном городе уже есть';
          this.snackbar = true;
        }
      }
    },
    deleteCity: function(docId) {
      const db = this.$firebase.firestore();
      db.collection('Weather')
        .doc(docId)
        .delete();
      this.cities = this.cities.filter(city => city.docId != docId);
      this.snackbarText = 'Информация о городе удалена';
      this.snackbar = true;
    }
  },
  mounted() {
    document.querySelector('.v-application--wrap').classList.remove('calculator-bg');
    document.querySelector('.v-application--wrap').classList.remove('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.remove('todo-bg');
    document.querySelector('.v-application--wrap').classList.add('weather-bg');
    document.title = 'Дмитрий Халин | Погода';

    this.$weatherLoaded = true;

    const db = this.$firebase.firestore();
    let cities = [];
    db.collection('Weather')
      .get()
      .then(snap => {
        snap.forEach(function(doc) {
          let city = doc.data();
          city.docId = doc.id;
          city.ruName = '';
          city.temp = '';
          city.description = '';
          city.windSpeed = '';
          city.windDirection = '';
          city.windDirectionIcon = '';
          city.img = '';
          city.localTime = '';
          city.isLoaded = false;
          cities.push(city);
        });
        cities.sort(function(a, b) {
          var nameA = a.name.toLowerCase();
          var nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
        this.cities = cities;
        this.getWeather();
      });
  },
  beforeCreate() {
    console.log(this.$weatherLoaded);
    if (this.$weatherLoaded.value) {
      console.log('if');
      this.showDialog = false;
      console.log(this.$weatherLoaded.value);
    } else {
      console.log('else');
      this.showDialog = true;
      this.$weatherLoaded.value = true;
      console.log(this.$weatherLoaded.value);
    }
  }
};
</script>

// { // name: 'Novosibirsk', // ruName: '', // temp: '', // description: '', // windSpeed: '', // windDirection: '', // windDirectionIcon: '', // img: '', //
localTime: '', // isLoaded: false // }, // { // name: 'Tbilisi', // ruName: '', // temp: '', // description: '', // windSpeed: '', // windDirection: '', //
windDirectionIcon: '', // img: '', // localTime: '', // isLoaded: false // }, // { // name: 'Moscow', // ruName: '', // temp: '', // description: '', //
windSpeed: '', // windDirection: '', // windDirectionIcon: '', // img: '', // localTime: '', // isLoaded: false // }, // { // name: 'Sochi', // ruName: '', //
temp: '', // description: '', // windSpeed: '', // windDirection: '', // windDirectionIcon: '', // img: '', // localTime: '', // isLoaded: false // }, // { //
name: 'Tuapse', // ruName: '', // temp: '', // description: '', // windSpeed: '', // windDirection: '', // windDirectionIcon: '', // img: '', // localTime: '',
// isLoaded: false // }, // { // name: 'Tomsk', // ruName: '', // temp: '', // description: '', // windSpeed: '', // windDirection: '', // windDirectionIcon:
'', // img: '', // localTime: '', // isLoaded: false // }, // { // name: 'Krasnoyarsk', // ruName: '', // temp: '', // description: '', // windSpeed: '', //
windDirection: '', // windDirectionIcon: '', // img: '', // localTime: '', // isLoaded: false // }, // { // name: 'Sterlitamak', // ruName: '', // temp: '', //
description: '', // windSpeed: '', // windDirection: '', // windDirectionIcon: '', // img: '', // localTime: '', // isLoaded: false // }, // { name: 'Ufa',
ruName: '', temp: '', description: '', windSpeed: '', windDirection: '', windDirectionIcon: '', img: '', localTime: '', isLoaded: false }
