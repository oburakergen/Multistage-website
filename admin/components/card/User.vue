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
          <v-card>
            <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <p class="ma-0 text--disabled">
                    Total Profit
                  </p>
                </div>
                <div>
                  <v-menu offset-x>
                    <template #activator="{ on, attrs }">
                      <v-btn
                        color="greenlight"
                        icon
                        x-small
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon light>
                          mdi-format-list-bulleted
                        </v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        :key="0"
                        @click="searchPeriod('gün',index)"
                      >
                        {{ $vuetify.lang.t('$vuetify.userCart.time.day') }}
                      </v-list-item>
                      <v-list-item
                        :key="1"
                        @click="searchPeriod('hafta',index)"
                      >
                        {{ $vuetify.lang.t('$vuetify.userCart.time.week') }}
                      </v-list-item>
                      <v-list-item
                        :key="2"
                        @click="searchPeriod('aylık',index)"
                      >
                        {{ $vuetify.lang.t('$vuetify.userCart.time.month') }}
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </div>
              <h4>$42000</h4>
              <div class="d-flex justify-space-between flex-wrap align-center">
                <div class="d-flex align-center mt-2">
                  <div class="d-flex align-center mr-2">
                    <v-sheet elevation="3">
                      <v-icon
                        x-small
                        icon
                        color="green"
                      >
                        mdi-call-made
                      </v-icon>
                    </v-sheet>
                  </div>
                  <span class="success--text">+33.57</span>
                </div>
                <v-spacer />
                <div class="mt-2">
                  <p class="ma-0">
                    Bu Dönemdeki Kar ({{ period.text }})
                  </p>
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
            period: {
                time: 0,
                text: 'Aylık'
            },
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
    },
    methods: {
        searchPeriod (time) {
            this.period.time = Laraplay.dateHelper.getTime();
            this.period.text = time;
        }
    }
};
</script>

<style scoped>

</style>
