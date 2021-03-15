<template>
  <v-container>
    <v-card v-for="task in tasks" :color="colorClass(task)" :key="task.name" class="my-3">
      <v-card-title>{{ task.name }}</v-card-title>
      <v-card-text>{{ task.description }}</v-card-text>
      <v-card-text>{{ task.date }}</v-card-text>
      <v-btn class="ma-3" color="green accent-2" v-if="!task.done" v-on:click="task.done = true"><v-icon>mdi-check</v-icon></v-btn>
      <v-btn v-bind:class="{ 'my-3': !task.done, 'ma-3': task.done }" color="red accent-2"><v-icon>mdi-delete-outline</v-icon></v-btn>
    </v-card>
    <v-card class="ma-3"
      ><v-card-title>Добавить <v-icon>mdi-plus</v-icon></v-card-title></v-card
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { name: 'Сделать зарядку', date: '16.03.2021', description: 'Нужно по-любому сделать зарядку!!', priority: 1, done: false },
        { name: 'Выгулять кызю', date: '19.03.2021', description: 'Не забыть мешочки!', priority: 3, done: false },
        { name: 'Поздравить всех с праздником', date: '08.03.2021', description: 'Порадовать дорогих женщин', priority: 1, done: true },
        { name: 'Поздравить Дашу!', date: '27.03.2021', description: 'От чистого сердца!', priority: 2, done: false }
      ]
    };
  },
  methods: {
    colorClass(task) {
      if (task.done) {
        return 'green lighten-5';
      } else {
        switch (task.priority) {
          case 1:
            return '#FFD0D0';
          case 2:
            return '#FFF5F5';
          case 3:
            return 'white';
          default:
            return 'white';
        }
      }
    }
  },
  mounted() {
    document.querySelector('.v-application--wrap').classList.remove('weather-bg');
    document.querySelector('.v-application--wrap').classList.remove('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.remove('calculator-bg');
    document.querySelector('.v-application--wrap').classList.add('todo-bg');
  },
  computed: {}
};
/* 
TODO:
Сортировка
выбор даты
Удаление
Календарь задач
Добавление
*/
</script>
