<template>
  <label class="v-input">
    <p class="v-input__title">
      {{title}}
    </p>
    <select
      class="v-input__select"
      type="text"

      :value="value"
      @input="input"
    >
      <option 
        v-for="optionItem in option" :key="optionItem.id"
        :value="optionItem.id"
      >
        {{optionItem.name}}

      </option>
    </select>

  </label>
</template>

<script>
export default {
  props: {
    title: String,
    value: [String, Number],
    option: Array,
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