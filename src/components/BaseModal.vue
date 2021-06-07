<template>
  <div class="modal-real-position">
    <div class="modal-container"
      ref="modal"
      @click.self="$emit('close')"
    >
      <div class="modal">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
// .modal-real-position
//   dispal: none

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
  max-width: 400px
  padding: 20px 30px
  border-radius: 4px
  background: white

</style>