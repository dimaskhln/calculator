// Про меня, про квн про общественную жизнь про навыки про то что пробовал в статистику про фронтенд про андроид про игрухи // Тест??? Работу хочу сменить //
потому что хочу развиваться дальше, а тут консервативно и к новому относятся с опаской, а я хочу пробовать использовать фреймворки, вот вью поковырял // первую
карточку надо сделать типа имя, возраст, образование и всё-такое
<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Добрый день!
      </v-card-title>
      <v-row
        ><v-col>
          <v-card-text>
            Меня зовут Дмитрий. Мне {{ age }} {{ ageWord }}. Я разработчик web-приложений. Мне нравится создавать удобные интерфейсы и наполнять приложения
            логикой.
          </v-card-text>
        </v-col>
        <v-col>
          <v-card-text> Меня зовут Дмитрий. Мне {{ age }} {{ ageWord }}. </v-card-text>
        </v-col></v-row
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      age: 26,
      ageWord: 'лет'
    };
  },
  methods: {},
  mounted() {
    document.querySelector('.v-application--wrap').classList.remove('weather-bg');
    document.querySelector('.v-application--wrap').classList.add('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.remove('todo-bg');
    document.querySelector('.v-application--wrap').classList.remove('calculator-bg');
  }
};
</script>
