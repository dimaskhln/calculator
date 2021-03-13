<template>
  <v-footer fixed v-bind:color="col" padless>
    <v-row justify="center" no-gutters>
      <v-col class="py-4 text-center white--text" v-bind:color="col" cols="12">
        {{ new Date().getFullYear() }} — <strong>Дмитрий Халин {{ col }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: ['col']
};
</script>
