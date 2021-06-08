<template>
  <div class="nested-table__header">
    <div class="nested-table__header-cell --name">
      Имя
    </div>
    <div class="nested-table__header-cell --phone">
      Телефон
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsTableRow',
  props: {
    contact: Object,
  },
  computed: {
    contactChildren() {
      return this.contact.children ?? []
    }
  }
}
</script>

<style lang="sass" scoped>
  .nested-table
    &__header
      display: flex
      margin-bottom: 1px
      &-cell
        position: relative
        padding: 10px
        border-radius: 15px 15px 6px 6px
        background: #fafafa
        font-weight: 600
        cursor: pointer
        & + &
          margin-left: 1px
        &.--name
          flex-grow: 1
        &.--phone
          width: 200px

</style>