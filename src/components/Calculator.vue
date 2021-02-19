<template>
  <v-card color="amber lighten-5" max-width="450" class="mx-auto my-12 pa-6"
    ><v-container class="pa-0" elevation="3">
      <v-text-field outlined class="text-lg-h6" id="result" type="text" v-model="value"></v-text-field>
      <v-row>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('7')">7</v-btn></v-col>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('8')">8</v-btn></v-col>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('9')">9</v-btn></v-col>
        <v-col cols="40"><v-btn color="red accent-2" elevation="5" v-on:click="reset()">C</v-btn></v-col>
      </v-row>
      <v-row>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('4')">4</v-btn></v-col>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('5')">5</v-btn></v-col>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('6')">6</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="blue lighten-1" elevation="5" v-on:click="remember('add')"><v-icon>mdi-plus</v-icon></v-btn></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('1')">1</v-btn></v-col>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('2')">2</v-btn></v-col>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('3')">3</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="blue lighten-1" elevation="5" v-on:click="remember('subtract')"><v-icon>mdi-minus</v-icon></v-btn></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('0')">0</v-btn></v-col>
        <v-col cols="40"><v-btn color="blue lighten-5" elevation="5" v-on:click="write('.')">.</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="blue lighten-1" elevation="5" v-on:click="remember('multiply')"><v-icon>mdi-multiplication</v-icon></v-btn></v-col
        >
        <v-col cols="40"
          ><v-btn color="blue lighten-1" elevation="5" v-on:click="remember('divide')"><v-icon>mdi-division</v-icon></v-btn></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="40"
          ><v-btn color="blue lighten-1" elevation="5" v-on:click="remember('sqrt')"><v-icon>mdi-square-root</v-icon></v-btn></v-col
        >
        <v-col cols="40"
          ><v-btn color="blue lighten-1" elevation="5" v-on:click="remember('power')"><v-icon>mdi-exponent</v-icon></v-btn></v-col
        >
        <v-col cols="40"><v-btn color="blue lighten-1" elevation="5" v-on:click="remember('inverse')">1/x</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="green accent-2" elevation="5" v-on:click="equals()"><v-icon>mdi-equal</v-icon></v-btn></v-col
        >
      </v-row>
    </v-container></v-card
  >
</template>

<script>
export default {
  data() {
    return {
      value: '0',
      value1: 0,
      value2: 0,
      action: '',
      done: false
    };
  },
  methods: {
    write: function(number) {
      number == '.' ? (this.value += number) : this.value == '0' ? (this.value = number) : (this.value += number);
    },
    reset: function() {
      this.value = '0';
      this.value1 = 0;
      this.value2 = 0;
      this.action = '';
      this.done = false;
    },
    remember: function(act) {
      this.done = false;
      if (act === 'sqrt') {
        this.value = Math.sqrt(this.value);
      } else {
        if (act === 'inverse') {
          this.value = 1 / this.value;
        } else {
          this.value1 = Number(this.value);
          this.value = '0';
          this.action = act;
        }
      }
    },
    equals: function() {
      if (!this.done) {
        this.value2 = Number(this.value);
      }

      switch (this.action) {
        case 'add':
          this.value1 = this.value = this.value1 + this.value2;
          this.done = true;
          break;
        case 'subtract':
          this.value1 = this.value = this.value1 - this.value2;
          this.done = true;
          break;
        case 'multiply':
          this.value1 = this.value = this.value1 * this.value2;
          this.done = true;
          break;
        case 'divide':
          this.value1 = this.value = this.value1 / this.value2;
          this.done = true;
          break;
        case 'power':
          this.value1 = this.value = this.value1 ** this.value2;
          this.done = true;
          break;
      }
    }
  }
};
</script>
