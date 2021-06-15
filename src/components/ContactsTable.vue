<template>
  <div class="nested-table-wrap">
    <div class="nested-table">
      <ContactsTableHeader
        @setContactsSort="setContactsSort"
        :activeSortField="activeSortField"
      />
      <ContactsTableRow
        v-for="contact in contactsSort" :key="contact.id"
        :contact="contact"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'
import ContactsTableRow from './ContactsTableRow'
import ContactsTableHeader from './ContactsTableHeader'
export default {
  components: {
    ContactsTableRow,
    ContactsTableHeader,
  },
  data: () => ({
    activeSortField: null,
  }),
  computed: {
    ...mapState('contacts', {
      contacts: s => s.contacts
    }),
    contactsSort() {
      if(this.activeSortField)
        return this.contactsRecursionSort(this.contacts, this.activeSortField)
      return this.contacts
    }
  },
  created() {
    this.getContactList()
  },
  methods: {
    contactsRecursionSort(contacts, field) {
      let sortedContacts = _.cloneDeep(contacts)
      // Видел правило, что нельзя использовать переменные вроде "a"
      // Но думаю, что это тот самый случай, когда можно
      return sortedContacts
        .sort((a , b) => a[field].toLowerCase().localeCompare(b[field].toLowerCase()))
        .map(contact => ({
          ...contact,
          children: this.contactsRecursionSort(contact.children, field)
        }))
    },
    setContactsSort(sortField) {
      if(sortField === this.activeSortField)
        this.activeSortField = null
      else
        this.activeSortField = sortField
    },
    getContactList() {
      this.$store.dispatch('contacts/getContactsFromLocalStorage')
    }
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