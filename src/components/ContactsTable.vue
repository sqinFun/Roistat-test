<template>
  <div class="nested-table-wrap">
    <div class="nested-table">
      <ContactsTableHeader />
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
import ContactsTableHeader from './ContactsTableHeader'
export default {
  components: {
    ContactsTableRow,
    ContactsTableHeader,
  },
  computed: {
    ...mapState('contacts', {
      contacts: s => s.contacts
    }),
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
  
</style>