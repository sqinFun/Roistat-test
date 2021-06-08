<template>
  <div class="nested-table__header">
    <div
     class="nested-table__header-cell --name"
     :class="{'--active' :activeSortField === 'name'}"
     @click="setContactsSort('name')"
    >
      Имя
    </div>
    <div
     class="nested-table__header-cell --phone"
     :class="{'--active' :activeSortField === 'phone'}"
     @click="setContactsSort('phone')"
    >
      Телефон
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsTableRow',
  props: {
    contact: Object,
    activeSortField: String,
  },
  computed: {
    contactChildren() {
      return this.contact.children ?? []
    }
  },
  methods: {
    setContactsSort(field) {
      this.$emit('setContactsSort', field)
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
        cursor: pointer
        & + &
          margin-left: 1px
        &.--name
          flex-grow: 1
        &.--phone
          width: 200px
        &.--active
          font-weight: 600

</style>