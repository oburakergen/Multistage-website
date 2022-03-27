<template>
  <div class="cursor">
    <div class="cursor-helper cursor-view">
      <span>View</span>
    </div>

    <div class="cursor-helper cursor-close">
      <span>Close</span>
    </div>

    <div class="cursor-helper cursor-link" />
  </div>
</template>

<script>
export default {
    name: 'MouseEffect',
    data () {
        return {};
    },
    mounted () {}
};
</script>

<style lang="scss" scoped>
@mixin transition($value) {
  transition: $value;
  -webkit-transition: $value;
  -o-transition: $value;
  -moz-transition: $value;
}
.ball {
  width: 7.6rem;
  height: 7.6rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border-radius: 50%;
  z-index: 999;
  transform: scale(0.3) translate(-50%, -50%);
  mix-blend-mode: exclusion;
}
</style>
