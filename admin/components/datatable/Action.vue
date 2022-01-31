<!--
  - Copyright (c) Burak ERGEN 2022.
  -->

<template>
  <div>
    <v-menu
      bottom
      transition="scale-transition"
      offset-y="offset-y"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          :color="published ? 'green' : 'secondary'"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ tablename }}
        </v-btn>
      </template>

      <v-list dense min-width="180px">
        <v-subheader>İşlemler</v-subheader>
        <v-list-item-group>
          <v-list-item @click="edit(uuid)">
            <v-list-item-icon>
              <v-icon> mdi-pencil </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Güncelle</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="remove(uuid)">
            <v-list-item-icon>
              <v-icon> mdi-delete </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Kaldır</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="published" @click="remove(uuid,0)">
            <v-list-item-icon>
              <v-icon> mdi-publish-off </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Yayından Kaldır</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else @click="remove(uuid,1)">
            <v-list-item-icon>
              <v-icon> mdi-publish </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Yayına Al</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    name: 'Action',
    props: {
        edit: {
            type: Function,
            required: true,
            default: () => {
                console.log('Edit Component Not Loaded.');
            }
        },
        remove: {
            type: Function,
            required: true,
            default: () => {
                console.log('Remove Component Not Loaded.');
            }
        },
        uuid: {
            type: String,
            required: true
        },
        active: {
            type: Function,
            required: true
        },
        published: {
            type: Number,
            required: true
        },
        tablename: {
            type: String,
            required: false,
            default: 'İşlemler'
        }
    }
};
</script>

<style scoped>

</style>
