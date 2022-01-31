<!--
  - Copyright (c) 2021/8/24 Burak ERGEN
  -->

<template>
  <div>
    <v-btn class="ma-0 pa-0" icon :loading="loading" @click="changeLocale(1)">
      <span :class="flag" />
    </v-btn>
  </div>
</template>

<script>
export default {
    name: 'Flag',
    data () {
        return {
            flag: 'flag-icon flag-icon-tr',
            loading: true
        };
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
                this.changeLocale(0);
            }.bind(this), 500);
        });
    },
    methods: {
        changeLocale (id) {
            this.loading = true;
            let lang = this.$vuetify.lang.current;

            if (id === 1) {
                this.$vuetify.lang.current = ((lang === 'tr') ? 'en' : 'tr');
            }

            lang = this.$vuetify.lang.current;
            this.flag = ((lang === 'tr') ? 'flag-icon flag-icon-tr' : 'flag-icon flag-icon-gb');

            setTimeout(function () {
                if (typeof (window.theme || {}).lang === 'function') {
                    window.theme.lang();
                    this.loading = false;
                } else {
                    this.fallbackLang();
                }
            }.bind(this), 500);
        },
        fallbackLang () {
            setTimeout(function () {
                typeof window.theme.lang === 'function' && window.theme.lang();
                this.loading = false;
            }.bind(this), 2500);
        }
    }
};
</script>

<style scoped>
.flag-icon {
  height: 22px;
  width: 22px;
}
</style>
