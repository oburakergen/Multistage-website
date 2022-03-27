<template>
  <div class="menu-icon">
    <div class="icon-m">
      <b-icon v-if="active" icon="x" class="menu-icon-close" />
      <div v-else>
        <span class="menu-icon__line menu-icon__line-left" />
        <span class="menu-icon__line" />
        <span class="menu-icon__line menu-icon__line-right" />
      </div>
    </div>
    <div class="text-menu">
      <div v-if="control">
        Menu
      </div>
      <div v-else>
        <div v-if="active">
          Close
        </div>
        <div v-else>
          Open
        </div>
      </div>
      <!--        <div v-if="active">-->
      <!--          <div v-if="control">-->
      <!--            Close-->
      <!--          </div>-->
      <!--          <div v-else>-->
      <!--            Menu-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div v-else>-->
      <!--          Open-->
      <!--        </div>-->
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavbarIcon',
    props: {
        active: {
            type: Boolean,
            default: false
        },
        control: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
