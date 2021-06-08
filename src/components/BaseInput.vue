<template>
  <label class="v-input">
    <p class="v-input__title">
      {{title}}
    </p>
    <input
      class="v-input__input"
      type="text"

      :value="value"
      @input="input"
    >

  </label>
</template>

<script>
export default {
  props: {
    title: String,
    value: [String, Number]
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>