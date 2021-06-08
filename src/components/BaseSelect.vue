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
    <!-- По-хорошему надо завести компонент под иконки -->
    <svg
      v-if="canClean"

      viewBox="0 0 511.992 511.992"
      xmlns="http://www.w3.org/2000/svg"
      class="v-input__clean"

      @click="clean"
    >
      <path d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0"/>
    </svg>

  </label>
</template>

<script>
export default {
  props: {
    title: String,
    value: [String, Number],
    option: Array,
  },
  computed: {
    canClean() {
      return this.value ?? false
    }
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    },
    clean() {
      this.$emit('input', null)
    }
  }
}
</script>

<style>

</style>