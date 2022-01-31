<!--
  - Copyright (c) 2021/8/25 Burak ERGEN
  -->

<template>
  <v-footer
    :absolute="true"
    :app="true"
    :inset="true"
  >
    <span style="text-align: left">&copy; Laraplay {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style scoped>

</style>
