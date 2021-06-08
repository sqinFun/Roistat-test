<template>
  <div class="nested-table__row-wrap">
    <div class="nested-table__row">
      <div class="nested-table__cell --name">
        {{contact.name}}
      </div>
      <div class="nested-table__cell --phone">
        {{contact.phone}}
      </div>
    </div>
    <template v-if="contactChildren.length">
      <ContactsTableRow
        class="--nested"
        v-for="subcontact in contactChildren" :key="subcontact.id"
        :contact="subcontact"
      />
    </template>
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
    &__row-wrap
      position: relative
      &.--nested
        margin-left: 10px
    &__row
      position: relative
      display: flex
      border-radius: 6px
      margin-bottom: 1px

    &__cell
      position: relative
      padding: 10px
      border-radius: 6px
      background: white
      & + &
        margin-left: 1px

      &.--name
        flex-grow: 1
      &.--phone
        width: 200px

</style>