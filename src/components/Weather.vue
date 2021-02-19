<template>
  <v-container fluid
    ><v-card color="blue-grey lighten-5" max-width="450" class="mx-auto my-12 pa-6">
      <v-row>
        <v-col>
          <v-text-field v-model="number" label="Enter number" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select v-model="fromBase" :items="bases" label="From" outlined></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select v-model="toBase" :items="bases" label="To" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-btn class="mx-3 mb-3" color="green accent-2" v-on:click="convert()">Convert</v-btn>
      </v-row>
      <v-row
        ><v-card class="mx-3 mb-3 pa-3" elevation="2" outlined>Answer: {{ result }}</v-card></v-row
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bases: [
        { value: 2, text: 'Binary' },
        { value: 8, text: 'Octal' },
        { value: 10, text: 'Decimal' },
        { value: 16, text: 'Hexadecimal' }
      ],
      fromBase: '',
      toBase: '',
      number: 0,
      result: 0
    };
  },
  methods: {
    convert: function() {
      try {
        if (this.fromBase === void 0) {
          this.fromBase = 10;
        }
        if (this.toBase === void 0) {
          this.toBase = 10;
        }
        this.result = parseInt(this.number.toString(), this.fromBase)
          .toString(this.toBase)
          .toUpperCase();
      } catch (e) {
        console.error('Error in convertNumber: ' + e);
      }
    }
  }
};
</script>
