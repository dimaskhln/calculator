<template>
  <!-- :key="$i18n.locale" v-on:change="loadWeather()" -->
  <v-container fluid>
    <v-row align="center"
      ><v-col v-for="city in cities" :key="city.name" cols="12" sm="12" md="4">
        <v-sheet color="darken-2" class="mx-3 mt-3" v-if="!city.isLoaded">
          <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
        <v-card class="mx-3 mt-3" v-if="city.isLoaded">
          <v-card-title>{{ $i18n.locale == 'ru' ? city.ruName : city.name }}</v-card-title>

          <v-row>
            <v-col cols="6" sm="3"><v-img class="ml-3" max-width="200" :src="'/images/weather/' + city.img"/></v-col>
            <v-col cols="6" sm="3"
              ><div class="text-h2 text-center" style="white-space:nowrap">{{ city.temp }}°C</div></v-col
            >
          </v-row>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="text-h6">{{ city.description }}</div>
            </v-row>

            <v-row align="center" class="mx-0">
              {{ $t('WEATHER_wind') }} <v-icon>mdi-{{ city.windDirectionIcon }}</v-icon> {{ city.windDirection }} {{ city.windSpeed }} м/с
            </v-row>
          </v-card-text>

          <v-btn class="ml-3 mb-3" v-if="!protectedCities.includes(city.name)" color="red lighten-4" elevation="2" x-small v-on:click="deleteCity(city.docId)">
            {{ $t('WEATHER_deleteButton') }}</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row
      ><v-btn class="mb-6 mt-3 mx-auto" color="teal accent-3" v-if="!showAddNew" v-on:click="showAddNew = true"
        ><v-icon>mdi-plus</v-icon> {{ $t('WEATHER_addCity') }}</v-btn
      >
      <v-card v-if="showAddNew" class="mx-auto my-12" min-width="50%" max-width="50%">
        <v-text-field v-model="addingCity.name" class="mt-3 mx-3" :label="$t('WEATHER_cityNamePlaceholder')" outlined></v-text-field>
        <v-row class="mx-3 pb-6">
          <v-btn class=" mx-1" color="green accent-3" v-on:click="addCity">{{ $t('WEATHER_cityAddButton') }}</v-btn>
          <v-btn class=" mx-1" color="red accent-3" v-on:click="showAddNew = false">{{ $t('WEATHER_cityCancelButton') }}</v-btn></v-row
        >
      </v-card></v-row
    >
    <v-row
      ><v-footer width="100%">
        <v-col class="text-center" color="teal lighten-4" height="20" cols="12">
          {{ $t('WEATHER_footer') }} <a href="https://openweathermap.org" target="_blank">OpenWeatherMap</a>
        </v-col>
      </v-footer></v-row
    >
    <v-dialog v-if="showDialog" v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          {{ $t('WEATHER_dialogHead') }}
        </v-card-title>

        <v-card-text>
          {{ $t('WEATHER_dialogBody') }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            {{ $t('WEATHER_dialogOkButton') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="snackbarTimeout">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          {{ $t('WEATHER_snackboxCloseButton') }}
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
const apiKey = process.env.VUE_APP_OPENWEATHER;

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
        isLoaded: false,
        locale: 'ru'
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
      let vueInstance = this;
      let windDirection = '0';
      let weatherCode = 0;

      this.$axios.timeout = 20;
      console.log(vueInstance.$i18n.locale);

      this.$axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityObj.name}&appid=${apiKey}&units=metric&lang=${vueInstance.$i18n.locale}`)
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
              ? ((cityObj.windDirection = vueInstance.$i18n.locale == 'ru' ? 'СВ' : 'NE'), (cityObj.windDirectionIcon = 'arrow-top-right-thick'))
              : windDirection >= 68 && windDirection < 113
              ? ((cityObj.windDirection = vueInstance.$i18n.locale == 'ru' ? 'В' : 'E'), (cityObj.windDirectionIcon = 'arrow-right-thick'))
              : windDirection >= 113 && windDirection < 158
              ? ((cityObj.windDirection = vueInstance.$i18n.locale == 'ru' ? 'ЮВ' : 'SE'), (cityObj.windDirectionIcon = 'arrow-bottom-right-thick'))
              : windDirection >= 158 && windDirection < 203
              ? ((cityObj.windDirection = vueInstance.$i18n.locale == 'ru' ? 'Ю' : 'S'), (cityObj.windDirectionIcon = 'arrow-down-thick'))
              : windDirection >= 203 && windDirection < 248
              ? ((cityObj.windDirection = vueInstance.$i18n.locale == 'ru' ? 'ЮЗ' : 'SW'), (cityObj.windDirectionIcon = 'arrow-bottom-left-thick'))
              : windDirection >= 248 && windDirection < 293
              ? ((cityObj.windDirection = vueInstance.$i18n.locale == 'ru' ? 'З' : 'W'), (cityObj.windDirectionIcon = 'arrow-left-thick'))
              : windDirection >= 293 && windDirection < 338
              ? ((cityObj.windDirection = vueInstance.$i18n.locale == 'ru' ? 'СЗ' : 'NW'), (cityObj.windDirectionIcon = 'arrow-top-left-thick'))
              : ((cityObj.windDirection = vueInstance.$i18n.locale == 'ru' ? 'С' : 'N'), (cityObj.windDirectionIcon = 'arrow-up-thick'));

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
            vueInstance.cities.splice(this.cities.indexOf(cityObj), 1);
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
        var vueInstance = this;
        if (!this.cities.some(c => c.name.toLowerCase() === this.addingCity.name.toLowerCase() || c.ruName === this.addingCity.name)) {
          this.showAddNew = false;
          let promise = new Promise(function(resolve) {
            // let r = vueInstance.loadWeather(vueInstance.addingCity);
            // console.log(r);
            if (vueInstance.loadWeather(vueInstance.addingCity)) {
              resolve('done');
            } else {
              resolve('error');
            }
          });

          promise.then(function(response) {
            console.log(response);
            const db = vueInstance.$firebase.firestore();
            var batch = db.batch();
            let doc = db.collection('Weather').doc();
            vueInstance.addingCity.docId = doc;
            batch.set(doc, vueInstance.addingCity);
            batch.commit();
            vueInstance.cities.push(vueInstance.addingCity);
            vueInstance.addingCity = {
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
            vueInstance.snackbarText = 'Информации о данном городе не существует';
            vueInstance.snackbar = true;
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
    document.title = this.$t('TITLE_weather');

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
          return 0;
        });
        this.cities = cities;
        this.getWeather();
      });
  },
  beforeCreate() {
    this.locale = this.$i18n.locale;
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
