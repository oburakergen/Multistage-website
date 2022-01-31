<!--
  - Copyright (c) 2021/8/14 Burak ERGEN
  -->

<template>
  <div style="height: 100%">
    <v-skeleton-loader
      v-if="$fetchState.pending"
      min-height="100vh"
      type="list-item@10"
    />
    <v-sheet
      v-else
      id="sidebar-right"
      elevation="2"
      height="100%"
    >
      <v-card min-height="100vh" height="100%">
        <v-list class="py-2">
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                Bura <button @click="$fetch">
                  asdasdasd
                </button>
              </v-list-item-title>
              <v-list-item-subtitle>
                sandra_a88@gmail.com
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-divider />

        <v-list dense nav flat>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
            color="info"
          >
            <template #activator>
              <v-list-item-content>
                <v-list-item-title v-text="$vuetify.lang.t(item.title)" />
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.items"
              :key="child.to"
              :nuxt="true"
              tag="a"
              :to="child.to"
              exact
              link
            >
              <v-list-item-content>
                <v-list-item-title v-text="$vuetify.lang.t(child.title)" />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
export default {
    name: 'Left',
    props: {
        user: {
            type: Object,
            default () {
                return {};
            }
        }
    },
    data () {
        return {
            items: [],
            control: false
        };
    },
    async fetch () {
        const _e = this;

        await this.$store.dispatch('sidebar/getLeftBarData', {
            path: this.$route.path
        }).then(() => {
            _e.control = !_e.control;
        });
    },
    watch: {
        control () {
            this.items = [...this.$store.getters['sidebar/leftBar']];
        }
    }
};
</script>

<style scoped>

.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0,0,0,0);
  transform: rotate3d(0,0,0,0);
  -webkit-transition:
      background-color 100ms ease-out,
      margin 100ms ease-out,
      height 100ms ease-out;
  transition:
      background-color 100ms ease-out,
      margin 100ms ease-out,
      height 100ms ease-out;
  background-color: rgba(48, 121, 244,.1);
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  height: calc(100% - 10px);
  display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244,.3);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
  background-color: rgba(48, 121, 244,.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244,.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244,.5);
}
</style>
