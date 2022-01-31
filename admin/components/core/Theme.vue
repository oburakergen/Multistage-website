<!--
  - Copyright (c) 2021/8/25 Burak ERGEN
  -->

<template>
  <v-btn
    fab
    dark
    :color="color"
    icon
    small
    :loading="loader"
    @click="theme"
  >
    <v-icon dark>
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
    name: 'Theme',
    data () {
        return {
            icon: 'mdi-lightbulb-on',
            color: '#FAFAFA',
            loader: true
        };
    },
    mounted () {
        this.$nextTick(() => {
            this.getTheme();
        });
    },
    methods: {
        theme () {
            this.loader = true;
            let color = 'light';

            if (((window.theme || {}).getColour ||
              Lap.storage.localStorage.get('admin-site-theme')) !== 'light') {
                this.icon = 'mdi-lightbulb-off';
                this.color = '#212121';
            } else {
                color = 'dark';
                this.color = '#FAFAFA';
                this.icon = 'mdi-lightbulb';
            }

            setTimeout(function () {
                (window.theme || {}).setColour(color);
                this.loader = false;
            }.bind(this), 500);
        },
        getTheme () {
            if (((window.theme || {}).getColour ||
              Lap.storage.localStorage.get('admin-site-theme')) !== 'light') {
                this.color = '#FAFAFA';
                this.icon = 'mdi-lightbulb';
            } else {
                this.icon = 'mdi-lightbulb-off';
                this.color = '#212121';
            }

            this.loader = false;

            return ((window.theme || {}).getColour ||
              Lap.storage.localStorage.get('admin-site-theme'));
        }
    }
};
</script>

<style scoped>

</style>
