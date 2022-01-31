<!--
  - Copyright (c) 2021/8/16 Burak ERGEN
  -->

<template>
  <v-autocomplete
    id="search"
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    hide-no-data
    hide-details
    dense
    label="Ara... (ctrl + /)"
    solo
    class="ml-5 hidden-xs-only"
    rounded
  />
</template>

<script>
export default {
    name: 'Search',
    data () {
        return {
            loading: false,
            items: [],
            search: null,
            select: null,
            states: [
            ]
        };
    },
    watch: {
        search (val) {
            val && val !== this.select && this.querySelections(val);
        },
        select () {
            console.log('asd');
        }
    },
    mounted () {

    },
    methods: {
        querySelections (v) {
            this.loading = true;
            // Simulated ajax query
            setTimeout(() => {
                this.items = this.states.filter((e) => {
                    return (e || '').toLowerCase().includes((v || '').toLowerCase());
                });
                this.loading = false;
            }, 500);
        }
    }
};
</script>

<style scoped>

</style>
