<!--
  - Copyright (c) 2021/8/29 Burak ERGEN
  -->

<template>
  <v-overlay :value="true" absolute>
    <v-progress-circular
      indeterminate
      size="64"
    />
  </v-overlay>
</template>

<script>
export default {
    name: 'Loading'
};
</script>

<style scoped>

</style>
