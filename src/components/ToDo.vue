<template>
  <v-container>
    <v-card v-for="task in tasks" :color="colorClass(task)" :key="task.name" class="my-3">
      <v-card-title>
        <v-icon v-if="task.done" class="mr-2" color="green darken-4">mdi-calendar-check-outline</v-icon>
        <v-icon v-if="!task.done && task.priority == 3" class="mr-2">mdi-calendar-blank-outline</v-icon>
        <v-icon v-if="!task.done && task.priority == 2" color="" class="mr-2">mdi-calendar-alert</v-icon>
        <v-icon v-if="!task.done && task.priority == 1" color="red" class="mr-2">mdi-calendar-alert</v-icon>
        {{ task.name }}
      </v-card-title>
      <v-card-text
        >{{ task.description }} <br />{{
          task.date
            .split('-')
            .reverse()
            .join('.')
        }}</v-card-text
      >
      <v-btn class="ma-3" color="yellow  accent-1" v-if="!task.done" v-on:click="task.done = true"
        ><v-icon color="yellow darken-2">mdi-checkbox-blank-circle-outline</v-icon></v-btn
      >
      <v-btn class="ma-3" color="green accent-2" v-if="task.done" v-on:click="task.done = false"
        ><v-icon color="green darken-4">mdi-check-circle-outline</v-icon></v-btn
      >
      <v-btn class="my-3" color="red accent-1" v-on:click="removeTask(task.id)"><v-icon color="red darken-4">mdi-delete-outline</v-icon></v-btn>
    </v-card>
    <v-card v-if="!showAddNew" v-on:click="showAddNew = !showAddNew" class="ma-12"
      ><v-card-title>Добавить <v-icon>mdi-plus</v-icon></v-card-title></v-card
    >
    <v-card v-if="showAddNew" class="my-3">
      <v-card-title>Добавление события</v-card-title>
      <v-row justify="center"
        ><v-col cols="12" sm="8">
          <v-text-field v-model="addingName" class="ml-4" label="Наименование" outlined></v-text-field>
          <v-text-field v-model="addingDescription" class="ml-4" label="Описание" outlined></v-text-field>
          <v-select v-model="addingPriority" :items="priorities" class="ml-4" label="Приоритет" outlined></v-select>
        </v-col>
        <v-col cols="12" sm="4"
          ><v-row justify="center"> <v-date-picker v-model="addingDate" :allowed-dates="allowedDates" class="ma-4"></v-date-picker> </v-row></v-col
      ></v-row>
      <v-row>
        <v-btn color="green accent-2" v-on:click="addTask()"><v-icon>mdi-plus</v-icon></v-btn>
        <v-btn color="red accent-2" v-on:click="showAddNew = false"><v-icon>mdi-delete-outline</v-icon></v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 0, name: 'Сделать зарядку', date: '2021-03-16', description: 'Нужно по-любому сделать зарядку!!', priority: 1, done: false },
        { id: 1, name: 'Выгулять кызю', date: '2021-03-19', description: 'Не забыть мешочки!', priority: 3, done: false },
        { id: 2, name: 'Поздравить всех с праздником', date: '2021-03-08', description: 'Порадовать дорогих женщин', priority: 1, done: true },
        { id: 3, name: 'Поздравить Дашу!', date: '2021-03-27', description: 'От чистого сердца!', priority: 2, done: false }
      ],
      showAddNew: false,
      addingName: '',
      addingDescription: '',
      addingDate: today
        .toLocaleDateString()
        .split('.')
        .reverse()
        .join('-'),
      addingPriority: 3,
      priorities: [
        { text: 'Очень важное', value: 1 },
        { text: 'Важное', value: 2 },
        { text: 'Обычное', value: 3 }
      ]
    };
  },
  methods: {
    colorClass(task) {
      if (task.done) {
        return 'green lighten-5';
      }
      if (
        task.date <
        today
          .toLocaleDateString()
          .split('.')
          .reverse()
          .join('-')
      ) {
        return '#FFD0D0';
      } else {
        return 'white';
      }
    },
    removeTask: function(id) {
      this.tasks = this.tasks.filter(task => task.id != id);
    },
    addTask() {
      let maxId = Math.max.apply(
        Math,
        this.tasks.map(function(o) {
          return o.id;
        })
      );
      this.tasks.push({
        id: maxId + 1,
        name: this.addingName,
        date: this.addingDate,
        description: this.addingDescription,
        priority: this.addingPriority,
        done: false
      });
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
const timeElapsed = Date.now();
var date = new Date();
var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
console.log(date.toLocaleDateString('pt-BR', options));
const today = new Date(timeElapsed);
</script>
