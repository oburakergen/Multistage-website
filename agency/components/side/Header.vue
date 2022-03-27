<template>
  <div class="nav-header">
    <!--    Url Lİnk-->
    <div class="header-container">
      <b-navbar toggleable type="dark" variant="dark" fixed="top" class="nav-type">
        <b-navbar-brand href="#" class="logo">
          <nuxt-img src="/img/logo-white.png" alt="logo" />
        </b-navbar-brand>

        <div
          @mouseover="control = false"
          @mouseleave="control = true"
        >
          <b-navbar-toggle
            target="navbar-toggle-collapse"
            @click="toggleBody"
          >
            <template #default="{ expanded }">
              <core-navbar-icon :active="expanded" :control="control" />
            </template>
          </b-navbar-toggle>
        </div>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto" align="center">
            <b-nav-item href="#">
              Link 1
            </b-nav-item>
            <b-nav-item href="#">
              Link 2
            </b-nav-item>
            <b-nav-item href="#" disabled>
              Disabled
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            a: false,
            control: true
        };
    },
    mounted () {
    },
    methods: {
        toggleBody () {
            const element = document.querySelector('body');

            element.classList.toggle('nav-active');
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 99;
  width: 100%;
  .site-header {
  }
}
</style>
