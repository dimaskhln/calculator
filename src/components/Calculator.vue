<template>
  <v-card id="calc" max-width="450" class="mx-auto my-12 pa-6">
    <v-container class="pa-0" elevation="3">
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
      <v-row align="center" justify="space-around" class="mb-5">
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('7')">7</v-btn>
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('8')">8</v-btn>
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('9')">9</v-btn>
        <v-btn color="red accent-2" elevation="5" v-on:click="reset()">C</v-btn>
      </v-row>
      <v-row align="center" justify="space-around" class="mb-5">
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('4')">4</v-btn>
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('5')">5</v-btn>
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('6')">6</v-btn>
        <v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('add')"><v-icon>mdi-plus</v-icon></v-btn>
      </v-row>
      <v-row align="center" justify="space-around" class="mb-5">
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('1')">1</v-btn>
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('2')">2</v-btn>
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('3')">3</v-btn>
        <v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('subtract')"><v-icon>mdi-minus</v-icon></v-btn>
      </v-row>
      <v-row align="center" justify="space-around" class="mb-5">
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('0')">0</v-btn>
        <v-btn color="teal lighten-4" elevation="5" v-on:click="write('.')">.</v-btn>
        <v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('multiply')"><v-icon>mdi-multiplication</v-icon></v-btn>
        <v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('divide')"><v-icon>mdi-division</v-icon></v-btn>
      </v-row>
      <v-row align="center" justify="space-around" class="mb-3">
        <v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('sqrt')"><v-icon>mdi-square-root</v-icon></v-btn>
        <v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('power')"><v-icon>mdi-exponent</v-icon></v-btn>
        <v-btn color="teal darken-4 teal--text text--lighten-5" elevation="5" v-on:click="remember('inverse')">1/x</v-btn>
        <v-btn color="green accent-2" elevation="5" v-on:click="equals()"><v-icon>mdi-equal</v-icon></v-btn>
      </v-row>
    </v-container>
    <v-container class="pa-0 mb-0" elevation="3">
      <v-alert class="mt-6 mb-0" v-if="isEqualPressed" text color="light-blue darken-4"
        ><b>{{ $t('CALC_whatIfThisIsMySalary') }}</b
        ><br /><br />{{ salaryText }}</v-alert
      >
    </v-container>
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
      isEqualPressed: false,
      salaryText: ''
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
      if (this.isEqualPressed) {
        this.value = '';
        this.isEqualPressed = false;
      }
      number == '.' ? (this.value += number) : this.value == '0' ? (this.value = number) : (this.value += number);
    },
    reset: function() {
      this.value = '0';
      this.value1 = 0;
      this.value2 = 0;
      this.action = '';
      this.done = false;
      this.isEqualPressed = false;
    },
    remember: function(act) {
      console.log(act);
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
      } // Сдобрить эмодзями ↓
      if (this.value - 60000 <= 5000 && this.value - 60000 >= -5000) {
        this.salaryText = this.$t('CALC_okSalary'); //'Да, такая зарплата меня устроит (на начальном этапе)';
      } else if (this.value - 60000 < -20000) {
        this.salaryText = this.$t('CALC_poorSalary'); //'Если это моя будущая зарплата, то попробуйте, пожалуйста, ещё раз';
      } else if (this.value - 60000 < -5000 && this.value - 60000 >= -20000) {
        this.salaryText = this.$t('CALC_lowSalary'); //'Близко к моей желаемой зарплате, но хочется большего';
      } else if (this.value - 60000 > 5000 && this.value - 60000 <= 45000) {
        this.salaryText = this.$t('CALC_highSalary'); //'Если это моя будущая зарплата, то считайте мы договорились'; // Что-то придумать другое
      } else if (this.value - 60000 > 45000) {
        this.salaryText = this.$t('CALC_superSalary'); //'Пока можно начальство такими числами не пугать (ключевое слово "пока")';
      }
      this.isEqualPressed = true;
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
  created() {
    window.addEventListener('keydown', e => {
      switch (e.code) {
        case 'Numpad1' || 'Digit1':
          this.write('1');
          break;
        case 'Numpad2' || 'Digit2':
          this.write('2');
          break;
        case 'Numpad3' || 'Digit3':
          this.write('3');
          break;
        case 'Numpad4' || 'Digit4':
          this.write('4');
          break;
        case 'Numpad5' || 'Digit5':
          this.write('5');
          break;
        case 'Numpad6' || 'Digit6':
          this.write('6');
          break;
        case 'Numpad7' || 'Digit7':
          this.write('7');
          break;
        case 'Numpad8' || 'Digit8':
          this.write('8');
          break;
        case 'Numpad9' || 'Digit9':
          this.write('9');
          break;
        case 'Numpad0' || 'Digit0':
          this.write('0');
          break;
        case 'NumpadDecimal' || 'Period':
          this.write('.');
          break;
        case 'NumpadDivide' || 'Slash':
          this.remember('divide');
          break;
        case 'NumpadMultiply':
          this.remember('multiply');
          break;
        case 'NumpadSubtract' || 'Minus':
          this.remember('subtract');
          break;
        case 'NumpadAdd':
          this.remember('add');
          break;
        case 'NumpadEnter' || 'Enter' || 'Equal':
          this.equals();
          break;
        case 'Escape':
          this.reset();
          break;
        case 'Backspace':
          if (this.value != '0') {
            this.value = this.value.substr(0, this.value.length - 1);
          }

          break;
      }
    });
  },
  mounted() {
    document.getElementById('calc').classList.remove('theme--light');
    document.getElementById('calc').classList.add('matte-bg');
    document.querySelector('.v-application--wrap').classList.remove('weather-bg');
    document.querySelector('.v-application--wrap').classList.remove('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.remove('todo-bg');
    document.querySelector('.v-application--wrap').classList.add('calculator-bg');
    document.title = this.$t('TITLE_calculator');
  }
};
</script>
