<template>
  <v-container fluid>
    <v-row
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>{{ $t('ABOUT_mainInfoHead') }} {{ greetings }}!</v-card-title>
          <v-card-text>
            {{ $t('ABOUT_mainInfoBody') }}
          </v-card-text>
        </v-card></v-col
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>{{ $t('ABOUT_hobbiesHead') }}</v-card-title>
          <v-card-text>
            <a href="https://steamcommunity.com/id/dimastip" target="_blank">{{ $t('ABOUT_hobbiesBodyPCGames') }}</a
            >{{ $t('ABOUT_hobbiesBodyOther') }}
          </v-card-text>
        </v-card></v-col
      >
    </v-row>
    <v-row class="mb-3"
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>{{ $t('ABOUT_whyChangeHead') }}</v-card-title>
          <v-card-text>{{ $t('ABOUT_whyChangeBody') }} </v-card-text>
        </v-card></v-col
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>{{ $t('ABOUT_achievementsHead') }}</v-card-title>
          <v-card-text>
            {{ $t('ABOUT_achievementsBody') }}
          </v-card-text>
        </v-card></v-col
      >
    </v-row>
    <v-footer app bottom fixed padless class="matte-bg">
      <v-col class="text-center"
        >{{ $t('ABOUT_footerContact') }} <br />
        <a target="_blank" href="https://vk.com/thisisdimas"
          ><v-img class="mx-3 d-inline-flex" height="32" width="32" src="/images/social/vk_128.png"></v-img
        ></a>
        <a target="_blank" href="https://t.me/dimaskhln"
          ><v-img class="mx-3 d-inline-flex" height="32" width="32" src="/images/social/telegram_128.png"></v-img
        ></a>
        <a target="_blank" href="https://instagram.com/this.is.dimas"
          ><v-img class="mx-3 d-inline-flex" height="32" width="32" src="/images/social/instagram_128.png"></v-img
        ></a>
        <br />
        <v-icon class=" d-inline-flex">mdi-at</v-icon
        ><a
          class=" d-inline-flex"
          href="mailto:me@dimaskhln.ru?bcc=dm_ser_k@mail.ru&?subject=%D0%A1%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D1%80%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5"
          >me@dimaskhln.ru</a
        ><br />{{ $t('ABOUT_footerIcons1') }} <a href="https://www.freepik.com" title="Freepik">Freepik</a> {{ $t('ABOUT_footerIcons2') }}
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></v-col
      >
    </v-footer>

    <v-dialog v-if="showDialog" v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          {{ $t('ABOUT_dialogHead') }}
        </v-card-title>
        <v-card-text>{{ $t('ABOUT_dialogBody') }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            {{ $t('ABOUT_dialogButton') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
      ageWord: '',
      greetings: '',
      dialog: true
    };
  },
  methods: {},
  mounted() {
    document.querySelector('.v-application--wrap').classList.remove('weather-bg');
    document.querySelector('.v-application--wrap').classList.add('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.remove('todo-bg');
    document.querySelector('.v-application--wrap').classList.remove('calculator-bg');
    document.title = this.$t('TITLE_about');

    this.age = new Date(new Date() - new Date('04/27/1995')).getFullYear() - 1970;
    let ageString = String(this.age);
    if (ageString[ageString.length - 1] == 0 || (ageString[ageString.length - 1] >= 5 && ageString[ageString.length - 1] <= 9)) {
      this.ageWord = 'лет';
    } else if (ageString[ageString.length - 1] == 1) {
      this.ageWord = 'год';
    } else {
      this.ageWord = 'года';
    }

    let hour = new Date(Date.now()).getHours();

    if (hour >= 17 && hour <= 3) {
      this.greetings = this.$i18n.locale == 'ru' ? 'вечер' : 'evening';
    } else {
      this.greetings = this.$i18n.locale == 'ru' ? 'день' : 'day';
    }
  },
  beforeCreate() {
    console.log(this.$pageLoaded);
    if (this.$pageLoaded.value) {
      console.log('if');
      this.showDialog = false;
      console.log(this.$pageLoaded.value);
    } else {
      console.log('else');
      this.showDialog = true;
      this.$pageLoaded.value = true;
      console.log(this.$pageLoaded.value);
    }
  }
};
</script>
