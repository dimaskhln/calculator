// Про меня, про квн про общественную жизнь про навыки про то что пробовал в статистику про фронтенд про андроид про игрухи // Тест??? Работу хочу сменить //
потому что хочу развиваться дальше, а тут консервативно и к новому относятся с опаской, а я хочу пробовать использовать фреймворки, вот вью поковырял // первую
карточку надо сделать типа имя, возраст, образование и всё-такое
<template>
  <v-container fluid>
    <v-row
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>Добрый {{ greetings }}!</v-card-title>
          <v-card-text>
            Меня зовут Дмитрий.<br />
            Мне {{ age }} {{ ageWord }}. <br />
            Я web-разработчик. <br />
            Мне нравится создавать удобные интерфейсы и наполнять приложения логикой.
          </v-card-text>
        </v-card></v-col
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>Мои хобби</v-card-title>
          <v-card-text>
            <a href="https://steamcommunity.com/id/dimastip" target="_blank">Компьютерные игры</a>, гитара, коллекционирование старых мобильных телефонов
          </v-card-text>
        </v-card></v-col
      >
    </v-row>
    <v-row
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>Мои достижения</v-card-title>
          <v-card-text>
            За неполные три года работы в качестве Frontend-разработчика я !!!!!№!№" Web-приложение для управления охранными системами, доступное как на
            десктопе, так и на мобильных устройствах. При разработке использовались №%№;№;;№" HTML+CSS+JS, jQuery, бэкенд на C# (ASP.NET), MSSQL, Также одной из
            моих обязанностей была разработка и поддержка приложения-оболочки для этой системы управления на Android (Xamarin) с дополнительным функционалом.
          </v-card-text>
        </v-card></v-col
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>Чего я хочу</v-card-title>
          <v-card-text
            >До того как я пришел в компанию, в которой работаю сейчас, Web-разработкой я не занимался вообще. Знания о JavaScript и jQuery пришлось добывать "в
            бою", поэтому есть ощущения что в них могут быть пробелы. Поэтому в первую очередь я хочу актуализировать свои навыки. Есть ощущение, что вокруг все
            уже перемещаются на летающих машинах, а я всё ещё езжу на повозке, запряженной лошадьми. Для их восполнения я хочу попасть в профессиональную
            команду, в которой я смогу выровнять свои знания и получить новые. Также мне хочется видеть впереди перспективы - и профессиональные и финансовые.
            Безусловно, я понимаю, что для этого нужно усердно и качественно работать, к чему я готов и чего я хочу.</v-card-text
          >
        </v-card></v-col
      >
    </v-row>
    <v-row
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>Что я уже умею</v-card-title>
          <v-card-text>HTML, CSS, JavaScript, jQuery, Vue, SQL, PHP, C#</v-card-text>
          <v-card-text>R, Статистический анализ данных</v-card-text>
          <v-card-text>Photoshop, Sony Vegas (MAGIX Vegas) </v-card-text>
        </v-card></v-col
      ><v-col cols="12" sm="12" md="6">
        <v-card class="mt-3 mx-3">
          <v-card-title>Чему хочу научиться</v-card-title>
          <v-card-text>React</v-card-text>
        </v-card></v-col
      >
    </v-row>
    <v-row>
      <v-footer width="100%" absolute>
        <v-row>
          <v-col cols="12" sm="12" md="6" class="text-center"
            >Свяжитесь со мной: <br />
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
            ></v-col
          ><v-col cols="12" sm="12" md="6" class="text-center">
            Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></v-col
          >
        </v-row>
      </v-footer></v-row
    >

    <v-dialog v-if="showDialog" v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          Добро пожаловать!
        </v-card-title>

        <v-card-text
          >Меня зовут Дмитрий и я очень рад, что Вы зашли на мою страницу! <br />
          Пройдите по всем вкладкам и Вы узнаете обо мне то, что я хочу Вам о себе рассказать!</v-card-text
        >

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Хорошо
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
      this.greetings = 'вечер';
    } else {
      this.greetings = 'день';
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
