<template>
  <button class="button" @click="onClick">
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

<style lang="sass" scoped>
.button
  padding: 10px 20px
  border: none
  background: #007bff
  border-radius: 6px
  color: white
  cursor: pointer
  transition: background .1s
  &:hover,
  &:active
    background: #429af8

</style>