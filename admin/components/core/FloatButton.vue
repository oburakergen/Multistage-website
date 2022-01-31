<!--
  - Copyright (c) 2021/8/25 Burak ERGEN
  -->

<template>
  <div>
    <v-speed-dial
      v-model="fab"
      bottom
      right
      absolute
      direction="top"
      :open-on-hover="false"
      transition="slide-y-reverse-transition"
    >
      <template #activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          x-small
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
    name: 'FloatButton',
    props: {
        mobile: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            fab: false
        };
    }
};
</script>

<style scoped>
.v-main__wrap > div > .v-speed-dial {
  position: absolute;
}

.v-main__wrap > div > .v-btn--floating {
  position: relative;
}
</style>
