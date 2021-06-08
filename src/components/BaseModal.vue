<template>
  <div class="modal-real-position">
    <div class="modal-container"
      ref="modal"
      @click.self="$emit('close')"
    >
      <div :class="['modal', modalClass]">
        <div class="modal__header">
          <p class="modal__title">
            {{title}}
          </p>
          <svg
            viewBox="0 0 511.992 511.992"
            xmlns="http://www.w3.org/2000/svg"
            class="modal__clean"

            @click="$emit('close')"
          >
            <path d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0"/>
          </svg>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    modalClass: {
      type: [String, Array],
    },
    title: [String, Number],
  },

  mounted() {
    this.appendModalToBody()
  },

  methods: {
    appendModalToBody() {
      document.querySelector('body').append(this.$refs.modal)
    },
    appendModalToRealPosition() {
      this.$el.append(this.$refs.modal)
    }
  },
  
  beforeDestroy() {
    this.appendModalToRealPosition()
  }

}
</script>

<style lang="sass" scoped>
.modal-container
  cursor: pointer
  position: fixed
  top: 0
  left: 0
  height: 100vh
  width: 100vw
  display: flex
  align-items: center
  justify-content: center

  background: rgba(black, .6)
.modal
  cursor: auto
  max-width: 400px
  padding: 20px 30px
  border-radius: 4px
  background: white
  &.--full
    width: 100%

  &__header
    margin-bottom: 20px
    display: flex
    justify-content: space-between
    align-items: baseline
    font-size: 14px

  &__title
    text-transform: uppercase
  
  &__clean
    height: 1em
    width: 1em
    flex-shrink: 0
    fill: #f55
    cursor: pointer
    transition: fill .2s
    &:hover
      fill: #f00

</style>