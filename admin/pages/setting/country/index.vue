<!--
  - Copyright (c) Burak ERGEN 2022.
  -->

<template>
  <div>
    <v-skeleton-loader
      v-if="skeletonLoading"
      class="mb-6"
      elevation="2"
      type="table"
    />
    <v-card
      v-else
      class="mx-auto pa-3"
      :loading="loading"
      :disabled="loading"
      elevation="3"
    >
      <v-data-table
        :headers="headers"
        :items="countries"
        class="elevation-0"
        loading-text="Loading... Please wait"
        hide-default-footer
        disable-pagination
        disable-filtering
      >
        <template #[`item.uuid`]="{ item }">
          <lazy-datatable-action
            :edit="editItem"
            :remove="deleteItem"
            :active="activeItem"
            :published="(parseInt(item.active,10) || 0)"
            :uuid="item.uuid"
          />
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
    data () {
        return {
            filterData: [
                { text: 'Ülkeler', active: true },
                { text: 'İller', active: true },
                { text: 'İlçeler', active: true },
                { text: 'Semtler', active: true },
                { text: 'Sokaklar', active: true }
            ],
            skeletonLoading: true,
            loading: false,
            countries: [],
            headers: [
                { text: 'City Name', value: 'countryName' },
                { text: 'action', value: 'uuid', align: 'right' }
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
    },
    mounted () {
        const _e = this;

        this.$store.dispatch('country/getCountryList', {
            path: this.$route.path
        }).then((r) => {
            const data = _e.$store.state.setting.countries;

            _e.skeletonLoading = false;
            _e.countries = data.items;
        });
    },
    methods: {
        editItem (item) {
            console.log('editde', item);
            // this.editedIndex = this.countries.indexOf(item);
            // this.editedItem = Object.assign({}, item);
            // this.dialog = true;
        },
        deleteItem (item) {
            console.log('içerde', item);
            // this.editedIndex = this.countries.indexOf(item);
            // this.editedItem = Object.assign({}, item);
            // this.dialogDelete = true;
        },
        activeItem (item, type) {
            console.log('active', item);
        }
    }
};
</script>

<style scoped>

</style>
