<!--
  - Copyright (c) 2021/8/16 Burak ERGEN
  -->

<template>
  <v-row>
    <v-col
      v-for="(item,index) in items"
      :key="index"
      cols="12"
      lg="3"
      md="3"
      sm="6"
      xs="12"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="card-heading"
        :loading="loading"
      >
        <v-sheet elevation="3">
          <v-card
            outlined
          >
            <v-card-text class="pa-5">
              <div class="d-flex align-center">
                <v-btn
                  class="mx-2"
                  icon
                  fab
                  :color="item.color"
                  elevation="4"
                >
                  <v-icon light>
                    {{ item.icon }}
                  </v-icon>
                </v-btn>
                <div class="ml-2 mr-1">
                  <h2 class="headline font-weight-light">
                    {{ item.price }}
                  </h2>
                  <h5 class="subtitle-2 font-weight-regular">
                    {{ item.text }}
                  </h5>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    icon: 'mdi-wallet',
                    color: 'primary',
                    text: 'Toplam',
                    price: 0
                },
                {
                    icon: 'mdi-cart',
                    color: 'success',
                    text: 'Toplam',
                    price: 0
                },
                {
                    icon: 'mdi-account-multiple',
                    color: 'warning',
                    text: 'Toplam',
                    price: 0
                },
                {
                    icon: 'mdi-alarm',
                    color: 'secondary',
                    text: 'Toplam',
                    price: 0
                }
            ],
            loading: true
        };
    },
    mounted () {
        this.loading = false;
    }
};
</script>

<style scoped>

</style>
