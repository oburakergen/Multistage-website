<!--
  - Copyright (c) 2021/8/16 Burak ERGEN
  -->

<template>
  <div>
    <core-breadcrumb :items="breadcrumb" />
    <v-container class="mt-5">
      <v-row class="py-0">
        <v-col cols="12" class="py-0">
          <card-price />
        </v-col>
        <v-col cols="12" class="py-0 mt-5">
          <card-user />
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
                loading: true
            }
        };
    },
    head: {
        title: 'Laraplay | Admin Dashboard',
        description: 'asdasmdlkasmd'
    },
    mounted () {
        setTimeout(() => {
            this.breadcrumb.loading = false;
        }, 1500);
    }
};
</script>

<style scoped>

</style>
