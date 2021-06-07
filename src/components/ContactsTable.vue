<template>
  <div class="nested-table-wrap">
    <div class="nested-table">
      <ContactsTableRow
        v-for="contact in contacts" :key="contact.id"
        :contact="contact"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContactsTableRow from './ContactsTableRow'
export default {
  components: {
    ContactsTableRow,
  },
  computed: {
    ...mapState('contacts', {
      contacts: s => s.contacts
    })
  }

}
</script>

<style lang="sass">
.nested-table-wrap
  max-width: 700px
  width: 100%
.nested-table
  display: flex
  flex-direction: column
  border-top: 1px solid black
  
</style>