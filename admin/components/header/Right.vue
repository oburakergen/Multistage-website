<!--
  - Copyright (c) 2021/8/16 Burak ERGEN
  -->

<template>
  <div>
    <v-sheet elevation="2">
      <v-list dense>
        <v-list-item
          v-for="item in user"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
  </div>
</template>

<script>
export default {
    name: 'Right',
    props: {
        user: {
            type: Object,
            default () {
                return {};
            }
        }
    }
};
</script>

<style scoped>

</style>
