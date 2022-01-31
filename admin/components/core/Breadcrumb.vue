<!--
  - Copyright (c) 2021/8/16 Burak ERGEN
  -->

<template>
  <v-sheet elevation="3" class="ma-0 pa-0">
    <v-skeleton-loader
      class="mx-auto"
      type="card-heading"
      :loading="items.loading"
    >
      <v-card
        outlined
      >
        <v-card-text class="py-0">
          <v-breadcrumbs
            :items="items.items"
            divider=">"
            large
          />
        </v-card-text>
        <div v-if="isMobile">
          <core-float-button :mobile="isMobile" />
        </div>
      </v-card>
    </v-skeleton-loader>
  </v-sheet>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: {
        items: {
            type: Object,
            default () {
                return {};
            }
        }
    },
    data () {
        return {
            isMobile: false
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

                if (typeof (window.theme || {}).device === 'string') {
                    this.isMobile = window.theme.device === 'mobile';
                } else {
                    this.fallbackDevice();
                }
            }.bind(this), 500);
        });
    },
    methods: {
        fallbackDevice () {
            setTimeout(function () {
                this.isMobile = window.theme.device === 'mobile';
            }.bind(this), 2500);
        }
    }
};
</script>

<style scoped>

</style>
