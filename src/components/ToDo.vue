<template>
  <v-container>
    <v-card v-for="task in tasks" :color="colorClass(task)" :key="task.name" class="my-3">
      <v-card-title>
        <v-icon v-if="task.done" class="mr-2" color="green">mdi-calendar-check-outline</v-icon>
        <v-icon v-if="!task.done && task.priority==3"  class="mr-2">mdi-calendar-blank-outline</v-icon>
        <v-icon v-if="!task.done && task.priority==2" color="" class="mr-2">mdi-calendar-alert</v-icon>
        <v-icon v-if="!task.done && task.priority==1" color="red" class="mr-2">mdi-calendar-alert</v-icon>
        {{ task.name }}
      </v-card-title>
      <v-card-text>{{ task.description }}</v-card-text>
      <v-card-text>{{ task.date.split('-').reverse().join('.') }}</v-card-text>
      <v-btn class="ma-3" color="green accent-2" v-if="!task.done" v-on:click="task.done = true"><v-icon>mdi-check</v-icon></v-btn>
      <v-btn v-bind:class="{ 'my-3': !task.done, 'ma-3': task.done }" color="red accent-2" v-on:click="removeTask(task.name)"><v-icon>mdi-delete-outline</v-icon></v-btn>
    </v-card>
    <v-card v-if="!showAddNew" v-on:click="showAddNew = !showAddNew" class="ma-12"
      ><v-card-title>Добавить <v-icon>mdi-plus</v-icon></v-card-title></v-card
    >
    <v-card v-if="showAddNew" class="my-3">
      <v-card-title>Добавление события</v-card-title>
      <v-row justify="center"><v-col cols="12" sm="8">
      <v-text-field v-model="addingName" class="ml-4" label="Наименование" outlined></v-text-field>
      <v-text-field v-model="addingDescription" class="ml-4" label="Описание" outlined></v-text-field>
      <v-select v-model="addingPriority" :items="priorities" class="ml-4" label="Приоритет" outlined></v-select>
      </v-col>
      <v-col cols="12" sm="4"><v-row justify="center">
    <v-date-picker
      v-model="addingDate"
      :allowed-dates="allowedDates"
      class="ma-4"
    ></v-date-picker>
  </v-row></v-col></v-row>
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
        { name: 'Сделать зарядку', date: '2021-03-16', description: 'Нужно по-любому сделать зарядку!!', priority: 1, done: false },
        { name: 'Выгулять кызю', date: '2021-03-19', description: 'Не забыть мешочки!', priority: 3, done: false },
        { name: 'Поздравить всех с праздником', date: '2021-03-08', description: 'Порадовать дорогих женщин', priority: 1, done: true },
        { name: 'Поздравить Дашу!', date: '2021-03-27', description: 'От чистого сердца!', priority: 2, done: false }
      ],
      showAddNew: false,
      addingName:'',
      addingDescription:'',
      addingDate: today.toLocaleDateString().split('/').reverse().join('-'),
      addingPriority: 3,
      priorities:[{text:'Очень важное',value:1},{text:'Важное',value:2},{text:'Обычное',value:3}]
    };
  },
  methods: {
    colorClass(task) {
      if(task.done){
        return 'green lighten-5'
      }
      if (task.date<today.toLocaleDateString().split('/').reverse().join('-')) {
        return '#FFD0D0';
      } else {
            return 'white';
      }
    },
    removeTask: function(name) {
      alert(name);
      this.tasks.pop(name)
    },
    addTask(){
      this.tasks.push({ name: this.addingName, date: this.addingDate, description: this.addingDescription, priority: this.addingPriority, done: false })
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
const today = new Date(timeElapsed);
</script>
