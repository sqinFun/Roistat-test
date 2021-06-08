<template>
  <label class="v-input">
    <p :class="['v-input__title', {'--error': error}]">
      {{title}}
    </p>
    <input
      class="v-input__input"
      type="text"
      :placeholder="placeholder"
      v-mask="mask"

      :value="value"
      @input="input"
    >

  </label>
</template>

<script>
export default {
  props: {
    title: String,
    value: [String, Number],
    placeholder: String,
    error: Boolean,
    mask: String,
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