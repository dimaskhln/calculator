<template>
  <v-container fluid
    ><v-card id="btb" max-width="1050" class="mx-auto my-12 pa-6">
      <v-row>
        <v-col>
          <v-text-field v-model="number" label="Число" outlined @keypress="isNumber($event)"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select v-model="fromBase" :items="basesFrom" label="Из" outlined></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="1">
          <v-btn icon color="primary" v-on:click="changeBases()">
            <v-icon>mdi-cached</v-icon>
          </v-btn></v-col
        >
        <v-col class="d-flex" cols="12" sm="5">
          <v-select v-model="toBase" :items="basesTo" label="В" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-btn class="mx-3 mb-3" color="green accent-2" v-on:click="convert()">Перевести</v-btn>
      </v-row>
      <v-row
        ><v-card v-if="result != 0" class="mx-3 mb-3 pa-3" elevation="2" outlined
          >Результат: <b>{{ result }}</b></v-card
        ></v-row
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      basesFrom: [
        { value: 2, text: 'Двоичной' },
        { value: 8, text: 'Восьмеричной' },
        { value: 10, text: 'Десятичной' },
        { value: 16, text: 'Шестнадцатеричной' }
      ],
      basesTo: [
        { value: 2, text: 'Двоичную' },
        { value: 8, text: 'Восьмеричную' },
        { value: 10, text: 'Десятичную' },
        { value: 16, text: 'Шестнадцатеричную' }
      ],
      fromBase: '',
      toBase: '',
      number: '',
      result: 0,
      transit: ''
    };
  },
  methods: {
    convert: function() {
      try {
        if (this.number == '') {
          this.result = 'Введите число';
        } else {
          if (this.fromBase === void 0) {
            this.fromBase = 10;
          }
          if (this.toBase === void 0) {
            this.toBase = 10;
          }
          this.result = parseInt(this.number.toString(), this.fromBase)
            .toString(this.toBase)
            .toUpperCase();
        }
      } catch (e) {
        console.error('Error in convertNumber: ' + e);
      }
    },
    changeBases: function() {
      this.transit = this.fromBase;
      this.fromBase = this.toBase;
      this.toBase = this.transit;
      if (this.number != '' && this.result != '') {
        this.transit = this.number;
        this.number = this.result;
        this.result = this.transit;
      }
    },
    isNumber: function(evt) {
      // TODO: добавить поддержку букв a, b, c, d, e и f для ввода чисел в шестнадцатеричной системе
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
    document.getElementById('btb').classList.remove('theme--light');
    document.getElementById('btb').classList.add('matte-bg');
    document.querySelector('.v-application--wrap').classList.remove('weather-bg');
    document.querySelector('.v-application--wrap').classList.add('basetobase-bg');
    document.querySelector('.v-application--wrap').classList.remove('todo-bg');
    document.querySelector('.v-application--wrap').classList.remove('calculator-bg');
  }
};
</script>
