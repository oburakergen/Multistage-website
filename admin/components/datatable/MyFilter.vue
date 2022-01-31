<!--
  - Copyright (c) Burak ERGEN 2022.
  -->

<template>
  <div>
    <v-card
      class="mx-auto pa-3"
      elevation="3"
    >
      <v-tabs fixed-tabs>
        <v-tab v-for="(item,index) in items" :key="index" :to="item.href" exact v-text="item.text" />
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'MyFilter',
    props: {
        items: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>

</style>
