// Про меня, про квн про общественную жизнь про навыки про то что пробовал в статистику про фронтенд про андроид про игрухи // Тест??? Работу хочу сменить //
потому что хочу развиваться дальше, а тут консервативно и к новому относятся с опаской, а я хочу пробовать использовать фреймворки, вот вью поковырял // первую
карточку надо сделать типа имя, возраст, образование и всё-такое
<template>
  <v-container fluid>
    <v-row
      ><v-col>
        <v-card class="mt-3 mx-3">
          <v-card-title>Добрый {{ greetings }}!</v-card-title>
          <v-card-text>
            Меня зовут Дмитрий.<br />
            Мне {{ age }} {{ ageWord }}. <br />
            Я web-разработчик. <br />
            Мне нравится создавать удобные интерфейсы и наполнять приложения логикой.
          </v-card-text>
        </v-card></v-col
      ><v-col>
        <v-card class="mt-3 mx-3">
          <v-card-text> Меня зовут Дмитрий. Мне {{ age }} {{ ageWord }}. </v-card-text>
        </v-card></v-col
      >
    </v-row>
    <v-row
      ><v-col>
        <v-card class="mt-3 mx-3">
          <v-card-title>Почему я хочу сменить работу</v-card-title>
          <v-card-text>
            потому что хочу развиваться дальше, а тут консервативно и к новому относятся с опаской, а я хочу пробовать использовать фреймворки, вот вью
            поковырял
          </v-card-text>
        </v-card></v-col
      ><v-col>
        <v-card class="mt-3 mx-3">
          <v-card-text> Меня зовут Дмитрий. Мне {{ age }} {{ ageWord }}. </v-card-text>
        </v-card></v-col
      >
    </v-row>
    <v-row
      ><v-col>
        <v-card class="mt-3 mx-3">
          <v-card-title>Что я уже умею</v-card-title>
        </v-card></v-col
      ><v-col>
        <v-card class="mt-3 mx-3">
          <v-card-title>Чему хочу научиться</v-card-title>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
      ageWord: '',
      greetings: 'день'
    };
  },
  methods: {},
  mounted() {
    document.querySelector('.v-application--wrap').classList.remove('weather-bg');
    document.querySelector('.v-application--wrap').classList.add('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.remove('todo-bg');
    document.querySelector('.v-application--wrap').classList.remove('calculator-bg');

    this.age = new Date(new Date() - new Date('04/27/1995')).getFullYear() - 1970;
    let ageString = String(this.age);
    if (ageString[ageString.length - 1] == 0 || (ageString[ageString.length - 1] >= 5 && ageString[ageString.length - 1] <= 9)) {
      this.ageWord = 'лет';
    } else if (ageString[ageString.length - 1] == 1) {
      this.ageWord = 'год';
    } else {
      this.ageWord = 'года';
    }
  }
};
</script>
