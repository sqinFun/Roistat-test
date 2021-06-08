<template>
  <label :class="['v-input', {'--focus': isFocus}]">
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
      @focus="focus"
      @blur="blur"
    >
    <div class="v-input__error-modal" v-if="error && errorMessage">
      <p class="v-input__error-text">{{errorMessage}}</p>
    </div>

  </label>
</template>

<script>
export default {
  props: {
    title: String,
    value: [String, Number],
    placeholder: String,
    error: Boolean,
    errorMessage: [String, Number],
    mask: String,
  },
  data: ()=> ({
    isFocus: false,
  }),
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    },
    focus(e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    blur(e) {
      this.isFocus = false
      this.$emit('blur', e)
    }
  }
}
</script>

<style>

</style>