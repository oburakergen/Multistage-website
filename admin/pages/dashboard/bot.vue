<!--
  - Copyright (c) 2021/8/21 Burak ERGEN
  -->

<template>
  <div>
    <core-breadcrumb :items="breadcrumb" />
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
                        disabled: false,
                        to: '/',
                        exact: true
                    },
                    {
                        text: 'Bot',
                        disabled: false,
                        to: '/bot',
                        exact: true
                    }
                ],
                loading: true
            }
        };
    },
    mounted () {
        this.breadcrumb.loading = false;
    }
};
</script>

<style scoped>

</style>
