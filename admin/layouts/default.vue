<template>
  <v-app dark>
    <core-loading v-if="loading" />
    <!-- Left Side Bar Start-->
    <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      app
      absolute
      height="100%"
      width="270"
    >
      <header-left :user="userData" />
    </v-navigation-drawer>

    <!-- Left Side Bar End-->
    <!-- Navbar Start-->
    <v-app-bar
      app
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        v-text="title"
      />
      <header-search />
      <v-spacer />
      <core-flag />
      <core-theme />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navbar End-->
    <!-- Main Area start-->
    <v-main>
      <v-container v-if="!loading" fluid class="ma-0 pa-0">
        <div>Burada Bir test olsun</div>
        <nuxt keep-alive :keep-alive-props="{ exclude: ['modal'], max:3 }" />
      </v-container>
      <core-float-button v-if="deviceMobile" :mobile="isMobile" />
    </v-main>
    <!-- Main Area end-->
    <!-- Right Side Bar Start-->

    <!-- Right Side Bar End-->
    <!-- Footer Start-->
    <header-footer />
    <!-- Footer End-->
  </v-app>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            right: true,
            rightDrawer: false,
            title: 'Laraplay',
            userData: {
                name: 'burak',
                lastname: 'Ergen'
            },
            isMobile: false,
            deviceMobile: false,
            loading: true
        };
    },
    watch: {
        $route (to, from) {
            if (typeof Lap === 'object') {
                console.log(to, from);
            }
        }
    },
    mounted () {
        this.$nextTick(() => {
            const {
                start,
                finish
            } = this.$nuxt.$loading;

            start();

            setTimeout(function () {
                finish();

                if (typeof (window.theme || {}).device === 'string') {
                    this.isMobile = window.theme.device === 'mobile';
                    this.deviceMobile = window.theme.device !== 'mobile';
                    this.$store.commit('setToken', decodeURIComponent(window.Lap.storage.cookie.get('_token')));
                }

                this.loading = false;
            }.bind(this));
        });
    }
};
</script>

<style>

</style>
