<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-text-field v-model="value" label="Enter number" outlined></v-text-field>
      </v-col>
      <p>{{ value }}</p>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select id="from-select" :items="bases" label="From" outlined></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select id="to-select" :items="bases" label="To" outlined></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bases: ['Binary', 'Octal', 'Decimal', 'Hexadecimal']
    };
  },
  methods: {
    convert: () => {}
  }
};
</script>
