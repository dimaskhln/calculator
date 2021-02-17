<template>
  <v-container class="pa-0" elevation="3">
    <div id="calculator">
      <v-text-field id="result" type="text" v-model="value"></v-text-field>
      <v-row>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('7')">7</v-btn></v-col>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('8')">8</v-btn></v-col>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('9')">9</v-btn></v-col>
        <v-col cols="40"><v-btn color="primary" elevation="5" v-on:click="reset()">C</v-btn></v-col>
      </v-row>
      <v-row>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('4')">4</v-btn></v-col>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('5')">5</v-btn></v-col>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('6')">6</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="primary" elevation="5" v-on:click="remember('add')"><v-icon>mdi-plus</v-icon></v-btn></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('1')">1</v-btn></v-col>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('2')">2</v-btn></v-col>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('3')">3</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="primary" elevation="5" v-on:click="remember('subtract')"><v-icon>mdi-minus</v-icon></v-btn></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="40"><v-btn color="secondary" elevation="5" v-on:click="write('0')">0</v-btn></v-col>
        <v-col cols="40"><v-btn color="primary" elevation="5" v-on:click="write('.')">.</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="primary" elevation="5" v-on:click="remember('multiply')"><v-icon>mdi-multiplication</v-icon></v-btn></v-col
        >
        <v-col cols="40"
          ><v-btn color="primary" elevation="5" v-on:click="remember('divide')"><v-icon>mdi-division</v-icon></v-btn></v-col
        >
        <v-col cols="40"
          ><v-btn color="primary" elevation="5" v-on:click="equals()"><v-icon>mdi-equal</v-icon></v-btn></v-col
        >
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  el: '#calculator',
  data() {
    return {
      value: '0',
      value1: 0,
      value2: 0,
      action: ''
    };
  },
  methods: {
    write: function(number) {
      number == '.' ? (this.value += number) : this.value == '0' ? (this.value = number) : (this.value += number);
    },
    reset: function() {
      this.value = '0';
    },
    remember: function(act) {
      this.value1 = Number(this.value);
      this.value = '0';
      this.action = act;
    },
    equals: function() {
      this.value2 = Number(this.value);
      switch (this.action) {
        case 'add':
          this.value = this.value1 + this.value2;
          break;
        case 'subtract':
          this.value = this.value1 - this.value2;
          break;
        case 'multiply':
          this.value = this.value1 * this.value2;
          break;
        case 'divide':
          this.value = this.value1 / this.value2;
          break;
      }
    }
  }
};
</script>
