<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }

}
</script>

<style>

</style>