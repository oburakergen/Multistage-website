<!--
  - Copyright (c) Burak ERGEN 2022.
  -->

<template>
  <div>
    <core-breadcrumb :items="breadcrumb" />
    <v-container class="mt-5">
      <v-row class="py-0">
        <v-col cols="12" class="py-0 mb-5">
          <datatable-my-filter :items="filterData" />
        </v-col>
        <v-col cols="12" class="py-0 mb-5">
          <nuxt-child />
        </v-col>
        <v-col cols="12" class="py-0">
          <lazy-datatable-pagination />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data () {
        return {
            breadcrumb: {
                items: [
                    {
                        text: 'Dashboard',
                        disabled: true,
                        to: '/test'
                    },
                    {
                        text: 'Anasayfa',
                        disabled: false,
                        to: '/'
                    }
                ],
                loading: false
            },
            filterData: [
                { text: 'Ülkeler', active: true, href: '/setting/country/' },
                { text: 'İller', active: false, href: '/setting/country/city' },
                { text: 'İlçeler', active: false, href: '/setting/country/town' },
                { text: 'Semtler', active: false, href: '/setting/country/district' },
                { text: 'Sokaklar', active: false, href: '/setting/country/neighborhood' }
            ]
        };
    },
    head: {
        title: 'Laraplay | Country',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Country Page description'
            }
        ]
    }
};
</script>

<style scoped>

</style>
