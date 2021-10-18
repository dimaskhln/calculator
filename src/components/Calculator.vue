<template>
  <v-card id="calc" max-width="450" class="mx-auto my-12 pa-6"
    ><v-container class="pa-0" elevation="3">
      <v-text-field
        outlined
        color="teal darken-4"
        class="teal-darken-4-input text-lg-h6"
        id="result"
        type="text"
        v-model="value"
        @keypress="isNumber($event)"
        placeholder="0"
      ></v-text-field>
      <v-row>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('7')">7</v-btn></v-col>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('8')">8</v-btn></v-col>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('9')">9</v-btn></v-col>
        <v-col cols="40"><v-btn color="red accent-2" elevation="5" v-on:click="reset()">C</v-btn></v-col>
      </v-row>
      <v-row>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('4')">4</v-btn></v-col>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('5')">5</v-btn></v-col>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('6')">6</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('add')"><v-icon>mdi-plus</v-icon></v-btn></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('1')">1</v-btn></v-col>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('2')">2</v-btn></v-col>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('3')">3</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('subtract')"><v-icon>mdi-minus</v-icon></v-btn></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('0')">0</v-btn></v-col>
        <v-col cols="40"><v-btn color="teal lighten-4" elevation="5" v-on:click="write('.')">.</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('multiply')"
            ><v-icon>mdi-multiplication</v-icon></v-btn
          ></v-col
        >
        <v-col cols="40"
          ><v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('divide')"><v-icon>mdi-division</v-icon></v-btn></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="40"
          ><v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('sqrt')"><v-icon>mdi-square-root</v-icon></v-btn></v-col
        >
        <v-col cols="40"
          ><v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('power')"><v-icon>mdi-exponent</v-icon></v-btn></v-col
        >
        <v-col cols="40"><v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('inverse')">1/x</v-btn></v-col>
        <v-col cols="40"
          ><v-btn color="green accent-2" elevation="5" v-on:click="equals()"><v-icon>mdi-equal</v-icon></v-btn></v-col
        >
      </v-row>
    </v-container>
    <v-badge v-if="isEqualPressed">asd</v-badge>
  </v-card>
</template>

<script>
import AppVue from '../App.vue';
export default {
  data() {
    return {
      value: '',
      value1: 0,
      value2: 0,
      action: '',
      done: false,
      isEqualPressed: false
    };
  },
  render: createElement => {
    const context = {
      props: { col: 'secondary' }
    };
    return createElement(AppVue, context);
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

      this.isEqualPressed = true;

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
    },
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },
  mounted() {
    document.getElementById('calc').classList.remove('theme--light');
    document.getElementById('calc').classList.add('matte-bg');
    document.querySelector('.v-application--wrap').classList.remove('weather-bg');
    document.querySelector('.v-application--wrap').classList.remove('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.remove('todo-bg');
    document.querySelector('.v-application--wrap').classList.add('calculator-bg');
    console.log(AppVue.col);
    AppVue.col = 'fff';
  }
};
</script>
